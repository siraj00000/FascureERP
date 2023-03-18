import React, { useState, useMemo, useRef } from "react";
import TransitionModal from "../../../components/TransitionModal";
import { handleFetchAction } from "../../../context/actions";
import CompanyInformation from "../../../components/CompanyInfo";
import ReactToPrint from "react-to-print";

const ViewReceiveOrder = ({ id }) => {
  const componentRef = useRef();
  const [RO_Collections, setROCollections] = useState(null); // RO refers to Receive Order
  const sessionUser = sessionStorage.getItem("session");
  let user = JSON.parse(sessionUser);

  let currentDate = new Date().toDateString();

  const fetchPurchaseOrder = async () => {
    try {
      const response = await handleFetchAction(
        `/api/get/receive-order-by-id?id=${id}`
      );
      setROCollections(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const joinROSerialNumberAndCountItems = (partNum, list) => {
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
    if (!RO_Collections) return;

    let { receiveOrder, purchaseOrder } = RO_Collections;

    let poDetail = purchaseOrder[0].detail;
    let roDetail = receiveOrder.detail;

    let prevPartNum;
    let roDetailList = [];

    for (let index = 0; index < poDetail.length; index++) {
      const poElement = poDetail[index];
      let poItemPartNum = poElement?.product?.part_number;

      let roSerialNumList = joinROSerialNumberAndCountItems(
        poItemPartNum,
        roDetail
      );

      roDetail.forEach((roElement) => {
        let isPOPartNumMatching = poItemPartNum === roElement.part_number;
        let isPrevPartNumberMatching = roElement.part_number === prevPartNum;

        if (isPOPartNumMatching && !isPrevPartNumberMatching) {
          roDetailList.push({
            description: poElement.description,
            part_number: roElement.part_number,
            serial_number: roSerialNumList.serialNumList,
            quantity: roElement.quantity,
            noOfItems: roSerialNumList.noOfItems,
          });
        }

        prevPartNum = roElement.part_number;
      });
    }

    return roDetailList;
  };

  let roItems = useMemo(() => receiveOrderDetail(), [RO_Collections]);
  let isLoading = RO_Collections === null || !roItems;
  return (
    <div>
      <TransitionModal
        title={"View"}
        onPress={fetchPurchaseOrder}
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
        <div className="w-[1200px]" ref={componentRef}>
          <CompanyInformation />
          <h1 className="text-3xl font-bold text-center underline">
            Receiving Order
          </h1>
          <div className="w-full flex flex-col gap-5 p-3">
            {/* Master Info */}
            <div className="w-full flex flex-wrap border-1 border-gray-300 rounded-md text-sm font-semibold">
              <div className="w-1/3 border-b-1 px-2 border-r-1 min-h-[2.5rem]">
                <h1>
                  Purchase Order No.:{" "}
                  <span className="font-normal ml-5">
                    {RO_Collections?.purchaseOrder[0].po_num}
                  </span>
                </h1>
              </div>

              <div className="w-1/3 border-b-1 px-2 border-r-1 ">
                <h1>
                  Received From:{" "}
                  <span className="font-normal ml-5">
                    {RO_Collections?.purchaseOrder[0].supplier?.name}
                  </span>
                </h1>
              </div>
              <div className="w-1/3 border-b-1 px-2">
                <h1>
                  Supplier Invoice:{" "}
                  <span className="font-normal ml-5">
                    {RO_Collections?.purchaseOrder[0].supplier?.name}
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
                    {RO_Collections?.receiveOrder?.warehouse?.name}
                  </span>
                </h1>
              </div>
              <div className="w-1/3 px-2">
                <h1>
                  Received At:{" "}
                  <span className="font-normal ml-5">
                    {RO_Collections?.receiveOrder?.created_at.split("T")[0]}
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
                {roItems?.map((item, index) => (
                  <tr
                    key={index}
                    className="h-10 text-center divide-x-1 divide-y-1"
                  >
                    <td>{index + 1}</td>
                    <td>{item.part_number}</td>
                    <td colSpan={2}>{item.description}</td>
                    <td>{item.serial_number}</td>
                    <td>{item.noOfItems}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Note */}
            <div className="w-full p-5 border-1 border-gray-300 rounded-md text-sm">
              <p title="Receive order note">
                {RO_Collections?.receiveOrder.note}
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

export default React.memo(ViewReceiveOrder);
