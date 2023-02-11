import React, { useState } from "react";
import TransitionModal from "../../../components/TransitionModal";
import { handleFetchAction } from "../../../context/actions";
import FormTemplate from "../../../components/FormTemplate";

const PurchaseOrder = ({ id }) => {
  const [PO_Collections, setPOCollections] = useState(null); // SO refers to Sales Order

  const fetchPurchaseOrder = async () => {
    try {
      const response = await handleFetchAction(
        `api/get/po-by-sale-order-id/?sale_order_id=${id}`
      );
      setPOCollections(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let isLoading = PO_Collections === null;
  return (
    <div>
      <TransitionModal
        title={"Purchase Order"}
        onPress={fetchPurchaseOrder}
        isLoading={isLoading}
      >
        <FormTemplate
          data={PO_Collections}
          orderName={"Purchase Order"}
          collectionOf={"po"}
          date={"date"}
          orderFor={"supplier"}
        />
      </TransitionModal>
    </div>
  );
};

export default PurchaseOrder;
