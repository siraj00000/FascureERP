import React, { useState, useMemo, useRef } from "react";
import TransitionModal from "../../../components/TransitionModal";
import { handleFetchAction } from "../../../context/actions";
import CompanyInformation from "../../../components/CompanyInfo";
import ReactToPrint from "react-to-print";
import Barcode from "react-barcode";

const ViewDeliveryOrder = ({ id }) => {
  const componentRef = useRef();

  const [DO_Collections, setDOCollections] = useState(null); // RO refers to Receive Order
  const sessionUser = sessionStorage.getItem("session");
  let user = JSON.parse(sessionUser);

  let currentDate = new Date().toDateString();

  const fetchSalesOrder = async () => {
    try {
      const response = await handleFetchAction(
        `/api/get/delivery-order-by-id?id=${id}`
      );
      setDOCollections(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const joinDOSerialNumberAndCountItems = (partNum, list) => {
    let serialNumJoinList = [];
    let count = 0;

    list.forEach((item) => {
      if (item.part_number === partNum) {
        serialNumJoinList.push(item.serial_number);
        count++;
      }
    });

    return { serialNumList: serialNumJoinList.join(", "), noOfItems: count };
  };

  const receiveOrderDetail = () => {
    if (!DO_Collections) return;

    let { deliveryOrder, saleOrder } = DO_Collections;

    let doDetails = deliveryOrder.detail;
    let soDetail = saleOrder[0].detail;

    let prevPartNum;
    let doDetailList = [];

    for (let index = 0; index < soDetail?.length; index++) {
      const soElement = soDetail[index];
      let soItemPartNum = soElement?.product?.part_number;

      let doSerialNumList = joinDOSerialNumberAndCountItems(
        soItemPartNum,
        doDetails
      );

      doDetails.forEach((doElement) => {
        let isSOPartNumMatching = soItemPartNum === doElement.part_number;
        let isPrevPartNumberMatching = doElement.part_number === prevPartNum;

        if (isSOPartNumMatching && !isPrevPartNumberMatching) {
          doDetailList.push({
            description: soElement.description,
            part_number: doElement.part_number,
            serial_number: doSerialNumList.serialNumList,
            quantity: doElement.quantity,
            noOfItems: doSerialNumList.noOfItems,
          });
        }

        prevPartNum = doElement.part_number;
      });
    }

    return doDetailList;
  };

  let doItems = useMemo(() => receiveOrderDetail(), [DO_Collections]);
  let isLoading = DO_Collections === null || !doItems;
  return (
    <div>
      <TransitionModal
        title={"View"}
        onPress={fetchSalesOrder}
        isLoading={isLoading}
      >
        <ReactToPrint
          trigger={() => (
            <button className="bg-greenfs p-2 text-md text-white rounded-md m-5">
              Print
            </button>
          )}
          content={() => componentRef.current}
        />
        <div className="w-[1200px]">
          <CompanyInformation />
          <h1 className="text-3xl font-bold text-center underline">
            Delivery Order
          </h1>
          <div className="w-full flex flex-col gap-5 p-3">
            {/* Master Info */}
            <div className="w-full flex flex-wrap border-1 border-gray-300 rounded-md text-sm font-semibold">
              <div className="w-1/3 border-b-1 px-2 border-r-1 min-h-[2.5rem]">
                <h1>
                  Salers Order No.:{" "}
                  <span className="font-normal ml-5">
                    {DO_Collections?.saleOrder[0].so_num}
                  </span>
                </h1>
              </div>

              <div className="w-1/3 border-b-1 px-2 border-r-1 ">
                <h1>
                  Received From:{" "}
                  <span className="font-normal ml-5">
                    {DO_Collections?.saleOrder[0].customer?.name}
                  </span>
                </h1>
              </div>
              <div className="w-1/3 border-b-1 px-2">
                <h1>
                  Customer Invoice:{" "}
                  <span className="font-normal ml-5">
                    {DO_Collections?.saleOrder[0].so_num}
                  </span>
                </h1>
              </div>

              <div className="w-1/3 px-2 border-r-1">
                <h1>
                  Person: <span className="font-normal ml-5">{user.name}</span>
                </h1>
              </div>
              <div className="w-1/3 px-2 border-r-1 min-h-[2.5rem]">
                <h1>
                  Warehouse:{" "}
                  <span className="font-normal ml-5">
                    {DO_Collections?.deliveryOrder?.warehouse?.name}
                  </span>
                </h1>
              </div>
              <div className="w-1/3 px-2">
                <h1>
                  Received At:{" "}
                  <span className="font-normal ml-5">
                    {DO_Collections?.deliveryOrder?.created_at.split("T")[0]}
                  </span>
                </h1>
              </div>
            </div>

            {/* Details */}
            <table className=" border-separate border-spacing-0 w-full border-1 border-gray-300 rounded-md">
              <thead className="h-10 font-semibold w-full">
                <tr className="text-center bg-gray-200 w-full rounded-md">
                  <th>Item No.</th>
                  <th>Part No</th>
                  <th colSpan={2}>Description</th>
                  <th>Serial No</th>
                  <th>Tot Qty</th>
                  <th>Rec Qty</th>
                </tr>
              </thead>
              <tbody className="border-[1px] w-full">
                {doItems?.map((item, index) => (
                  <tr
                    key={index}
                    className="h-10 text-center divide-x-1 divide-y-1"
                  >
                    <td>{index + 1}</td>
                    <td className="text-center max-w-[150px] barcode">
                      <Barcode
                        value={item.part_number}
                        width={1.5}
                        height={20}
                        format="CODE128"
                      />
                    </td>
                    <td colSpan={2}>{item.description}</td>
                    <td className="max-w-[150px] barcode">
                      <Barcode
                        value={item.serial_number}
                        width={1.5}
                        height={20}
                        format="CODE128"
                      />
                    </td>
                    <td>{item.noOfItems}</td>
                    <td>{item.quantity * -1}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Note */}
            <div className="w-full p-5 border-1 border-gray-300 rounded-md text-sm">
              <p title="Delivery order note">
                {DO_Collections?.deliveryOrder.note}
              </p>
            </div>

            {/* End */}
            <div className="w-full flex gap-10 p-5 border-1 border-gray-300 rounded-md text-sm uppercase font-semibold">
              <h6>__Completed Order</h6>
              <h6>
                Received By: <span className="font-normal">{user.name}</span>
              </h6>
              <h6 className="ml-auto">
                Date: <span className="font-normal">{currentDate}</span>
              </h6>
            </div>
          </div>
        </div>
      </TransitionModal>
    </div>
  );
};

export default React.memo(ViewDeliveryOrder);
