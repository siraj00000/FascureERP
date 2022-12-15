import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { handleFetchAction } from "../context/actions";

const ViewTableGrid = ({ type, onClose, focusedId }) => {
  const [info, setInfo] = useState([]);
  const handleClose = () => onClose(false);
  useEffect(async () => {
    try {
      const response = await handleFetchAction(`/api/sale_orders/${focusedId}`);
      setInfo(response?.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="relative bg-white w-full z-0 p-10">
      <div className="flex items-center justify-between">
        <FaWindowClose
          size={30}
          className="cursor-pointer"
          onClick={handleClose}
        />
        <button className="rounded-full bg-greenfs py-2 px-5 text-gray-100 text-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  tracking-widest uppercase">
          Convert
        </button>
      </div>
      <div className="text-right py-2 z-10">
        <h1 className="text-darkfs text-3xl font-bold uppercase">
          {type} Form
        </h1>
      </div>
      <div>
        <div className="flex flex-col items-end m-2">
          <ColumnField
            keyName={"Serial No#"}
            value={info?.sale_order?.so_num}
          />
          <ColumnField
            keyName={"Reference No#"}
            value={info?.sale_order?.reference_number}
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
            <ColumnField keyName={"Date"} value={info?.sale_order?.date} />
            <ColumnField
              keyName={"Due Date"}
              value={info?.sale_order?.due_date}
            />
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
                <td>{info?.sale_order?.total_without_vat}</td>
                <td>{info?.sale_order?.vat_total}</td>
                <td>{info?.sale_order?.grand_total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-5">
          <ColumnField
            keyName={"Total (Without VAT)"}
            value={info?.sale_order?.total_without_vat}
          />
          <ColumnField
            keyName={"VAT Total"}
            value={info?.sale_order?.vat_total}
          />
          <ColumnField
            keyName={"Grand Total"}
            value={info?.sale_order?.grand_total}
          />
        </div>
        <div className="my-5"></div>
        <ColumnField keyName={"Address"} value={info?.sale_order?.address} />
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

export default ViewTableGrid;
