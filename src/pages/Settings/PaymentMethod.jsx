import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { PAYMENT_METHOD_FORM } from "../../utils/form_grid.data";
import { PAYMENT_METHOD_SCHEMA } from "../../utils/states.values";
import { PAYMENT_METHOD_GRID } from "../../utils/table_header.data";

const PaymentMethod = () => {
  return (
    <PageLayout
      title={"Payment Method"}
      URL={"/api/paymentmethods"}
      pageGrid={PAYMENT_METHOD_GRID}
      formGrid={PAYMENT_METHOD_FORM}
      valuesGroup={PAYMENT_METHOD_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default PaymentMethod;
