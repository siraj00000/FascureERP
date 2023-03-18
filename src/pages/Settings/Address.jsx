import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { ADDRESS_DROPDOWNS } from "../../utils/formdropdown_grid.data";
import { ADDRESS_FORM } from "../../utils/form_grid.data";
import { ADDRESS_SCHEMA } from "../../utils/states.values";
import { ADDRESS_GRID } from "../../utils/table_header.data";

const Address = () => {
  return (
    <PageLayout
      title={"Address"}
      URL={"/api/addresses"}
      pageGrid={ADDRESS_GRID}
      formGrid={ADDRESS_FORM}
      valuesGroup={ADDRESS_SCHEMA}
      formDropdownGrid={ADDRESS_DROPDOWNS}
      searchKey={"name"}
    />
  );
};

export default Address;
