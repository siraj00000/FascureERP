import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { RECEIVE_ORDER_DROPDOWNS } from "../../utils/formdropdown_grid.data";
import { RECEIVE_ORDER_FORM } from "../../utils/form_grid.data";
import { RECEIVE_ORDER_SCHEMA } from "../../utils/states.values";
import { RECEIVE_ORDER_GRID } from "../../utils/table_header.data";

const ReceiveOrder = () => {
  return (
    <PageLayout
      title={"Receive Order"}
      URL={"/api/receive_orders"}
      pageGrid={RECEIVE_ORDER_GRID}
      formGrid={RECEIVE_ORDER_FORM}
      valuesGroup={RECEIVE_ORDER_SCHEMA}
      formDropdownGrid={RECEIVE_ORDER_DROPDOWNS}
      searchKey={"signature"}
      moreDataKey={"receive_order_detail"}
    />
  );
};

export default ReceiveOrder;
