import React, { useState } from "react";
import TransitionModal from "../../../components/TransitionModal";
import { handleFetchAction } from "../../../context/actions";
import FormTemplate from "../../../components/FormTemplate";

const ViewPurchaseOrder = ({ id }) => {
  const [PO_Collections, setPOCollections] = useState(null); // PO refers to Purchase Order

  const fetchPurchaseOrder = async () => {
    try {
      const response = await handleFetchAction(
        `http://localhost:3000/api/get/po-by-sale-order-id/?sale_order_id=${id}`
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
        title={"PO"}
        onPress={fetchPurchaseOrder}
        isLoading={isLoading}
      >
        <FormTemplate
          data={PO_Collections}
          orderName={"Purchase Order"}
          collectionOf={"po"}
          date={"date"}
          orderFor={"supplier"}
          formWidth="w-[1200px]"
        />
      </TransitionModal>
    </div>
  );
};

export default React.memo(ViewPurchaseOrder);
