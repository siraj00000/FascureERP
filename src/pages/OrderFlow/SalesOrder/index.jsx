/**
 * Renders a form template for a single sales order based on the given data.
 *
 * @param {Object} data - The data for the sales order.
 * @param {number} activeIndex - The index of the active tab.
 * @returns {JSX.Element} A React component that displays the form template for the sales order.
 */

import React, { useEffect, useState } from "react";
import FormTemplate from "../../../components/FormTemplate";
import { handleFetchAction } from "../../../context/actions";
import Loader from "../../../components/Loader";

const SalesOrder = ({ data, activeIndex }) => {
  const [SO_Collections, setSOCollections] = useState(null); // SO refers to Sales Order

  useEffect(() => {
    let isMount = true;

    const fetchSalesOrder = async () => {
      try {
        const response = await handleFetchAction(
          `api/get/single-saleorder/${data.id}`
        );
        if (isMount) {
          setSOCollections(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    activeIndex === 0 && fetchSalesOrder();

    return () => {
      isMount = false;
    };
  }, [data, activeIndex]);

  let isLoading = SO_Collections === null;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <FormTemplate
          data={SO_Collections}
          orderName={"Sales Order"}
          collectionOf={"sale_order"}
          date={"date"}
          orderFor={"customer"}
        />
      )}
    </div>
  );
};

export default React.memo(SalesOrder);
