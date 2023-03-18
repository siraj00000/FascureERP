import DeliveryOrder from "../DeliveryNote";
import InvoiceOrder from "../Invoice";
import PurchaseOrder from "../PurchaseOrder";
import CashReceipt from "../Receipt";
import ReceiveOrders from "../ReceiveOrder";
import SalesOrder from "../SalesOrder";

export const COMPONENT_LIST = [
    {
        Component: SalesOrder
    },
    {
        Component: PurchaseOrder
    },
    {
        Component: ReceiveOrders
    },
    {
        Component: DeliveryOrder
    },
    {
        Component: InvoiceOrder
    },
    {
        Component: CashReceipt
    },
]