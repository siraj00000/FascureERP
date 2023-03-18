import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { LANGUAGE_FORM } from "../../utils/form_grid.data";
import { LANGUAGE_SCHEMA } from "../../utils/states.values";
import { LANGUAGE_GRID } from "../../utils/table_header.data";

const Language = () => {
  return (
    <PageLayout
      title={"Language"}
      URL={"/api/languages"}
      pageGrid={LANGUAGE_GRID}
      formGrid={LANGUAGE_FORM}
      valuesGroup={LANGUAGE_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default Language;
