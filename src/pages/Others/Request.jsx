import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { REQUEST_DROPDOWN } from "../../utils/formdropdown_grid.data";
import { REQUEST_FORM } from "../../utils/form_grid.data";
import { REQUEST_SCHEMA } from "../../utils/states.values";
import { REQUEST_GRID } from "../../utils/table_header.data";

const Request = () => {
  return (
    <PageLayout
      title={"Request"}
      URL={"/api/reqs"}
      formDropdownGrid={REQUEST_DROPDOWN}
      pageGrid={REQUEST_GRID}
      formGrid={REQUEST_FORM}
      valuesGroup={REQUEST_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default Request;
