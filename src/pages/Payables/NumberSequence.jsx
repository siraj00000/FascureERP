import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { NUMBER_SEQUENCES_FORM } from "../../utils/form_grid.data";
import { NUMBER_SEQUENCE_SCHEMA } from "../../utils/states.values";
import { NUMBER_SEQUENCE_GRID } from "../../utils/table_header.data";

const NumberSequence = () => {
  return (
    <PageLayout
      title={"Number Sequence"}
      URL={"/api/sequencenumbers"}  
      pageGrid={NUMBER_SEQUENCE_GRID}
      formGrid={NUMBER_SEQUENCES_FORM}
      valuesGroup={NUMBER_SEQUENCE_SCHEMA}
      searchKey={"seq_name"}
    />
  );
};

export default NumberSequence;
