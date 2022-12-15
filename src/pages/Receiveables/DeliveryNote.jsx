import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { DELIVERY_ORDER_DROPDOWNS } from "../../utils/formdropdown_grid.data";
import { DELIVERY_ORDER_FORM } from "../../utils/form_grid.data";
import { DELIVERY_ORDER_SCHEMA } from "../../utils/states.values";
import { DELIVERY_ORDER_GRID } from "../../utils/table_header.data";

const DeliveryOrder = () => {
  return (
    <PageLayout
      title={"Delivery Order"}
      URL={"/api/delivery_orders"}
      pageGrid={DELIVERY_ORDER_GRID}
      formGrid={DELIVERY_ORDER_FORM}
      valuesGroup={DELIVERY_ORDER_SCHEMA}
      formDropdownGrid={DELIVERY_ORDER_DROPDOWNS}
      searchKey={"signature"}
      moreDataKey={"delivery_order_detail"}
    />
  );
};

export default DeliveryOrder;
