import React, { useState } from "react";
import swal from "sweetalert";
import FormInput from "../../../components/FormInput";
import TransitionModal from "../../../components/TransitionModal";
import {
  handleFetchAction,
  handleInsertAction,
} from "../../../context/actions";
import { generateDate } from "../../../utils/date";

const Invoice = ({ id }) => {
  let session = sessionStorage.getItem("session");
  let user_id = JSON.parse(session).id;

  const [description, setDescription] = useState("");

  const setProperties = (data) => {
    let { sale_order, detail } = data;

    // Due date depends on the payment terms days
    let dates = generateDate(Number(sale_order.payment_term.days));

    const sortProperties = {
      customer_id: sale_order?.customer_id,
      currency_id: sale_order?.currency_id,
      address_id: sale_order?.address_id,
      payment_id: sale_order?.payment_id,
      sale_order_id: sale_order?.id,
      reference_number: sale_order?.reference_number,
      invoice_date: dates.dateNow,
      due_date: dates.dueDate,
      vat_total: sale_order?.vat_total,
      total_without_vat: sale_order?.total_without_vat,
      grand_total: sale_order?.grand_total,
      description,
      user_id,
      status: "draft",
      address: sale_order?.address,
      inv: detail,
    };
    return sortProperties;
  };
  const convertSOToPO = async (e, onClose) => {
    e.preventDefault();
    try {
      const response = await handleFetchAction(
        `api/get/single-saleorder/${id}`
      );
      if (response.data) {
        const data = setProperties(response.data);

        await handleInsertAction(`/api/invoices`, data);

        swal("Good job!", "Invoice order has been converted!", "success");
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  let input = {
    name: "description",
    placeholder: "add description for purchase order..",
    label: "Description*",
    required: true,
    w_size: "w-full",
  };

  return (
    <div>
      <TransitionModal title={"Invoice"}>
        <ChildElement handleSubmit={convertSOToPO}>
          <FormInput
            {...input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            size={input.w_size}
            note={["note", "description"].includes(input.name) ? "h-20" : ""}
          />
          <button
            className={` bg-greenfs w-full flex items-center justify-center gap-2 border-1 rounded-md text-gray-100 font-semibold p-2`}
          >
            Convert
          </button>
        </ChildElement>
      </TransitionModal>
    </div>
  );
};

const ChildElement = ({ children, onClose, handleSubmit }) => {
  return (
    <div className="w-[400px] p-5">
      <form onSubmit={(e) => handleSubmit(e, onClose)} className={"p-5 w-full"}>
        {children}
      </form>
    </div>
  );
};

export default Invoice;
