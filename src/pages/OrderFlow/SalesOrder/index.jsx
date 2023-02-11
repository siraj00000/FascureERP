import React, { useState } from "react";
import TransitionModal from "../../../components/TransitionModal";
import { handleFetchAction } from "../../../context/actions";
import FormTemplate from "../../../components/FormTemplate";

const SalesOrder = ({ id }) => {
  const [SO_Collections, setSOCollections] = useState(null); // SO refers to Sales Order

  const fetchSalesOrder = async () => {
    try {
      const response = await handleFetchAction(`api/get/single-saleorder/${id}`);
      setSOCollections(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let isLoading = SO_Collections === null;
  return (
    <div>
      <TransitionModal
        title={"Sales Order"}
        onPress={fetchSalesOrder}
        isLoading={isLoading}
      >
        <FormTemplate
          data={SO_Collections}
          orderName={"Sales Order"}
          collectionOf={"sale_order"}
          date={'date'}
          orderFor={"customer"}
        />
      </TransitionModal>
    </div>
  );
};

export default SalesOrder;
