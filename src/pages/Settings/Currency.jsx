import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { CURRENCY_FORM } from "../../utils/form_grid.data";
import { CURRENCY_SCHEMA } from "../../utils/states.values";
import { CURRENCY_GRID } from "../../utils/table_header.data";

const Currency = () => {
  return (
    <PageLayout
      title={"Currency"}
      URL={"/api/currencies"}
      pageGrid={CURRENCY_GRID}
      formGrid={CURRENCY_FORM}
      valuesGroup={CURRENCY_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default Currency;
