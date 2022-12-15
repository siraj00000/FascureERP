import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { REQUEST_DETAIL_DROPDOWN } from "../../utils/formdropdown_grid.data";
import { REQUEST_DETAIL_FORM } from "../../utils/form_grid.data";
import { REQUEST_DETAIL_SCHEMA } from "../../utils/states.values";
import { REQUEST_DETAIL_GRID } from "../../utils/table_header.data";

const RequestDetail = () => {
  return (
    <PageLayout
      title={"Request Detail"}
      URL={"/api/reqdetails"}
      formDropdownGrid={REQUEST_DETAIL_DROPDOWN}
      pageGrid={REQUEST_DETAIL_GRID}
      formGrid={REQUEST_DETAIL_FORM}
      valuesGroup={REQUEST_DETAIL_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default RequestDetail;
