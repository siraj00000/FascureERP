import React from "react";
import PageLayout from "../../components/PageLayout/ISPLayout";
import { SALES_ORDER_DROPDOWNS } from "../../utils/formdropdown_grid.data";
import { SALES_ORDER_FORM } from "../../utils/form_grid.data";
import { SALES_ORDER_SCHEMA } from "../../utils/states.values";
import { SALES_ORDER_GRID } from "../../utils/table_header.data";
import { useStateContext } from "../../context/ContextProvider";

const SalesOrder = () => {
  const {lang} = useStateContext()
  return (
    <PageLayout
      title={lang?.sale_order}
      URL={"/api/sale_orders"}
      dataType={"sale_order"}
      pageGrid={SALES_ORDER_GRID}
      formGrid={SALES_ORDER_FORM}
      valuesGroup={SALES_ORDER_SCHEMA}
      formDropdownGrid={SALES_ORDER_DROPDOWNS}
      searchKey={"date"}
      moreDataKey={"so_detail"}
      invpo={true}
    />
  );
};

export default SalesOrder;
