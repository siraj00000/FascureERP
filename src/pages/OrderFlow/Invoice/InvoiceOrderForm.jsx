import React from "react";
import swal from "sweetalert";
import {
  handleFetchAction,
  handleInsertAction,
} from "../../../context/actions";
import { generateDate } from "../../../utils/date";
import { VscAdd } from "react-icons/vsc";

const InvoiceOrderForm = ({ id, onInsertComplete }) => {
  let session = sessionStorage.getItem("session");
  let user_id = JSON.parse(session).id;

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
      user_id,
      status: "draft",
      address: sale_order?.address,
      inv: detail,
    };
    return sortProperties;
  };
  const convertSalesOrderToInvoiceOrder = async () => {
    try {
      const response = await handleFetchAction(
        `api/get/single-saleorder/${id}`
      );
      if (response.data) {
        const data = setProperties(response.data);

        await handleInsertAction(`/api/invoices`, data);
        onInsertComplete();
        swal("Good job!", "Invoice order has been converted!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createInvoiceOrder = () => {
    swal({
      title: "Invoice Order Creation!",
      text: "Do you want to create invoice order of this Sales order?",
      icon: "info",
      buttons: true,
    }).then((willCreate) => {
      if (willCreate) {
        swal("Poof! Invoice Order has been created!", {
          icon: "success",
        });
        convertSalesOrderToInvoiceOrder();
      } else {
        swal("Invoice Order creation failed!");
      }
    });
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-4 mr-2 my-2 py-1.5 bg-greenfs text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkfs hover:shadow-lg focus:bg-darkfs focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkfs active:shadow-lg transition duration-150 ease-in-out"
        onClick={createInvoiceOrder}
      >
        Invoice Order <VscAdd size={15} />
      </button>
    </div>
  );
};

export default React.memo(InvoiceOrderForm);
