import React, { useMemo, useState } from "react";
import TimeLineHeader from "./TimeLineHeader";
import TimeLineBody from "./TimeLineBody";

const TimeLine = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sortPurchaseOrderProgress = (po_order) => {
    let po = {};
    let ro = {};

    po["title"] = "Purchase Order";
    ro["title"] = "Receive Order";

    po["success"] = po_order.success;
    ro["success"] = po_order.success;

    po["id"] = data.so_id;
    ro["id"] = data.so_id;

    return [po, ro];
  };
  const sortInvoiceOrderProgress = (invoice) => {
    let inv = {};
    let re = {};

    inv["title"] = "Invoice Order";
    inv["success"] = invoice.success;

    re["title"] = "Receipt";
    re["success"] = invoice.success;
    inv["id"] = data.so_id;
    re["id"] = data.so_id;
    return [inv, re];
  };
  const sortProgressMethod = () => {
    let po_order = data.progress["po order"];
    let invoice = data.progress["invoice"];

    let so = {
      title: "Sales Order",
      id: data.so_id,
      success: true,
    };

    let _DO = {
      title: "Delivery Order",
      id: data.so_id,
      success: true,
    };
    let invRes = sortInvoiceOrderProgress(invoice);
    let inv = invRes[0];
    let re = invRes[1];

    let poRes = sortPurchaseOrderProgress(po_order);
    let po = poRes[0];
    let ro = poRes[1];

    let sortedData = [so, po, ro, _DO, inv, re];
    return sortedData;
  };

  let sortProgress = useMemo(() => sortProgressMethod(), [data]);
  return (
    <div>
      <TimeLineHeader
        activeIndex={currentIndex}
        setIndex={setCurrentIndex}
        data={sortProgress}
      />
      <TimeLineBody activeIndex={currentIndex} data={sortProgress} />
    </div>
  );
};

export default React.memo(TimeLine);
