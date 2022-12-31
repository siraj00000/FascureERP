import React, { useEffect, useState } from "react";
import { handleFetchAction } from "../../context/actions";
import DeliveryNoteTemplate from "./DeliveryOrder/DeliveryNote";
import InvoiceTemplete from "./Invoice/Invoice";
import ReceiptTemplate from "./Receipt/Receipt";
import Skeleton from "./Skeleton";
import SaleOrderTemplate from "./SO";
import TimelineTab from "./TimelineTab";

const SOTimeLine = ({ focusedId }) => {
  let SALE_ORDER_API = `/api/sale_orders/${focusedId}`;
  // let DELIVERY_NOTE_API = `/api/delivery_orders`;
  let DELIVERY_NOTE_API = `/api/sale_orders/${focusedId}`;
  let INVOICE_API = `/api/invoices?search=5`;
  let RECEIPT_API = `/api/cash_recepts`;

  const [isLoading, setLoading] = useState(false);
  const [URL, setURL] = useState(SALE_ORDER_API);
  const [data, setData] = useState({ type: null, collection: null });

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const response = await handleFetchAction(URL);

        // Conditionally data updating
        if (SALE_ORDER_API === URL) {
          setData({ type: 1, collection: response });
        } else if (DELIVERY_NOTE_API === URL) {
          setData({ type: 2, collection: response });
        } else if (INVOICE_API === URL) {
          setData({ type: 3, collection: response });
        } else if (RECEIPT_API === URL) {
          setData({ type: 4, collection: response });
        }
      };

      fetchData();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [URL]);

  return (
    <div className="h-[95vh] p-5">
      <div className="flex items-center justify-center text-center h-14 ">
        <TimelineTab
          event={() => setURL(SALE_ORDER_API)}
          color={data.type === 1 ? "#14a800" : "gray"}
          title={"Sale Order"}
        />
        <Divider />
        <TimelineTab
          event={() => setURL(DELIVERY_NOTE_API)}
          color={data.type === 2 ? "#14a800" : "gray"}
          title={"Delivery Order"}
        />
        <Divider />
        <TimelineTab
          event={() => setURL(INVOICE_API)}
          color={data.type === 3 ? "#14a800" : "gray"}
          title={"Invoice Order"}
        />
        <Divider />
        <TimelineTab
          event={() => setURL(RECEIPT_API)}
          color={data.type === 4 ? "#14a800" : "gray"}
          title={"Receipt"}
        />
      </div>

      {isLoading && <Skeleton />}
      {!isLoading && (
        <div className="m-5">
          {data.type === 1 && <SaleOrderTemplate data={data.collection} />}
          {data.type === 2 && <DeliveryNoteTemplate data={data.collection} />}
          {data.type === 3 && <InvoiceTemplete data={data.collection} />}
          {data.type === 4 && <ReceiptTemplate data={data.collection} />}
        </div>
      )}
    </div>
  );
};

const Divider = () => <div className={`border-t-1 w-[200px]`}></div>;

export default SOTimeLine;
