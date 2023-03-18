import React from "react";
import PageLayout from "../../components/PageLayout/Layout";
import { BANK_ACCOUNT_FORM } from "../../utils/form_grid.data";
import { BANK_ACCOUNT_SCHEMA } from "../../utils/states.values";
import { BANK_ACCOUNT_GRID } from "../../utils/table_header.data";

const BankAccount = () => {
  return (
    <PageLayout
      title={"Bank Account"}
      URL={"/api/bank_accounts"}
      pageGrid={BANK_ACCOUNT_GRID}
      formGrid={BANK_ACCOUNT_FORM}
      valuesGroup={BANK_ACCOUNT_SCHEMA}
      searchKey={"name"}
    />
  );
};

export default BankAccount;
