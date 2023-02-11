// import React, { useEffect, useState } from "react";
import PurchaseOrder from "./PurchaseOrder";
import RoForms from "./ReceiveOrder/RoForms";
import SalesOrder from "./SalesOrder";
import DeliveryNote from "./DeliveryNote";
import Invoice from "./Invoice";
import Receipt from "./Receipt";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InvoiceOrder from "./Invoice/ViewInvoiceOrder";
// import { useMemo } from "react";
import { handleFetchAction } from "../../context/actions";

const _mock_ = {
  "po order": {
    success: true,
    message: "sale order id exist!",
    po_id: 3,
  },
  invoice: {
    success: false,
    error: "sale order id does not exist!",
  },
};

const OrderFlow = () => {
  let navigate = useNavigate();
  const { state: so_id } = useLocation();
  useEffect(() => {
    if (so_id === null) navigate("/sales-order"); // -1 use to goback to previous route

    const checkOrderProgress = async () => {
      const response = await handleFetchAction(
        `api/get/po-invoice-by-sale-order-id/?sale_order_id=${so_id}`
      );

      console.log(response);
    };
    checkOrderProgress();
  }, []);

  return (
    <main className="p-10">
      <section className="rounded-3xl bg-white p-5">
        <h1 className="text-3xl">Order Flow</h1>
        <div className="flex items-center my-5 rounded-3xl bg-gray-200 p-5">
          <SalesOrder id={so_id} />
          <PurchaseOrder id={so_id} />
          <RoForms id={2} attribute={"receive_order"} />
          <DeliveryNote id={so_id} />
          <Invoice id={so_id} />
          <InvoiceOrder id={40} />
          <Receipt id={1} />
        </div>
      </section>
    </main>
  );
};

export default OrderFlow;

// let { state: sales_order_id } = useLocation();
// const [timeLine, setTimeLine] = useState();
// console.log(sales_order_id);
// useEffect(() => {
//   const checkSalesOrderTimeline = async () => {
//     const response = await handleFetchAction(
//       `/api/get/po-invoice-by-sale-order-id/?sale_order_id=${sales_order_id}`
//     );
//     console.log(response.data);
//   };
//   checkSalesOrderTimeline();
// }, []);
