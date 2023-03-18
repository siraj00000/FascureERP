import React, { useEffect, useMemo, useState } from "react";
import TransitionModal from "../TransitionModal";
import { handleFetchAction, handleUpdateAction } from "../../context/actions";
import SearchBarComponent from "../SearchBarComponent";
import FormInput from "../FormInput";
import { ISP_DYNAMIC_DATA } from "../../utils/ISP.data";
import swal from "sweetalert";
import { BsBox } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import Modal from "../Modal";
import ToggleSwitch from "../ToggleSwitch";

const ChildComponent = ({ close, orderData, onEditComplete }) => {
  const [status, setStatus] = useState(false);
  let ispModal = ISP_DYNAMIC_DATA["purchase_order"];
  const [editMaster, setEditMaster] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [poDetail, setPODetail] = useState(null); // PO refers to Purchase Order
  const [values, setValues] = useState(orderData);
  const [enableInsert, setEnableInsert] = useState(0);
  const [editAttriIndex, setEditAttriIndex] = useState(null);
  const [error, setError] = useState({ type: "", content: "" });
  const [itemAttributes, setItemAttributes] = useState(
    ispModal?.schema?.variables
  );
  const fetchData = async () => {
    setPODetail(null);
    try {
      const response = await handleFetchAction(
        `/api/purchase_orders/${orderData.id}`
      );
      setStatus(response?.data?.purchase_order?.status);
      setPODetail({
        success: true,
        data: response.data.poDetail,
      });
    } catch (error) {
      if (!error.response?.data?.success) {
        setPODetail(error.response?.data);
        return;
      }
      console.log(error);
    }
  };
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      fetchData();
    }
    return () => {
      isMount = false;
    };
  }, []);
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
  const handleFetchAddresses = async (name, id) => {
    try {
      const response = await handleFetchAction(
        `/api/get/all-tables?search=addresses&${name}=${id}`
      );

      let addresses = response.data.data;
      setAddressList(addresses);
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
  const onOptionSelect = (name, value) => {
    if (name === "sale_order_id") {
      setInvoiceAsSaleOrder(value?.id);
    } else if (name === "customer_id") {
      handleFetchAddresses(name, value?.id);
      handleFetchPaymentTermsAndSetDueDates(value?.payment_terms_id, value);
    } else if (name === "supplier_id") {
      handleFetchAddresses(name, value?.id);
      handleFetchPaymentTermsAndSetDueDates(value?.payment_term_id, value);
    } else if (name === "address_id") {
      setValues({
        ...values,
        address_id: value.id,
        address: `${value.name}, ${value.location}, ${value.type} ${value.city}`,
      });
    } else setValues({ ...values, [name]: value?.id });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
    let item;
    if (enableInsert === 1) {
      item = [...poDetail?.data];
      item.push(vals);
      setPODetail({ success: true, data: item });
    } else if (enableInsert === 2) {
      item = poDetail?.data;
      item[editAttriIndex] = vals;
      setPODetail({ success: true, data: item });
    }
    setItemAttributes(ispModal.schema.variables);
    setEnableInsert(0);
  };
  const editRowHandler = (index) => {
    setEditAttriIndex(index);
    setEnableInsert(2);
  };
  const deleteRowHandler = (index) => {
    let list = [...poDetail?.data];
    list.splice(index, 1);

    setPODetail({
      success: true,
      data: list,
    });
  };
  const calcTotalWithoutVat = () => {
    let total_without_vat = 0;
    let total_vat = 0;
    let no_of_quantity = 0;

    poDetail?.data?.forEach((element) => {
      let vatPercentage = element?.vat?.percentage || element?.vat_percentage;
      let percent = (element.unit_price * element.discount) / 100;

      let unitPriceWithDiscount = element.unit_price - percent;

      total_without_vat += unitPriceWithDiscount * Number(element?.quantity);
      // vat amount
      total_vat +=
        unitPriceWithDiscount *
        (vatPercentage / 100) *
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    let products_by = ispModal.products_by;
    let data = { ...values, [products_by]: poDetail?.data };
    try {
      let formData = {
        ...data,
        invoice_date: values?.date,
        total_without_vat: total?.total_without_vat,
        vat_total: Math.ceil(total?.total_vat),
        grand_total: total?.grand_total,
        address: values.address,
        status,
        user_id: JSON.parse(sessionStorage.getItem("session"))?.id,
      };

      await handleUpdateAction(
        formData,
        `/api/purchase_orders/${orderData.id}`
      );

      swal("Updated", "Order Updated", "success");
      setError({ type: "", content: "" });
      onEditComplete();
      setTimeout(() => {
        close();
      }, 2000);

      // return
    } catch (err) {
      console.log(err);
      if (err?.message === "Server Error")
        return handleErrorType("server", err?.message);
      else if (err) return handleErrorType("list", err);
    }
  };
  const handleErrorType = (type, content) => setError({ type, content });
  const total = useMemo(() => calcTotalWithoutVat(), [poDetail?.data]);
  let shouldTextareaVisible = values.address !== "";
  let hasPODetails = poDetail !== null;
  let referenceVal = values["reference_number"] || "";
  return (
    <div className="w-[1200px] bg-white p-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl uppercase text-right mb-5">
          {ispModal.type} Form
        </h1>
        <ToggleSwitch
          enableText={"Post"}
          disabledText={"draft"}
          updateHandler={setStatus}
          updatedVal={status}
        />
      </div>
      <form onSubmit={handleSubmit}>
        {/* 
          Master Info
        */}
        <section className="flex justify-between w-full gap-2">
          <div className="w-70 border-1 rounded-md p-2 relative">
            <h6 className="font-semibold">Bill To:</h6>
            <button
              type="button"
              onClick={() => setEditMaster((prev) => !prev)}
              className="absolute top-2 right-4 bg-greenfs px-5 py-1 rounded-full text-white"
            >
              {editMaster ? "Update" : "Edit"}
            </button>

            {!editMaster ? (
              <div className="flex items-start flex-wrap justify-between gap-2">
                {ispModal.existingMasterData.map((item, index) => (
                  <div className={`${item.style}`} key={index}>
                    <label className="font-thin text-xs text-gray-600">
                      {item.label}
                    </label>
                    <div className="border-1 p-1 text-sm rounded-md">
                      {item.childNode ? (
                        <h5>{values[item.name][item.child]}</h5>
                      ) : (
                        <h5>{values[item?.name] || "--"}</h5>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="flex items-center flex-wrap gap-x-3">
                  {ispModal?.dropdowns?.constants.map((input, index) => (
                    <React.Fragment key={index}>
                      {index !== 1 ? (
                        <SearchBarComponent
                          key={index}
                          {...input}
                          value={values[input.name]}
                          onSelect={onOptionSelect}
                          size={"w-32"}
                          externaldata={addressList}
                        />
                      ) : null}
                    </React.Fragment>
                  ))}

                  {ispModal.reference_number && (
                    <FormInput
                      {...ispModal.reference_number}
                      value={referenceVal}
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
                      className={`w-[99%] h-max p-2 pr-10 my-1 rounded-md border-1 bg-white text-xs 
        font-medium focus:outline-none validitate flex items-center resize-none`}
                      placeholder="Address.."
                      name="address"
                      onChange={onChange}
                    />
                  </div>
                )}
              </>
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
                <h6 className="text-[12px]">{values?.date}</h6>
              </div>
            </div>
            <div className="flex-1 h-[100%] flex flex-col justify-center gap-2">
              <h6 className="font-semibold">Due Dates</h6>
              <div
                className="px-2 h-8 flex items-center my-1 rounded-md border-1 bg-white text-sm text-black 
        font-medium focus:border-2 focus:outline-none"
              >
                <h6 className="text-[12px]">{values?.due_date}</h6>
              </div>
            </div>
          </div>
        </section>

        {/* Item List */}
        <div className="flex flex-col justify-betweem gap-2 w-full border-1 rounded-md p-2 my-2">
          <div className="flex items-center justify-between">
            <h6 className="font-semibold">Items:</h6>
            <button
              onClick={() => setEnableInsert(1)}
              className="border-1 rounded-md bg-darkfs text-gray-100 font-semibold py-1 px-5"
            >
              Insert
            </button>
          </div>
          <div className="max-h-[800px] overflow-auto">
            {/* Table */}
            {!hasPODetails ? (
              <h6 className="flex items-center justify-center gap-2 text-center font-thin ">
                <BsBox /> No Item
              </h6>
            ) : (
              <table className="w-full">
                <thead className="border-1 rounded-md p-2 h-8 bg-darkfs text-gray-100">
                  <tr className="text-xs px-2 text-center">
                    <th className="text-left pl-2">Product</th>
                    <th colSpan={3}>Description</th>
                    <th>VAT%</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>VAT Amt</th>
                    <th>Line Total</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {poDetail?.data?.map((item, index) => (
                    <tr
                      key={index}
                      className="w-full text-xs text-center h-5 border-1"
                    >
                      <td className="text-left pl-2">
                        {item?.product?.name || item?.product_name}
                      </td>
                      <td className="max-w-[50px] text-center" colSpan={3}>
                        {item?.description}
                      </td>
                      <td>{item?.vat?.percentage || item.vat_percentage}</td>
                      <td>{item?.quantity}</td>
                      <td>{item?.unit_price}</td>
                      <td>{item?.vat_amount}</td>
                      <td>{item?.line_total}</td>
                      <td
                        onClick={() => editRowHandler(index)}
                        className="text-center border-1 cursor-pointer"
                      >
                        <button
                          type="button"
                          className="text-green-500 p-2 text-center flex items-center justify-center mx-auto"
                        >
                          <AiFillEdit size={20} />
                        </button>
                      </td>
                      <td
                        onClick={() => deleteRowHandler(index)}
                        className="text-center border-1 cursor-pointer"
                      >
                        <button
                          type="button"
                          className="text-red-500 p-2 text-center flex items-center justify-center mx-auto"
                        >
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
        {enableInsert !== 0 && (
          <Modal mxw={false}>
            <div className="w-full rounded-md p-5 my-2">
              <div className="flex justify-between p-x-5">
                <h6 className="font-semibold">Add Items:</h6>
                <AiOutlineClose
                  onClick={() => setEnableInsert(0)}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex items-center flex-wrap gap-x-3 my-2">
                {ispModal?.dropdowns.variables.map((input, index) => (
                  <SearchBarComponent
                    key={index}
                    {...input}
                    value={itemAttributes[input.name]}
                    onSelect={onChangeItemDropdown}
                    size={"w-32"}
                  />
                ))}
                {ispModal?.inputs.variables.map((input, index) => (
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
                type="button"
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
            <h6 className="text-xs font-semibold">{error?.content}</h6>
          </div>
        )}
        {error.type === "list" && error?.content !== null && (
          <div
            className={` ${
              error ? "bg-red-200" : "bg-green-200"
            } rounded-md p-5 gap-5 flex items-center  flex-wrap w-max max-w-full mt-5 border-1`}
          >
            {typeof error === "string" ? (
              <h6 className="text-xs font-semibold">{error?.content[0]}</h6>
            ) : (
              Object.entries(error?.content[1])?.map(([key, value]) => (
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
            Update {ispModal.type}
          </button>
        </div>
      </form>
    </div>
  );
};

const OrderEditForm = (props) => (
  <TransitionModal title={"Edit"} onPress={() => {}} isLoading={false}>
    <ChildComponent {...props} />
  </TransitionModal>
);

export default React.memo(OrderEditForm);
