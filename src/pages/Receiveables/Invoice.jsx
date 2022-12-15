import React from "react";
import PageLayout from "../../components/PageLayout/ISPLayout";
import { INVOICE_GRID } from "../../utils/table_header.data";

const InvoiceOrder = () => {
  return (
    <PageLayout
      title={"Invoice Order"}
      URL={"/api/invoices"}
      dataType={"invoice_order"}
      pageGrid={INVOICE_GRID}
      searchKey={"inv_num"}
      moreDataKey={"invoice_detail"}
    />
  );
};

export default InvoiceOrder;
