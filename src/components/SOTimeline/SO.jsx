// SO stands for Sale Order
// It is design in the detail option of SOTimeLine

import React from "react";
import Template from "./Template";

const SaleOrderTemplate = ({ data }) => {
  let info = data.data;
  return <Template info={info} type="Sale Order" nodeKey={"sale_order"} />;
};
export default SaleOrderTemplate;
