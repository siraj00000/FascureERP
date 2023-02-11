import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { PRODUCT_FORM } from "../../utils/form_grid.data";
import { PRODUCT_SCHEMA } from "../../utils/states.values";
import { PRODUCT_GRID } from "../../utils/table_header.data";
import { PRODUCT_DROPDOWNS } from "../../utils/formdropdown_grid.data";

const Product = () => {
  return (
    <PageLayout
      title={"Product"}
      URL={"/api/products"}
      pageGrid={PRODUCT_GRID}
      formGrid={PRODUCT_FORM}
      valuesGroup={PRODUCT_SCHEMA}
      formDropdownGrid={PRODUCT_DROPDOWNS}
      searchKey={"name"}
    />
  );
};

export default Product;
