import React, { useMemo } from "react";
import CustomerInfo from "./CustomerInfo";
import { LabelAndValueContainer } from "./template_sub_components/LabelAndValuesContainer";

const FormTemplate = ({
  data,
  orderName,
  orderFor,
  collectionOf,
  date,
  onClose,
}) => {
  /**
   * calcTotal: Method
   * What it returns?
   * 1) total_without_vat (Total of unit price)
   * 2) total_vat (Total of VAT Amount)
   * 3) no_of_quantity (Numbers of Items)
   * */
  const calcTotal = () => {
    let total_without_vat = 0;
    let total_vat = 0;
    let no_of_quantity = 0;

    data?.detail?.forEach((element) => {
      let percent = (element.unit_price * element.discount) / 100;

      let unitPriceWithDiscount = element.unit_price - percent;

      total_without_vat += unitPriceWithDiscount * Number(element?.quantity);
      // vat amount
      total_vat +=
        unitPriceWithDiscount *
        (Number(element?.vat?.percentage) / 100) *
        Number(element?.quantity);

      no_of_quantity += Number(element?.quantity);
    });

    let grand_total = total_without_vat + total_vat;

    return {
      total_without_vat: total_without_vat,
      total_vat: total_vat,
      grand_total: grand_total,
      no_of_quantity,
    };
  };

  /**
   * useMemo restricts the calTotal
   * to render on every change, only run when data.detail not changed
   * */
  const total = useMemo(() => calcTotal(), [data?.detail]);
  
  return (
    <main className="min-w-[1200px] mx-auto p-5">
      <section className="w-full">
        <h1 className="text-4xl font-bold text-center uppercase underline">
          {orderName}
        </h1>
      </section>

      {/* 
        Section contain information related 
        to the order's stackholders informtion and order dates, 
        this section includes bill to, address, and 
        dates (includes date, due states).
      */}
      <section className="flex justify-between w-full my-2 border-1 rounded-md divide-x-1">
        <div className="flex-1">
          <h6 className="text-md text-darkfs font-semibold bg-gray-100 p-1 pl-2">
            Bill to:
          </h6>
          <div className="my-2 p-2">
            <CustomerInfo customerData={data[orderFor]} />
          </div>
        </div>
        <div className="flex-1">
          <h6 className="text-md text-darkfs font-semibold bg-gray-100 p-1 pl-2">
            Address
          </h6>
          <div className="my-2 p-2">
            <h6 className="text-[12px] text-darkfs">
              {data[collectionOf].address}
            </h6>
          </div>
        </div>
        <div className="flex-1">
          <h6 className="text-md text-darkfs font-semibold bg-gray-100 p-1 pl-2">
            Dates
          </h6>
          <div className="my-2 p-2">
            <LabelAndValueContainer
              label={"Date"}
              values={data[collectionOf][date]}
            />
            <LabelAndValueContainer
              label={"Due Date"}
              values={data[collectionOf].due_date}
            />
          </div>
        </div>
      </section>

      {/* 
        Section contains a table view,
        table row would be iterative on the API data,
        row would contain information about order's products.
      */}
      <section className="w-full">
        <table className="table-auto w-full border-1 text-center">
          <thead>
            <tr className="bg-gray-100 h-10 text-sm divide-x-1">
              <th className="pl-2 text-left">Product</th>
              <th colSpan={2}>Description</th>
              <th>Vat %</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>VAT Amount</th>
              <th>Line Total</th>
            </tr>
          </thead>
          <tbody className="divide-y-1">
            {data.detail.map((item, index) => (
              /**
               * Each Row contains one item of order product
               * */
              <tr key={index} className="text-sm w-full divide-x-1 h-10">
                <td className="pl-2 text-left">{item?.product?.name}</td>
                <td colSpan={2}>{item?.description}</td>
                <td>{item?.vat?.percentage}</td>
                <td>{item?.quantity}</td>
                <td>{item?.unit_price} /=</td>
                <td>{item?.vat_amount} /=</td>
                <td>{item?.line_total} /=</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 
        Order Total 
      */}
      <section className="w-full my-2 flex flex-col items-end">
        {/*
         * Total that comes in returns
         * of ---> calcTotal <--- method
         */}
        <article className="w-1/4 border-1 font-semibold rounded-md align-middle divide-y-1">
          <h6 className="p-2 bg-gray-100 align-middle text-md font-semibold ">
            Total
          </h6>
          <aside className="flex items-center justify-between divide-x-1">
            <h6 className="flex-1 p-1 text-sm">Quantity</h6>
            <h6 className="flex-1 p-1 text-sm">{total.no_of_quantity}</h6>
          </aside>
          <aside className="flex items-center justify-between divide-x-1">
            <h6 className="flex-1 p-1 text-sm">Unit Price</h6>
            <h6 className="flex-1 p-1 text-sm">{total.total_without_vat} /=</h6>
          </aside>
          <aside className="flex items-center justify-between divide-x-1">
            <h6 className="flex-1 p-1 text-sm">VAT Amount</h6>
            <h6 className="flex-1 p-1 text-sm">{total.total_vat} /=</h6>
          </aside>
          <aside className="flex items-center justify-between divide-x-1">
            <h6 className="flex-1 p-1 text-sm">Grand Total</h6>
            <h6 className="flex-1 p-1 text-sm">{total.grand_total} /=</h6>
          </aside>
        </article>
      </section>
    </main>
  );
};

export default FormTemplate;
