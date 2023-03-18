import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import { handleFetchAction } from "../../../context/actions";
import { BsChevronDown } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import RoForms from "../ReceiveOrder/RoForms";
import ViewPurchaseOrder from "./ViewPurchaseOrder";
import InsertPurchaseOrder from "./InsertPurchaseOrder";
import OrderEditForm from "../../../components/EditForms/OrderEditForm";

const PurchaseOrder = ({ data, activeIndex }) => {
  const [PO_Collections, setPOCollections] = useState(null); // SO refers to Sales Order
  const [accordianIndex, setAccordianIndex] = useState(null);

  const fetchData = async () => {
    setPOCollections(null);
    try {
      const response = await handleFetchAction(
        `http://localhost:3000/api/get/po-ro-by-sale-order-id/?sale_order_id=${data.id}`
      );
      setPOCollections({
        success: true,
        data: response.data,
      });
    } catch (error) {
      if (!error.response?.data?.success) {
        setPOCollections(error.response?.data);
        return;
      }
      console.log(error);
    }
  };

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      activeIndex === 1 && fetchData();
    }
    return () => {
      isMount = false;
    };
  }, []);

  const handleAccordianIndex = (index) => {
    if (accordianIndex === index) {
      setAccordianIndex(null);
    } else {
      setAccordianIndex(index);
    }
  };
  let isLoading = PO_Collections === null;
  let doesExits = !isLoading && PO_Collections.success;
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="">
        <InsertPurchaseOrder id={data.id} onInsertComplete={fetchData} />
      </div>
      {doesExits ? (
        <section className="flex flex-col gap-2">
          {PO_Collections?.data?.po_order.length !== 0 ? (
            <div className="bg-white w-full flex items-center justify-between px-4 py-2 rounded-md text-darkfs font-bold cursor-pointer">
              <h1 className="flex-1">PO No.</h1>
              <h1 className="flex-1">Grand Total</h1>
              <h1 className="flex-1">Date</h1>
              <h1 className="flex-1">Status</h1>
              <h1 className="flex-1"></h1>
            </div>
          ) : null}
          {PO_Collections?.data?.po_order.map((item, index) => {
            return (
              <div key={index} className="w-full">
                {/* Purchase Order */}
                <div className="bg-white text-darkfs border-1 w-full flex items-center justify-between py-2 px-4 rounded-md font-bold cursor-pointer">
                  <h1 className="flex-1">{item.po_num}</h1>
                  <h1 className="flex-1">{item.grand_total}</h1>
                  <h1 className="flex-1">{item.created_at.split("T")[0]}</h1>
                  <h1 className="flex-1">
                    <span className="bg-greenfs py-1 px-3 text-white text-sm rounded-full">
                      {item.status}
                    </span>
                  </h1>
                  <div className="flex-1 flex items-center justify-end">
                    <ViewPurchaseOrder id={data.id} />
                    <RoForms
                      id={item.id}
                      attribute={"receive_order"}
                      onInsertComplete={fetchData}
                    />
                    <OrderEditForm
                      id={data.id}
                      orderData={item}
                      onEditComplete={fetchData}
                    />
                    <BsChevronDown
                      size={20}
                      onClick={() => handleAccordianIndex(index)}
                    />
                  </div>
                </div>

                {/* Receive Order List */}
                {accordianIndex === index &&
                PO_Collections?.data?.ro_order[index].length !== 0 ? (
                  <div className="w-full p-2 border-1 rounded-md my-2 flex flex-col gap-2">
                    {PO_Collections?.data?.ro_order[index].map(
                      (roItem, roIndex) => {
                        return (
                          <div
                            key={roIndex}
                            className="w-full py-2 px-5 rounded-md bg-gray-200  text-darkfs font-semibold "
                          >
                            <div className="w-full flex items-center justify-between">
                              <h1 className="flex-1">
                                {roItem?.warehouse?.name}{" "}
                                <span className="text-black font-bold text-[8px] p-1 rounded-sm">
                                  o Warehouse
                                </span>
                              </h1>
                              <h1 className="flex-1">
                                {roItem.created_at?.split("T")[0]}{" "}
                                <span className="text-black font-bold text-[8px] p-1 rounded-sm">
                                  o Date
                                </span>
                              </h1>
                              <button className="">
                                <GrView size={20} />
                              </button>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
      ) : (
        <h1>{PO_Collections?.error}</h1>
      )}
    </div>
  );
};

export default React.memo(PurchaseOrder);
