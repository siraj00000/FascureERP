import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { CUSTOMER_DROPDOWN } from "../../utils/formdropdown_grid.data";
import { CUSTOMER_FORM } from "../../utils/form_grid.data";
import { CUSTOMER_SCHEMA } from "../../utils/states.values";
import { CUSTOMER_GRID } from "../../utils/table_header.data";
import { useStateContext } from "../../context/ContextProvider";

const Customer = () => {
  const { permissions } = useStateContext();
  console.log(permissions);
  return (
    <PageLayout
      title={"Customer"}
      URL={"/api/customers"}
      pageGrid={CUSTOMER_GRID}
      formGrid={CUSTOMER_FORM}
      formDropdownGrid={CUSTOMER_DROPDOWN}
      valuesGroup={CUSTOMER_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default Customer;
