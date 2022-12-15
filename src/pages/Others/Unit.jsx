import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { UNIT_FORM } from "../../utils/form_grid.data";
import { UNIT_SCHEMA } from "../../utils/states.values";
import { UNIT_GRID } from "../../utils/table_header.data";

const Unit = () => {
  return (
    <PageLayout
      title={"Unit"}
      URL={"/api/units"}
      pageGrid={UNIT_GRID}
      formGrid={UNIT_FORM}
      valuesGroup={UNIT_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default Unit;
