import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { COUNTRY_FORM } from "../../utils/form_grid.data";
import { COUNTRY_SCHEMA } from "../../utils/states.values";
import { COUNTRY_GRID } from "../../utils/table_header.data";

const Country = () => {
  return (
    <PageLayout
      title={"Country"}
      URL={"/api/countries"}
      pageGrid={COUNTRY_GRID}
      formGrid={COUNTRY_FORM}
      valuesGroup={COUNTRY_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default Country;
