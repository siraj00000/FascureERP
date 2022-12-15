import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { SLAVE_FORM } from "../../utils/form_grid.data";
import { SLAVE_SCHEMA } from "../../utils/states.values";
import { SLAVE_GRID } from "../../utils/table_header.data";

const Slave = () => {
  return (
    <PageLayout
      title={"Slave"}
      URL={"/api/slaves"}
      pageGrid={SLAVE_GRID}
      formGrid={SLAVE_FORM}
      valuesGroup={SLAVE_SCHEMA}
      searchKey={"part_number"}
    />
  );
};

export default Slave;
