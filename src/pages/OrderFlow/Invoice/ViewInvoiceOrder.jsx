import React, { useState } from "react";
import { handleFetchAction } from "../../../context/actions";
import FormTemplate from "../../../components/FormTemplate";
import TransitionModal from "../../../components/TransitionModal";

const ViewInvoiceOrder = ({ id }) => {
  const [INV_Collections, setINVCollections] = useState(null); // SO refers to Sales Order

  const fetchInvoiceOrder = async () => {
    try {
      const response = await handleFetchAction(
        `http://localhost:3000/api/get/invoice-by-sale-order-id/?sale_order_id=${id}`
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
        title={"INV"}
        onPress={fetchInvoiceOrder}
        isLoading={isLoading}
      >
        <FormTemplate
          data={INV_Collections}
          orderName={"Invoice Order"}
          collectionOf={"inv"}
          date={"invoice_date"}
          orderFor={"customer"}
        />
      </TransitionModal>
    </div>
  );
};

export default React.memo(ViewInvoiceOrder);
