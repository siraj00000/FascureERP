import React, { useEffect, useState } from "react";
import { handleFetchAction } from "../../../context/actions";
import InvoiceOrderForm from "./InvoiceOrderForm";
import Loader from "../../../components/Loader";
import ReceiptForm from "../Receipt/ReceiptForm";
import { BsChevronDown } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import ViewInvoiceOrder from "./ViewInvoiceOrder";

const InvoiceOrder = ({ data, activeIndex }) => {
  const [INV_Collections, setInvoiceCollections] = useState(null); // SO refers to Sales Order
  const [accordianIndex, setAccordianIndex] = useState(null);

  const fetchData = async () => {
    setInvoiceCollections(null);
    try {
      const response = await handleFetchAction(
        `http://localhost:3000/api/get/invoice-receipt-by-sale-order-id/?sale_order_id=${data.id}`
      );
      setInvoiceCollections({
        success: true,
        data: response.data,
      });
    } catch (error) {
      if (!error.response?.data?.success) {
        setInvoiceCollections(error.response?.data);
        return;
      }
      console.log(error);
    }
  };

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      activeIndex === 4 && fetchData();
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

  let isLoading = INV_Collections === null;
  let doesExits = !isLoading && INV_Collections.success;
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="">
        <InvoiceOrderForm id={data.id} onInsertComplete={fetchData} />
      </div>
      {doesExits ? (
        <section>
          {INV_Collections?.data?.inv_order.length !== 0 ? (
            <div className="bg-white w-full flex items-center justify-between px-4 py-2 rounded-md text-darkfs font-bold cursor-pointer">
              <h1 className="flex-1">Invoice No.</h1>
              <h1 className="flex-1">Grand Total</h1>
              <h1 className="flex-1">Invoice Date</h1>
              <h1 className="flex-1"></h1>
            </div>
          ) : null}

          {INV_Collections?.data?.inv_order.map((item, index) => {
            return (
              <div key={index} className="w-full">
                {/* Invoice Order */}
                <div className="bg-white text-darkfs border-1 w-full flex items-center justify-between py-2 px-4 rounded-md font-bold cursor-pointer">
                  <h1 className="flex-1">{item.inv_num}</h1>
                  <h1 className="flex-1">{item.grand_total}</h1>
                  <h1 className="flex-1">{item.invoice_date}</h1>
                  <div className="flex-1 flex items-center justify-end">
                    <ViewInvoiceOrder id={data?.id} activeIndex={activeIndex} />
                    <ReceiptForm
                      id={item.id}
                      attribute={"receive_order"}
                      onInsertComplete={fetchData}
                    />
                    <BsChevronDown
                      size={20}
                      onClick={() => handleAccordianIndex(index)}
                    />
                  </div>
                </div>

                {/* Receive Order List */}
                {accordianIndex === index &&
                INV_Collections?.data?.recept[index].length !== 0 ? (
                  <div className="w-full p-2 border-1 rounded-md my-2 flex flex-col gap-2">
                    {INV_Collections?.data?.recept[index].map(
                      (reItem, roIndex) => {
                        return (
                          <div
                            key={roIndex}
                            className="w-full py-2 px-5 rounded-md bg-gray-200  text-darkfs font-semibold "
                          >
                            <div className="w-full flex items-center justify-between">
                              <h1 className="flex-1">
                                {reItem?.receipt_number}
                                <span className="text-black font-bold text-[8px] p-1 rounded-sm">
                                  o unique number
                                </span>
                              </h1>
                              <h1 className="flex-1">
                                {reItem.created_at?.split("T")[0]}{" "}
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
        <h1>{INV_Collections?.error}</h1>
      )}
    </div>
  );
};

export default React.memo(InvoiceOrder);
