/**
 * A component that displays customer information.
 * @param {Object} props - The props object.
 * @param {Object} props.customerData - The customer data object containing the information to be displayed.
 * @param {string} props.infoOf - The type of information to be displayed (e.g. "Customer Info").
 * @returns {JSX.Element} - The rendered component.
 */

import React from "react";
import { LabelAndValueContainer } from "./template_sub_components/LabelAndValuesContainer";

const CustomerInfo = ({ customerData, infoOf }) => {
  return (
    <div>
      <LabelAndValueContainer label={infoOf} values={customerData?.name} />
      <LabelAndValueContainer
        label={"CR Number"}
        values={customerData?.cr_number}
      />
      <LabelAndValueContainer
        label={"VAT Number"}
        values={customerData?.vat_number}
      />
      <LabelAndValueContainer label={"Email"} values={customerData?.email} />
      <LabelAndValueContainer
        label={"Phone Number"}
        values={customerData?.phone_number}
      />
    </div>
  );
};

export default CustomerInfo;
