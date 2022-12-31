import React from "react";
import Template from "../Template";

const InvoiceTemplete = ({ data }) => {
  let info = data.data;
  let available = false;

  return available ? (
    <Template info={info} type="Invoice Order" nodeKey={"sale_order"} />
  ) : (
    <button>Convert</button>
  );
};

export default InvoiceTemplete;
