import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { WARE_HOUSE_FORM } from "../../utils/form_grid.data";
import { WARE_HOUSE_SCHEMA } from "../../utils/states.values";
import { WARE_HOUSE_GRID } from "../../utils/table_header.data";

const WareHouse = () => {
  return (
    <PageLayout
      title={"Ware House"}
      URL={"/api/ware_houses"}
      pageGrid={WARE_HOUSE_GRID}
      formGrid={WARE_HOUSE_FORM}
      valuesGroup={WARE_HOUSE_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default WareHouse;
