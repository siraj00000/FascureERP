import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { SUPPLIER_DROPDOWN } from "../../utils/formdropdown_grid.data";
import { SUPPLIER_FORM } from "../../utils/form_grid.data";
import { SUPPLIER_SCHEMA } from "../../utils/states.values";
import { SUPPLIER_GRID } from "../../utils/table_header.data";

const Supplier = () => {
  return (
    <PageLayout
      title={"Supplier"}
      URL={"/api/suppliers"}
      formDropdownGrid={SUPPLIER_DROPDOWN}
      pageGrid={SUPPLIER_GRID}
      formGrid={SUPPLIER_FORM}
      valuesGroup={SUPPLIER_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default Supplier;
