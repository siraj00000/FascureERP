import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { PAYMENT_TERMS_FORM } from "../../utils/form_grid.data";
import { PAYMENT_TERM_SCHEMA } from "../../utils/states.values";
import { PAYMENT_TERM_GRID } from "../../utils/table_header.data";

const PaymentTerms = () => {
  return (
    <PageLayout
      title={"Payment Term"}
      URL={"/api/payment_terms"}
      pageGrid={PAYMENT_TERM_GRID}
      formGrid={PAYMENT_TERMS_FORM}
      valuesGroup={PAYMENT_TERM_SCHEMA}
      searchKey={"type"}
    />
  );
};

export default PaymentTerms;
