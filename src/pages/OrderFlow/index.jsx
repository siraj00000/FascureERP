import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleFetchAction } from "../../context/actions";
import Splash from "../../components/Splash";
import TimeLine from "./OrdersProgress/TimeLine";

const OrderFlow = () => {
  let navigate = useNavigate();
  const { state: so_id } = useLocation();
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (so_id === null) navigate("/sales-order"); // -1 use to goback to previous route
    let isMounted = true;

    const getOrderProgress = async () => {
      try {
        const response = await handleFetchAction(
          `http://localhost:3000/api/get/po-invoice-by-sale-order-id/?sale_order_id=${so_id}`
        );

        if (isMounted) {
          setProgress(response.data);
        }
      } catch (error) {
        if (error.response.status === 400) {
          setProgress(error.response.data);
          return;
        }
        console.log(error);
      }
    };

    getOrderProgress();

    return () => {
      isMounted = false;
    };
  }, []);

  let isLoading = progress === null;

  let data = { so_id, progress };
  console.log(so_id);
  return (
    <main className="p-10">
      {isLoading ? <Splash /> : <TimeLine data={data} />}
    </main>
  );
};

export default React.memo(OrderFlow);
