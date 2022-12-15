import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { TERM_APPLIED_FORM } from "../../utils/form_grid.data";
import { TERM_APPLIED_SCHEMA } from "../../utils/states.values";
import { TERM_APPLIED_GRID } from "../../utils/table_header.data";

const TermApplied = () => {
  return (
    <PageLayout
      title={"Term Applied"}
      URL={"/api/termapplieds"}
      pageGrid={TERM_APPLIED_GRID}
      formGrid={TERM_APPLIED_FORM}
      valuesGroup={TERM_APPLIED_SCHEMA}
      searchKey={"created_at"}
    />
  );
};

export default TermApplied;
