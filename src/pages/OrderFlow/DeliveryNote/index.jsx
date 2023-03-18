import React, { useEffect, useState } from "react";
import { handleFetchAction } from "../../../context/actions";
import Loader from "../../../components/Loader";
import ViewDeliveryOrder from "./ViewDeliveryOrder";
import DeliveryOrderForm from "./DeliveryOrderForm";
import EmptyCollection from "../../../components/EmptyCollection";

const DeliveryOrder = ({ data, activeIndex }) => {
  const [DO_Collections, setDOCollections] = useState(null); // DO refers to Delivery Order

  const fetchData = async () => {
    try {
      const response = await handleFetchAction(
        `http://localhost:3000/api/get/delivery-order-by-sale-order-id?sale_order_id=${data.id}`
      );
      setDOCollections({
        success: true,
        data: response?.data,
      });
    } catch (error) {
      if (!error.response?.data?.success) {
        setDOCollections(error.response?.data);
        return;
      }
      console.log(error);
    }
  };

  useEffect(() => {
    let isMount = true;

    if (isMount) {
      activeIndex === 3 && fetchData();
    }
    return () => {
      isMount = false;
    };
  }, [data, activeIndex, fetchData]);

  let isLoading = DO_Collections === null;
  let doesExits = !isLoading && DO_Collections.success;
  let deliveryOrder = DO_Collections?.data?.deliveryOrder;
  let isDeliveryOrderExists = deliveryOrder?.length !== 0;

  if (isLoading) return <Loader />;
  return (
    <section>
      <DeliveryOrderForm id={data.id} onInsertComplete={fetchData} />
      <div className="flex flex-col gap-2">
        {doesExits ? (
          <>
            {isDeliveryOrderExists ? (
              deliveryOrder?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex items-center justify-between bg-white text-darkfs border-1  p-2 rounded-md  font-bold"
                  >
                    <h1 className="flex-1">
                      {item?.do_num}
                      <span className="text-greenfs tracking-widest capitalize font-bold text-[8px] p-1 rounded-sm">
                        o DO No.
                      </span>
                    </h1>
                    <h1 className="flex-1">
                      {item.created_at?.split("T")[0]}{" "}
                      <span className="text-greenfs tracking-widest capitalize font-bold text-[8px] p-1 rounded-sm">
                        o Date
                      </span>
                    </h1>
                    <div>
                      <ViewDeliveryOrder id={item.id} />
                    </div>
                  </div>
                );
              })
            ) : (
              <EmptyCollection text={"Empty Delivery Orders"} />
            )}
          </>
        ) : (
          <h1>{DO_Collections?.error}</h1>
        )}
      </div>
    </section>
  );
};

export default React.memo(DeliveryOrder);
