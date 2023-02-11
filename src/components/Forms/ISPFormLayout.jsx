import React, { useMemo, useState } from "react";
import FormInput from "../FormInput";
import { AiOutlineClose } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Modal from "../Modal";
import { handleFetchAction } from "../../context/actions";
import { generateDate } from "../../utils/date";
import swal from "sweetalert";
import SearchBarComponent from "../SearchBarComponent";

const ISPFormLayout = (props) => {
  const [values, setValues] = useState(props?.schema?.constants);
  const [itemAttributes, setItemAttributes] = useState(
    props?.schema?.variables
  );
  const [enableInsert, setEnableInsert] = useState(false);
  const [customerAddressList, setCustomerAddressList] = useState([]);
  const [error, setError] = useState({ type: "", content: "" });
  let products_by = props.products_by;

  const setInvoiceAsSaleOrder = async (id) => {
    try {
      const response = await handleFetchAction(`/api/sale_orders/${id}`);
      let saleOrderInfo = response?.data?.sale_order;
      let productDetail = response?.data?.soDetail;

      setValues({
        ...values,
        customer_id: saleOrderInfo?.currency_id,
        currency_id: saleOrderInfo?.currency_id,
        sale_order_id: id,
        address_id: saleOrderInfo?.address_id,
        address: saleOrderInfo?.address,
        reference_number: saleOrderInfo?.reference_number,
        payment_id: saleOrderInfo?.payment_id,
        days: "",
        inv: productDetail,
        po: productDetail,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFetchCustomerAddresses = async (name, id) => {
    try {
      const response = await handleFetchAction(
        `/api/get/all-tables?search=addresses&${name}=${id}`
      );

      let addresses = response.data.data;
      setCustomerAddressList(addresses);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFetchPaymentTermsAndSetDueDates = async (id, value) => {
    try {
      const response = await handleFetchAction(
        `/api/get/all-tables?search=payment_terms&id=${id}`
      );
      let data = response.data.data;

      if (data === undefined) {
        return swal("Error", "No payment term found", "error");
      }

      let days = Number(data[0]?.days);
      setValues({
        ...values,
        customer_id: value?.id,
        supplier_id: value?.id,
        currency_id: value["currency_id"],
        payment_id: id,
        days,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onOptionSelect = (name, value) => {
    if (name === "sale_order_id") {
      setInvoiceAsSaleOrder(value?.id);
    } else if (name === "customer_id") {
      handleFetchCustomerAddresses(name, value?.id);
      handleFetchPaymentTermsAndSetDueDates(value?.payment_terms_id, value);
    } else if (name === "supplier_id") {
      handleFetchCustomerAddresses(name, value?.id);
      handleFetchPaymentTermsAndSetDueDates(value?.payment_term_id, value);
    } else if (name === "address_id") {
      setValues({
        ...values,
        address_id: value.id,
        address: `${value.name}, ${value.location}, ${value.type} ${value.city}`,
      });
    } else setValues({ ...values, [name]: value?.id });
  };
  const onChangeItemDropdown = (name, value) => {
    if (name === "prod_id") {
      setItemAttributes({
        ...itemAttributes,
        [name]: value?.id,
        product_name: value.name,
        description: value.description,
        part_number: value.part_number,
      });
    } else if (name === "vat_id") {
      setItemAttributes({
        ...itemAttributes,
        [name]: value?.id,
        vat_percentage: value.percentage,
      });
    }
  };
  const handleItemValues = (e) => {
    setItemAttributes({ ...itemAttributes, [e.target.name]: e.target.value });
  };
  const calcLineTotal = () => {
    // ** Discount on every line product's unit price
    let discount = Number(
      (itemAttributes.unit_price * itemAttributes.discount) / 100
    );

    // ** Substract discount from line product's unit price
    let unitPriceWithDiscount = itemAttributes.unit_price - discount;

    // ** No VAT included
    let withoutVat = Number(unitPriceWithDiscount * itemAttributes.quantity);

    // ** Including VAT
    let vatUnitPrice = Number(
      (unitPriceWithDiscount * itemAttributes.vat_percentage) / 100
    );

    // ** VAT amount appling on all quantity
    let lineVatAmount = Number(vatUnitPrice * itemAttributes.quantity);

    // ** VAT amount
    itemAttributes["vat_amount"] = Number(lineVatAmount.toFixed(2));

    //? val = withoutVat + withoutVat*vat%
    let line_total = Number(
      withoutVat + withoutVat * (itemAttributes.vat_percentage / 100)
    );

    itemAttributes["line_total"] = line_total;
    return itemAttributes;
  };
  const handleInsertValues = () => {
    let vals = calcLineTotal();
    let item = [...values[products_by]];
    item.push(vals);

    setValues({ ...values, [products_by]: item });
    setItemAttributes(props.schema.variables);
    setEnableInsert(false);
  };
  const deleteRowHandler = (index) => {
    let list = [...values[products_by]];
    list.splice(index, 1);
    values[products_by] = list;
    setValues({ ...values });
  };
  const calcTotalWithoutVat = () => {
    let total_without_vat = 0;
    let total_vat = 0;
    let no_of_quantity = 0;

    values[products_by]?.forEach((element) => {
      let percent = (element.unit_price * element.discount) / 100;

      let unitPriceWithDiscount = element.unit_price - percent;

      total_without_vat += unitPriceWithDiscount * Number(element?.quantity);
      // vat amount
      total_vat +=
        unitPriceWithDiscount *
        (element?.vat_percentage / 100) *
        Number(element?.quantity);

      no_of_quantity += Number(element?.quantity);
    });

    let grand_total = total_without_vat + total_vat;

    return {
      total_without_vat: Number(total_without_vat.toFixed(2)),
      total_vat: Number(total_vat.toFixed(2)),
      grand_total: Number(grand_total.toFixed(2)),
      no_of_quantity,
    };
  };
  const onChangeTextarea = (e) => {
    setValues({ ...values, address: e.target.value });
  };
  const total = useMemo(() => calcTotalWithoutVat(), [values[products_by]]);

  let dates = useMemo(() => generateDate(values?.days), [values?.days]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.refresh(true);
    try {
      let formData = {
        ...values,
        date: dates.dateNow,
        invoice_date: dates.dateNow,
        due_date: dates.dueDate,
        total_without_vat: total?.total_without_vat,
        vat_total: Math.ceil(total?.total_vat),
        grand_total: total?.grand_total,
        address: values.address,
        user_id: JSON.parse(sessionStorage.getItem("session"))?.id,
      };

      props
        .handleAction(formData)
        .then((res) => {
          swal("Good job!", res.data.Success?.message, "success");
          setError({ type: "", content: "" });
          setTimeout(() => {
            props.close();
          }, 2000);
        })
        .catch((e) => {
          let err = e?.response?.data;

          if (err?.message === "Server Error")
            return handleErrorType("server", err?.message);
          else if (err) return handleErrorType("list", err);

          alert("error");
          console.log("this error occur after submit", e);
        })
        .finally(() => props.refresh(false));

      // return
    } catch (error) {
      console.log(error);
    }
  };

  const handleErrorType = (type, content) => setError({ type, content });

  const closeModal = () => props.close();

  let shouldTextareaVisible = values.address !== "";

  return (
    <div className="p-5 min-h-[590] w-full overflow-hidden">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl uppercase text-right mb-5">
          {props.type} Form100
        </h1>
        <AiOutlineClose
          size={30}
          className="cursor-pointer"
          onClick={closeModal}
        />
      </div>

      <form onSubmit={handleSubmit}>
        {/* Constant Attributes */}
        <div className="flex justify-between w-full gap-2">
          <div className="w-70 border-1 rounded-md p-2">
            <h6 className="font-semibold">Bill To:</h6>
            <div className="flex items-center flex-wrap gap-x-3">
              {props?.dropdowns?.constants.map((input, index) => (
                <SearchBarComponent
                  key={index}
                  {...input}
                  value={values[input.name]}
                  onSelect={onOptionSelect}
                  size={"w-32"}
                  externaldata={customerAddressList}
                />
              ))}
              {props.reference_number && (
                <FormInput
                  {...props.reference_number}
                  value={values["reference_number"]}
                  onChange={onChange}
                  size={"w-32"}
                />
              )}
              {props?.description && (
                <FormInput
                  {...props.description}
                  value={values["description"]}
                  onChange={onChange}
                  size={"w-32"}
                />
              )}
            </div>
            {shouldTextareaVisible && (
              <div className="w-full">
                <label className="font-thin text-xs text-gray-600">
                  Your Address
                </label>
                <textarea
                  value={values.address}
                  maxLength={100}
                  className="w-[99%] h-max p-2 pr-10 my-1 rounded-md border-1 bg-white text-xs  
        font-medium focus:outline-none validitate flex items-center resize-none"
                  placeholder="Address.."
                  onChange={onChangeTextarea}
                />
              </div>
            )}
          </div>

          {/* Dates */}
          <div
            className={`w-30 border-1 flex justify-between gap-3 rounded-md p-2 ${
              shouldTextareaVisible && "flex-col"
            }`}
          >
            <div className="flex-1 h-[100%] flex flex-col justify-center gap-2">
              <h6 className="font-semibold">Dates</h6>
              <div
                className="px-2 h-8 flex items-center my-1 rounded-md border-1 bg-white text-sm text-black 
        font-medium focus:border-2 focus:outline-none"
              >
                <h6 className="text-[12px]">{dates.dateNow}</h6>
              </div>
            </div>
            <div className="flex-1 h-[100%] flex flex-col justify-center gap-2">
              <h6 className="font-semibold">Due Dates</h6>
              <div
                className="px-2 h-8 flex items-center my-1 rounded-md border-1 bg-white text-sm text-black 
        font-medium focus:border-2 focus:outline-none"
              >
                <h6 className="text-[12px]">{dates.dueDate}</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Item List */}
        <div className="flex flex-col justify-betweem gap-2 w-full border-1 rounded-md p-2 my-2">
          <div className="flex items-center justify-between">
            <h6 className="font-semibold">Items:</h6>
            <button
              onClick={() => setEnableInsert(true)}
              className="border-1 rounded-md bg-darkfs text-gray-100 font-semibold py-1 px-5"
            >
              Insert
            </button>
          </div>
          <div className="max-h-[800px] overflow-auto">
            {/* Table */}
            {values[products_by]?.length === 0 ? (
              <h6 className="flex items-center justify-center gap-2 text-center font-thin ">
                <BsBox /> No Item
              </h6>
            ) : (
              <table className="w-full">
                <thead className="border-1 rounded-md p-2 h-8 bg-darkfs text-gray-100">
                  <tr className="text-xs px-2">
                    <th className="text-left pl-2">Product</th>
                    <th colSpan={3}>Description</th>
                    <th>VAT%</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>VAT Amt</th>
                    <th>Line Total</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {values[products_by].map((item, index) => (
                    <tr
                      key={index}
                      className="w-full text-xs text-center h-5 border-1"
                    >
                      <td className="text-left pl-2">{item?.product_name}</td>
                      <td className="max-w-[50px] text-center" colSpan={3}>
                        {item?.description}
                      </td>
                      <td>{item?.vat_percentage}</td>
                      <td>{item?.quantity}</td>
                      <td>{item?.unit_price}</td>
                      <td>{item?.vat_amount}</td>
                      <td>{item?.line_total}</td>
                      <td
                        onClick={() => deleteRowHandler(index)}
                        className="text-center border-1 cursor-pointer"
                      >
                        <button className="text-red-500 p-2 text-center flex items-center justify-center mx-auto">
                          <MdDelete size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="w-full text-xs text-center font-bold h-10 border-1">
                    <td colSpan={4} className="bg-darkfs text-gray-100">
                      TOTAL
                    </td>
                    <td></td>
                    <td>{total?.no_of_quantity}</td>
                    <td>{total?.total_without_vat}</td>
                    <td>{total?.total_vat}</td>
                    <td>{total?.grand_total}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Variable Attributes */}
        {enableInsert && (
          <Modal mxw={false}>
            <div className="w-full rounded-md p-5 my-2">
              <div className="flex justify-between p-x-5">
                <h6 className="font-semibold">Add Items:</h6>
                <AiOutlineClose
                  onClick={() => setEnableInsert(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex items-center flex-wrap gap-x-3 my-2">
                {props.dropdowns.variables.map((input, index) => (
                  <SearchBarComponent
                    key={index}
                    {...input}
                    value={itemAttributes[input.name]}
                    onSelect={onChangeItemDropdown}
                    size={"w-32"}
                  />
                ))}
                {props.inputs.variables.map((input, index) => (
                  <FormInput
                    key={index}
                    {...input}
                    value={itemAttributes[input.name]}
                    onChange={handleItemValues}
                    size={"w-32"}
                  />
                ))}
              </div>

              <button
                onClick={handleInsertValues}
                className="w-full border-1 rounded-md bg-darkfs text-gray-100 font-semibold p-2"
              >
                Add Item
              </button>
            </div>
          </Modal>
        )}

        {error.type === "server" && (
          <div
            className={` ${
              error ? "bg-red-200" : "bg-green-200"
            } rounded-md p-5 gap-5 flex items-center  flex-wrap w-max max-w-full mt-5 border-1`}
          >
            <h6 className="text-xs font-semibold">{error.content}</h6>
          </div>
        )}
        {error.type === "list" && error.content !== null && (
          <div
            className={` ${
              error ? "bg-red-200" : "bg-green-200"
            } rounded-md p-5 gap-5 flex items-center  flex-wrap w-max max-w-full mt-5 border-1`}
          >
            {typeof error === "string" ? (
              <h6 className="text-xs font-semibold">{error.content[0]}</h6>
            ) : (
              Object.entries(error.content[1])?.map(([key, value]) => (
                <div
                  key={key + value}
                  className="flex items-center gap-2 w-max"
                >
                  <h6 className="text-xs font-semibold">*</h6>
                  <h6 className="text-xs font-semibold ">{key}</h6>
                  <h6 className="text-xs">{value[0]}</h6>
                </div>
              ))
            )}
          </div>
        )}

        {/* Submit */}
        <div className="w-full mt-10">
          <button className="w-full border-1 rounded-md bg-darkfs text-gray-100 font-semibold p-2">
            Submit {props.type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ISPFormLayout;
