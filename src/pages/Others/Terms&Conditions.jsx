import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { TERM_CONDITION_FORM } from "../../utils/form_grid.data";
import { TERM_CONDITION_SCHEMA } from "../../utils/states.values";
import { TERM_CONDITIONS_GRID } from "../../utils/table_header.data";

const TermsAndConditions = () => {
  return (
    <PageLayout
      title={"Term Condition"}
      URL={"/api/termconditions"}
      pageGrid={TERM_CONDITIONS_GRID}
      formGrid={TERM_CONDITION_FORM}
      valuesGroup={TERM_CONDITION_SCHEMA}
      searchKey={"term_condition"}
    />
  );
};

export default TermsAndConditions;
