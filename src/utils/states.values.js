export const CURRENCY_SCHEMA = {
    name: "",
    symbol: "",
    code: "",
    value: 1,
    status: 1,
};

export const VAT_SCHEMA = {
    name: "",
    percentage: ""
};

export const ADDRESS_SCHEMA = {
    name: "",
    type: "",
    description: "",
    location: "",
    city: "",
    phone_number: ""
};

export const PAYMENT_TERM_SCHEMA = {
    type: "",
    data: ""
};

export const BANK_ACCOUNT_SCHEMA = {
    name: "",
    ac: "",
    iban: "",
    swift_bic: "",
    note: "",
    address: ""
};

export const NUMBER_SEQUENCE_SCHEMA = {
    seq_name: "",
    seq_prx: "",
    seq_number: "",
    comment: "",
    type: ""
};

export const LANGUAGE_SCHEMA = {
    name: ""
};

export const SLAVE_SCHEMA = {
    part_number: "",
    quantity: "",
    discount: "",
    unit_price: "",
    vat: "",
    grand_total: "",
    description: ""
};

export const CUSTOMER_SCHEMA = {
    name: "",
    email: "",
    phone_number: "",
    web: "",
    cr_number: "",
    vat_number: "",
    type: "",
    payment_terms: "",
    note: "",
    address: ""
};

export const SUPPLIER_SCHEMA = {
    name: "",
    email: "",
    phone_number: "",
    web: "",
    cr_number: "",
    vat_number: "",
    type: "",
    payment_terms: "",
    note: "",
    address: ""
};

export const PRODUCT_SCHEMA = {
    name: "",
    part_number: "",
    serialized_item: "",
    category: "",
    note: "",
    description: ""
};

export const COUNTRY_SCHEMA = {
    name: "",
    iso_code: "",
    phone_code: ""
};

export const COMPANY_SETTINGS_SCHEMA = {
    currency_id: 0,
    language_id: 0,
    name: "",
    email: "",
    phone_number: "",
    cr_number: "",
    vat_number: "",
    address: "",
    logo: ""
};

export const SALES_ORDER_SCHEMA = {
    customer_id: 0,
    currency_id: 0,
    address_id: 0,
    payment_id: 0,
    slave_id: 0,
    date: '',
    due_date: '',
    total_without_vat: 0,
    vat_total: 0,
    grand_total: 0,
    prod_id: 0,
    vat_id: 0,
    quantity: 0,
    unit_price: 0,
    discount: 0,
    vat_amount: 0,
    line_total: 0,
    description: ''
};

export const INVOICE_SCHEMA = {
    customer_id: 0,
    currency_id: 0,
    sale_order_id: 0,
    prod_id: 0,
    invoice_date: '',
    due_date: '',
    total_without_vat: 0,
    vat_total: 0,
    part_number: 0,
    item_number: 0,
    grand_total: 0,
    vat_id: 0,
    quantity: 0,
    unit_price: 0,
    discount: 0,
    vat_amount: 0,
    line_total: 0,
    description: '',
    product_description: ''
};

export const PURCHASE_ORDER_SCHEMA = {
    supplier_id: 0,
    customer_id: 0,
    currency_id: 0,
    address_id: 0,
    payment_id: 0,
    slave_id: 0,
    date: '',
    due_date: '',
    total_without_vat: 0,
    vat_total: 0,
    grand_total: 0,
    prod_id: 0,
    vat_id: 0,
    quantity: 0,
    unit_price: 0,
    discount: 0,
    vat_amount: 0,
    line_total: 0,
    description: ''
};

export const CASH_RECEIPT_SCHEMA = {
    customer_id: 0,
    invoice_id: 0,
    language_id: 0,
    vat_id: 0,
    payment_mode: "",
    amount: 0,
    note: ""
};

export const PAYMENT_METHOD_SCHEMA = {
    name: "",
    description: "",
    note: ""
};

export const CONTACT_SCHEMA = {
    user_id: 0,
    name: "",
    phone_number: 0
};

export const WARE_HOUSE_SCHEMA = {
    name: "",
    part_number: 0,
    serial: 0,
    quantity: 0,
    location: "",
    description: "",
    address: ""
};

export const DELIVERY_ORDER_SCHEMA = {
    sale_order_id: 0,
    address_id: 0,
    part_number: 0,
    grand_total: 0,
    note: "",
    signature: "",
    serial_number: 0,
    quantity: 0
};

export const RECEIVE_ORDER_SCHEMA = {
    ware_house_id: 0,
    part_number: 0,
    grand_total: 0,
    note: "",
    signature: "",
    serial_number: 0,
    quantity: 0
};

// AUTH SCHEMA
export const LOGIN_SCHEMA = {
    email: "",
    password: ""
};

export const REGISTRATION_SCHEMA = {
    name: "",
    email: "",
    phone_number: "",
    invoice_sync: "",
    password: "",
    password_confirmation: ""
};


// Others
export const CATEGORY_SCHEMA = {
    name: "",
    description: "",
    note: ""
};

export const UNIT_SCHEMA = {
    name: "",
    description: ""
};

export const REQUEST_SCHEMA = {
    payment_id: "",
    category_id: "",
    user_name: "",
    name: "",
    date: "",
    due_date: "",
    delivery_date: "",
    description: "",
    note: ""
};

export const REQUEST_DETAIL_SCHEMA = {
    req_id: "",
    unit_id: "",
    quantity: "",
    item_delivery_days: "",
    description: ""
};

export const TERM_APPLIED_SCHEMA = {
    term_condition: "",
    comments: ""
};

export const TERM_CONDITION_SCHEMA = {
    term_condition: "",
    comments: ""
};