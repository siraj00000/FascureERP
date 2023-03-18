import React from "react";
import swal from "sweetalert";
import {
  handleFetchAction,
  handleInsertAction,
} from "../../../context/actions";
import { VscAdd } from "react-icons/vsc";

const PurchaseOrderForm = ({ id, onInsertComplete }) => {
  const setProperties = (data) => {
    let { sale_order, detail } = data;
    const sortProperties = {
      supplier_id: sale_order?.customer_id,
      currency_id: sale_order?.currency_id,
      address_id: sale_order?.address_id,
      payment_id: sale_order?.payment_id,
      sale_order_id: sale_order?.id,
      reference_number: sale_order?.reference_number,
      date: sale_order?.date,
      due_date: sale_order?.due_date,
      vat_total: sale_order?.vat_total,
      total_without_vat: sale_order?.total_without_vat,
      grand_total: sale_order?.grand_total,
      address: sale_order?.address,
      po: detail,
    };
    return sortProperties;
  };
  const convertSalesOrderToPurchaseOrder = async () => {
    try {
      const response = await handleFetchAction(
        `api/get/single-saleorder/${id}`
      );
      if (response.data) {
        const data = setProperties(response.data);

        await handleInsertAction(`/api/purchase_orders`, data);
        onInsertComplete();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createPurchaseOrder = () => {
    swal({
      title: "Purchase Order Creation!",
      text: "Do you want to create purchase order of this Sales order?",
      icon: "info",
      buttons: true,
    }).then((willCreate) => {
      if (willCreate) {
        swal("Poof! Purhase Order has been created!", {
          icon: "success",
        });
        convertSalesOrderToPurchaseOrder();
      } else {
        swal("Purhase Order creation failed!");
      }
    });
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-4 mr-2 my-2 py-1.5 bg-greenfs text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkfs hover:shadow-lg focus:bg-darkfs focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkfs active:shadow-lg transition duration-150 ease-in-out"
        onClick={createPurchaseOrder}
      >
        Purchase Order <VscAdd size={15} />
      </button>
    </div>
  );
};

export default React.memo(PurchaseOrderForm);
