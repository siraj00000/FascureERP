import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { CATEGORY_FORM } from "../../utils/form_grid.data";
import { CATEGORY_SCHEMA } from "../../utils/states.values";
import { CATEGORY_GRID } from "../../utils/table_header.data";

const Category = () => {
  return (
    <PageLayout
      title={"Category"}
      URL={"/api/categories"}
      pageGrid={CATEGORY_GRID}
      formGrid={CATEGORY_FORM}
      valuesGroup={CATEGORY_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default Category;
