import React from "react";

import PurchaseOrder from "../PurchaseOrder/PurchaseOrderForm";
import RoForms from "../ReceiveOrder/RoForms";
import SalesOrder from "../SalesOrder/SalesOrder";
import DeliveryNote from "../DeliveryNote";
import Invoice from "../Invoice";
import Receipt from "../Receipt";
import InvoiceOrder from "../Invoice/ViewInvoiceOrder";

const OrderProgress = ({so_id}) => {
  return (
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
  );
};

export default OrderProgress;
