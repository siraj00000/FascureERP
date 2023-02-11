import React, { useState } from "react";
import TransitionModal from "../../../components/TransitionModal";
import { handleFetchAction } from "../../../context/actions";
import FormTemplate from "../../../components/FormTemplate";

const InvoiceOrder = ({ id }) => {
  const [INV_Collections, setINVCollections] = useState(null); // SO refers to Sales Order

  const fetchInvoiceOrder = async () => {
    try {
      const response = await handleFetchAction(
        `api/get/invoice-by-sale-order-id/?sale_order_id=${id}`
      );
      setINVCollections(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let isLoading = INV_Collections === null;
  return (
    <div>
      <TransitionModal
        title={"Invoice Order"}
        onPress={fetchInvoiceOrder}
        isLoading={isLoading}
      >
        <FormTemplate
          data={INV_Collections}
          orderName={"Invoice Order"}
          collectionOf={"po"}
          date={"date"}
          orderFor={"supplier"}
        />
      </TransitionModal>
    </div>
  );
};

export default InvoiceOrder;
