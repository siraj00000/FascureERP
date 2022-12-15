import React from "react";
import PageLayout from "../../components/PageLayout/ISPLayout";
import { PURCHASE_ORDER_GRID } from "../../utils/table_header.data";

const PurchaseOrder = () => {
  return (
    <PageLayout
      title={"Purchase Order"}
      URL={"/api/purchase_orders"}
      dataType={"purchase_order"}
      pageGrid={PURCHASE_ORDER_GRID}
      searchKey={"po_num"}
      moreDataKey={"po_detail"}
    />
  );
};

export default PurchaseOrder;
