import React, { useMemo, useState } from "react";
import TransitionModal from "../../../components/TransitionModal";
import {
  handleFetchAction,
  handleInsertAction,
} from "../../../context/actions";
import { ISP_DYNAMIC_DATA } from "../../../utils/ISP.data";
import FormInput from "../../../components/FormInput";
import SearchBarComponent from "../../../components/SearchBarComponent";
import swal from "sweetalert";
import { AiOutlineFileDone } from "react-icons/ai";

const Receipt = (props) => {
  const [cashReceiptRawData, setCashReceiptRawData] = useState(null);

  const getAndSetCashReceiptData = async () => {
    try {
      const response = await handleFetchAction(
        `api/get/recepts-by-invoice-id?invoice_id=${props.id}`
      );
      setCashReceiptRawData(response.data.Data);
    } catch (error) {
      console.log(error);
    }
  };

  let isLoading = cashReceiptRawData === null;
  return (
    <TransitionModal
      title={"Receipt"}
      onPress={getAndSetCashReceiptData}
      isLoading={isLoading}
    >
      <ChildElement {...props} data={cashReceiptRawData} />
    </TransitionModal>
  );
};

const ChildElement = ({ id, onClose, data }) => {
  let collection = ISP_DYNAMIC_DATA.cash_receipt;
  const [values, setValues] = useState(collection.schema);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSelect = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const calculateRemainingAmount = (rawData) => {
    let { getRecepts, invoice } = rawData;
    let invoiceGrandTotal = invoice.grand_total;

    let receiptAmount = 0;
    for (let index = 0; index < getRecepts.length; index++) {
      const element = getRecepts[index];
      receiptAmount += Number(element.amount);
    }

    let remainingAmount = invoiceGrandTotal - receiptAmount;
    return remainingAmount;
  };

  const remainingAmount = useMemo(() => calculateRemainingAmount(data), [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let cashReceiptData = {
        customer_id: data.invoice.customer_id,
        invoice_id: id,
        language_id: values.language_id,
        vat_id: values.vat_id.id,
        payment_term_id: values.payment_term_id.id,
        amount: values.amount,
        note: values.note,
      };

      await handleInsertAction("/api/cash_recepts", cashReceiptData);
      swal("Successful", "Cash Receipt created!", "success");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  let isValidAmountEntered = values["amount"] > remainingAmount;

  if (remainingAmount === 0) {
    return (
      <div className="p-5 flex items-center justify-center gap-2">
        <AiOutlineFileDone size={50} color="#14a800" />
        <p>No remaining amount found, all paid!</p>
      </div>
    );
  }
  return (
    <div className="w-[900px] p-5">
      <h1 className="font-bold text-3xl">{collection.type}</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between flex-wrap">
          {collection?.dropdowns.map((input, index) => (
            <SearchBarComponent
              key={index}
              {...input}
              value={values[input.name]}
              onSelect={onSelect}
              size={"w-[48%]"}
            />
          ))}
          {collection?.inputs.map((input, index) => (
            <React.Fragment key={index}>
              <FormInput
                {...input}
                value={values[input.name]}
                onChange={onChange}
                size={"w-full border-red-500"}
                note={["description"].includes(input.name) ? "h-20" : ""}
              />
              {input.name === "amount" &&
                (isValidAmountEntered ? (
                  <p className="text-sm font-bold text-red-500">
                    Exceeding form the limit {remainingAmount}
                  </p>
                ) : (
                  <p className="text-[12px] font-semibold italic text-gray-400">
                    limit {remainingAmount}
                  </p>
                ))}
            </React.Fragment>
          ))}
        </div>
        <div className="w-full mt-10">
          <button
            disabled={isValidAmountEntered}
            className={`${
              isValidAmountEntered ? "cursor-not-allowed" : "cursor-pointer"
            } w-full flex items-center justify-center gap-2 border-1 rounded-md bg-greenfs text-gray-100 font-semibold p-2`}
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default Receipt;
