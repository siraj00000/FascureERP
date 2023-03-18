import React, { useEffect, useState } from "react";
import { handleFetchAction } from "../../../context/actions";
import Loader from "../../../components/Loader";
import ViewCashReceipt from "./ViewReceipt";
import EmptyCollection from "../../../components/EmptyCollection";

const CashReceipt = ({ data, activeIndex }) => {
  const [CR_Collections, setCRCollections] = useState(null); // CR refers to Cash Receipt

  useEffect(() => {
    let isMount = true;

    const fetchData = async () => {
      try {
        const response = await handleFetchAction(
          `http://localhost:3000/api/get/invoice-receipt-by-sale-order-id/?sale_order_id=${data.id}`
        );
        setCRCollections({
          success: true,
          data: response?.data,
        });
      } catch (error) {
        if (!error.response?.data?.success) {
          setCRCollections(error.response?.data);
          return;
        }
        console.log(error);
      }
    };
    if (isMount) {
      activeIndex === 5 && fetchData();
    }
    return () => {
      isMount = false;
    };
  }, [data, activeIndex]);

  let isLoading = CR_Collections === null;
  let doesExits = !isLoading && CR_Collections.success;
  let flatData = CR_Collections?.data?.recept?.flatMap((i) => i);
  let isCashReceiptExists = flatData?.length !== 0;
  if (isLoading) return <Loader />;
  return (
    <main>
      <div className="flex flex-col gap-2">
        {doesExits ? (
          <>
            {isCashReceiptExists ? (
              flatData?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex items-center justify-between bg-white text-darkfs border-1 p-2 rounded-md font-bold"
                  >
                    <h1 className="flex-1">
                      {item?.amount}{" "}
                      <span className="text-greenfs tracking-widest capitalize font-bold text-[8px] p-1 rounded-sm">
                        o amount
                      </span>
                    </h1>
                    <h1 className="flex-1">
                      {item.created_at?.split("T")[0]}{" "}
                      <span className="text-greenfs tracking-widest capitalize font-bold text-[8px] p-1 rounded-sm">
                        o Date
                      </span>
                    </h1>
                    <button className="text-white">
                      <ViewCashReceipt id={item.id} />
                    </button>
                  </div>
                );
              })
            ) : (
              <EmptyCollection text={"Empty Cash Receipts"} />
            )}
          </>
        ) : (
          <h1>{CR_Collections?.error}</h1>
        )}
      </div>
    </main>
  );
};

export default React.memo(CashReceipt);
