
export const PERMISSION_LIST = [
  {
    name: "Country",
    view: "countries-list",
    create: "countries-create",
    edit: "countries-edit",
    delete: "countries-delete",
  },
  {
    name: "Address",
    view: "addresses-list",
    create: "addresses-create",
    edit: "addresses-edit",
    delete: "addresses-delete",
  },
  {
    name: "Currency",
    view: "currencies-list",
    create: "currencies-create",
    edit: "currencies-edit",
    delete: "currencies-delete",
  },
  {
    name: "Payment Terms",
    view: "payment_terms-list",
    create: "payment_terms-create",
    edit: "payment_terms-edit",
    delete: "payment_terms-delete",
  },
  {
    name: "Bank Accounts",
    view: "bank_accounts-list",
    create: "bank_accounts-create",
    edit: "bank_accounts-edit",
    delete: "bank_accounts-delete",
  },
  {
    name: "Languages",
    view: "languages-list",
    create: "languages-create",
    edit: "languages-edit",
    delete: "languages-delete",
  },
  {
    name: "VAT",
    view: "vats-list",
    create: "vats-create",
    edit: "vats-edit",
    delete: "vats-delete",
  },
  {
    name: "Sequence Numbers",
    view: "sequencenumbers-list",
    create: "sequencenumbers-create",
    edit: "sequencenumbers-edit",
    delete: "sequencenumbers-delete",
  },
  {
    name: "Customers",
    view: "customers-list",
    create: "customers-create",
    edit: "customers-edit",
    delete: "customers-delete",
  },
  {
    name: "Products",
    view: "products-list",
    create: "products-create",
    edit: "products-edit",
    delete: "products-delete",
  },
  {
    name: "Purchase Orders",
    view: "purchase_orders-list",
    create: "purchase_orders-create",
    edit: "purchase_orders-edit",
    delete: "purchase_orders-delete",
  },
  {
    name: "Sales Orders",
    view: "sale_orders-list",
    create: "sale_orders-create",
    edit: "sale_orders-edit",
    delete: "sale_orders-delete",
  },
  {
    name: "Invoices",
    view: "invoices-list",
    create: "invoices-create",
    edit: "invoices-edit",
    delete: "invoices-delete",
  },
  {
    name: "Payment Methods",
    view: "paymentmethods-list",
    create: "paymentmethods-create",
    edit: "paymentmethods-edit",
    delete: "paymentmethods-delete",
  },
  {
    name: "Warehouses",
    view: "ware_houses-list",
    create: "ware_houses-create",
    edit: "ware_houses-edit",
    delete: "ware_houses-delete",
  },
  {
    name: "Contacts",
    view: "contacts-list",
    create: "contacts-create",
    edit: "contacts-edit",
    delete: "contacts-delete",
  },
  {
    name: "Cash Receipts",
    view: "cash_recepts-list",
    create: "cash_recepts-create",
    edit: "cash_recepts-edit",
    delete: "cash_recepts-delete",
  },
  {
    name: "Delivery Orders",
    view: "delivery_orders-list",
    create: "delivery_orders-create",
    edit: "delivery_orders-edit",
    delete: "delivery_orders-delete",
  },
  {
    name: "Receive Orders",
    view: "receive_orders-list",
    create: "receive_orders-create",
    edit: "receive_orders-edit",
    delete: "receive_orders-delete",
  },
  {
    name: "Unit Types",
    view: "unit_types-list",
    create: "unit_types-create",
    edit: "unit_types-edit",
    delete: "unit_types-delete",
  },
  {
    name: "Attachments",
    view: "attchments-list",
    create: "attchments-create",
    edit: "attchments-edit",
    delete: "attchments-delete",
  },
].map(item => ({
  name: item.name,
  view: {
    checked: false,
    attribute: item.view
  },
  create: {
    checked: false,
    attribute: item.create
  },
  edit: {
    checked: false,
    attribute: item.edit
  },
  delete: {
    checked: false,
    attribute: item.delete
  },
}));
