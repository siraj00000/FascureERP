import React from "react";
import { LabelAndValueContainer } from "./template_sub_components/LabelAndValuesContainer";

const CustomerInfo = ({ customerData }) => {
  return (
    <div>
      <LabelAndValueContainer label={"Customer"} values={customerData.name} />
      <LabelAndValueContainer
        label={"CR Number"}
        values={customerData.cr_number}
      />
      <LabelAndValueContainer
        label={"VAT Number"}
        values={customerData.vat_number}
      />
      <LabelAndValueContainer label={"Email"} values={customerData.email} />
      <LabelAndValueContainer
        label={"Phone Number"}
        values={customerData.phone_number}
      />
    </div>
  );
};

export default CustomerInfo;
