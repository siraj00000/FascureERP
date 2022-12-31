import React from "react";

const Template = ({ info, type, nodeKey }) => {
  return (
    <div className="relative bg-white z-0">
      <div className="text-right py-2 z-10">
        <h1 className="text-darkfs text-3xl font-bold uppercase">
          {type} Form
        </h1>
      </div>
      <div>
        <div className="flex flex-col items-end m-2">
          <ColumnField keyName={"Serial No#"} value={info[nodeKey]?.so_num} />
          <ColumnField
            keyName={"Reference No#"}
            value={info[nodeKey]?.reference_number}
          />
        </div>
        <div className="flex items-baseline justify-between my-4 p-5">
          <div className="border-0 rounded-md">
            <h5 className="text-darkfs text-xl font-semibold mb-3">Bill To</h5>
            <ColumnField keyName={"Customer"} value={info?.customer?.name} />
            <ColumnField
              keyName={"CR Number"}
              value={info?.customer?.cr_number}
            />
            <ColumnField
              keyName={"VAT Number"}
              value={info?.customer?.vat_number}
            />
            <ColumnField keyName={"email"} value={info?.customer?.email} />
            <ColumnField
              keyName={"phone number"}
              value={info?.customer?.phone_number}
            />
            <ColumnField keyName={"Address"} value={info?.customer?.address} />
          </div>
          <div className="flex flex-col items-end">
            <h5 className="text-darkfs text-xl font-semibold mb-3">Dates</h5>
            <ColumnField keyName={"Date"} value={info[nodeKey]?.date} />
            <ColumnField keyName={"Due Date"} value={info[nodeKey]?.due_date} />
          </div>
        </div>

        <div className="">
          <table className="w-full">
            <thead className="border-1 rounded-md p-2 h-8 bg-darkfs text-gray-100">
              <tr className="text-xs px-2">
                <th className="text-left pl-2">Product</th>
                <th colSpan={3}>Description</th>
                <th>Vat%</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Vat Amt</th>
                <th>Line Total</th>
              </tr>
            </thead>
            <tbody>
              {info?.soDetail?.map((item, index) => (
                <tr
                  key={index}
                  className="w-full text-xs text-center h-8 border-1"
                >
                  <td className="text-left pl-2">Item*</td>
                  <td colSpan={3}>{item?.description}</td>
                  <td>{item?.quantity}</td>
                  <td>12%*</td>
                  <td>{item?.unit_price}</td>
                  <td>{item?.vat_amount}</td>
                  <td>{item?.line_total}</td>
                </tr>
              ))}
              <tr className="w-full text-xs text-center font-bold h-8 border-1">
                <td colSpan={4}> </td>
                <td></td>
                <td></td>
                <td>{info[nodeKey]?.total_without_vat}</td>
                <td>{info[nodeKey]?.vat_total}</td>
                <td>{info[nodeKey]?.grand_total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-5">
          <ColumnField
            keyName={"Total (Without VAT)"}
            value={info[nodeKey]?.total_without_vat}
          />
          <ColumnField keyName={"VAT Total"} value={info[nodeKey]?.vat_total} />
          <ColumnField
            keyName={"Grand Total"}
            value={info[nodeKey]?.grand_total}
          />
        </div>
        <div className="my-5"></div>
        <ColumnField keyName={"Address"} value={info[nodeKey]?.address} />
      </div>
    </div>
  );
};

const ColumnField = ({ keyName, value }) => (
  <div className="flex items-center gap-5">
    <h6 className="text-darkfs font-medium text-sm capitalize">{keyName} :</h6>
    <h6 className="text-darkfs font-medium text-sm italic capitalize">
      {value || "- -"}
    </h6>
  </div>
);

export default Template;
