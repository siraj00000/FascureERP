import React, { useState } from "react";
import swal from "sweetalert";
import {
  handleFetchAction,
  handleInsertAction,
} from "../../../context/actions";
import { VscAdd } from "react-icons/vsc";
import TransitionModal from "../../../components/TransitionModal";
import { ISP_DYNAMIC_DATA } from "../../../utils/ISP.data";
import SearchBarComponent from "../../../components/SearchBarComponent";

const InsertPurchaseOrder = ({ id, onInsertComplete }) => {
  const [values, setValues] = useState({ supplier_id: "" });

  const onSelect = (name, value) => {
    setValues({ [name]: value });
  };

  const setProperties = (data) => {
    let { sale_order, detail } = data;
    const sortProperties = {
      supplier_id: values.supplier_id.id,
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
      status: 'draft',
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
    if (!values.supplier_id)
      return swal("Supplier Not Found", "Please select the supplier", "error");

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

  const dropdownData =
    ISP_DYNAMIC_DATA.purchase_order.dropdowns.timelineFormInput;

  return (
    <TransitionModal
      title={"Purchase Order +"}
      onPress={() => {}}
      isLoading={false}
    >
      <section className="w-[400px] p-5">
        <div className="w-full">
          {dropdownData?.map((dropdown, index) => (
            <SearchBarComponent
              key={index}
              {...dropdown}
              value={values[dropdown.name]}
              onSelect={onSelect}
              size={"w-full"}
            />
          ))}

          <button
            type="button"
            className="w-full h-10 flex items-center justify-center gap-2 px-4 mr-2 my-2 py-1.5 bg-greenfs text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkfs hover:shadow-lg focus:bg-darkfs focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkfs active:shadow-lg transition duration-150 ease-in-out"
            onClick={createPurchaseOrder}
          >
            Add
          </button>
        </div>
      </section>
    </TransitionModal>
  );
};

export default React.memo(InsertPurchaseOrder);
