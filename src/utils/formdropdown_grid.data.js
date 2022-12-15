export const SALES_ORDER_DROPDOWNS = [
    {
        name: 'customer_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Customer*',
        required: true,
        url: '/api/customers',
        searchby: 'name'
    },
    {
        name: 'currency_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Currency*',
        required: true,
        url: '/api/currencies',
        searchby: 'name'
    },
    {
        name: 'address_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Address*',
        required: true,
        url: '/api/addresses',
        searchby: 'name'
    },
    {
        name: 'payment_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Payment*',
        required: true,
        url: '/api/payment_terms',
        searchby: 'type'
    },
    {
        name: 'slave_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Slave*',
        required: true,
        url: '/api/slaves',
        searchby: 'part_number'
    },
    {
        name: 'prod_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Product*',
        required: true,
        url: '/api/products',
        searchby: 'name'
    },
    {
        name: 'vat_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'VAT*',
        required: true,
        url: '/api/vats',
        searchby: 'name'
    },
];

export const PURCHASE_ORDER_DROPDOWNS = [
    {
        name: 'supplier_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Supplier*',
        required: true,
        url: '/api/suppliers',
        searchby: 'name'
    },
    {
        name: 'customer_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Customer*',
        required: true,
        url: '/api/customers',
        searchby: 'name'
    },
    {
        name: 'currency_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Currency*',
        required: true,
        url: '/api/currencies',
        searchby: 'name'
    },
    {
        name: 'address_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Address*',
        required: true,
        url: '/api/addresses',
        searchby: 'name'
    },
    {
        name: 'payment_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Payment*',
        required: true,
        url: '/api/payment_terms',
        searchby: 'type'
    },
    {
        name: 'slave_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Slave*',
        required: true,
        url: '/api/slaves',
        searchby: 'part_number'
    },
    {
        name: 'prod_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Product*',
        required: true,
        url: '/api/products',
        searchby: 'name'
    },
    {
        name: 'vat_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'VAT*',
        required: true,
        url: '/api/vats',
        searchby: 'name'
    },
];

export const INVOICE_DROPDOWNS = [
    {
        name: 'customer_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Customer*',
        required: true,
        url: '/api/customers',
        searchby: 'name'
    },
    {
        name: 'currency_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Currency*',
        required: true,
        url: '/api/currencies',
        searchby: 'name'
    },
    {
        name: 'user_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'User*',
        required: true,
        url: '',
        searchby: ''
    },
    {
        name: 'sale_order_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Sales Order*',
        required: true,
        url: '/api/sale_orders',
        searchby: 'so_num'
    },
    {
        name: 'prod_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Product*',
        required: true,
        url: '/api/products',
        searchby: 'products'
    },
    {
        name: 'vat_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'VAT*',
        required: true,
        url: '/api/vats',
        searchby: 'name'
    },
];

export const ADDRESS_DROPDOWNS = [
    {
        name: 'customer_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Customer*',
        required: true,
        url: '/api/customers',
        searchby: 'name'
    },
    {
        name: 'supplier_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Supplier*',
        required: true,
        url: '/api/suppliers',
        searchby: 'name'
    },
    {
        name: 'country_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Country*',
        required: true,
        url: '/api/countries',
        searchby: 'name'
    },
];

export const CASH_RECEIPT_DROPDOWNS = [
    {
        name: 'customer_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Customer*',
        required: true,
        url: '/api/customers',
        searchby: 'name'
    },
    {
        name: 'invoice_id',
        type: 'number',
        placeholder: 'invoice..',
        label: 'Invoice*',
        required: true,
        url: '/api/invoices',
        searchby: 'name'
    },
    {
        name: 'language_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Language*',
        required: true,
        url: '/api/languages',
        searchby: 'name'
    },
    {
        name: 'vat_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'VAT*',
        required: true,
        url: '/api/vats',
        searchby: 'name'
    },
];

export const DELIVERY_ORDER_DROPDOWNS = [
    {
        name: 'sale_order_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Sales Order*',
        required: true,
        url: '/api/sale_orders',
        searchby: 'so_num'
    },
    {
        name: 'address_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Address*',
        required: true,
        url: '/api/addresses',
        searchby: 'name'
    },
];

export const RECEIVE_ORDER_DROPDOWNS = [
    {
        name: 'ware_house_id',
        type: 'number',
        placeholder: 'mark..',
        label: 'Warehouse*',
        required: true,
        url: '/api/ware_houses',
        searchby: 'name'
    }
];

export const COMPANY_SETTINGS_DROPDOWNS = [
    {
        name: 'currency_id',
        type: 'number',
        placeholder: 'SAR..',
        label: 'Currency*',
        required: true,
        url: '/api/currencies',
        searchby: 'name'
    },
    {
        name: 'language_id',
        type: 'number',
        placeholder: 'Arabi..',
        label: 'Language*',
        required: true,
        url: '/api/languages',
        searchby: 'name'
    }
];

export const CUSTOMER_DROPDOWN = [
    {
        name: 'currency_id',
        type: 'number',
        placeholder: 'cash..',
        label: 'Currency*',
        required: true,
        url: '/api/currencies',
        searchby: 'name'
    },
    {
        name: 'payment_terms_id',
        type: 'number',
        placeholder: 'cash..',
        label: 'Payment Terms*',
        required: true,
        url: '/api/payment_terms',
        searchby: 'type'
    },
];

export const SUPPLIER_DROPDOWN = [
    {
        name: 'currency_id',
        type: 'number',
        placeholder: 'cash..',
        label: 'Currency*',
        required: true,
        url: '/api/currencies',
        searchby: 'name'
    },
    {
        name: 'payment_term_id',
        type: 'number',
        placeholder: 'cash..',
        label: 'Payment Terms*',
        required: true,
        url: '/api/payment_terms',
        searchby: 'type'
    },
];

export const REQUEST_DROPDOWN = [
    {
        name: 'payment_id',
        type: 'number',
        placeholder: 'cash..',
        label: 'Payment Terms*',
        required: true,
        url: '/api/payment_terms',
        searchby: 'type'
    },
    {
        name: 'category_id',
        type: 'number',
        placeholder: 'cash..',
        label: 'Payment Terms*',
        required: true,
        url: '/api/categories',
        searchby: 'name'
    },
];

export const REQUEST_DETAIL_DROPDOWN = [
    {
        name: 'req_id',
        type: 'number',
        placeholder: 'cash..',
        label: 'Request*',
        required: true,
        url: '/api/reqs',
        searchby: 'user_name'
    },
    {
        name: 'unit_id',
        type: 'number',
        placeholder: 'cash..',
        label: 'Unit*',
        required: true,
        url: '/api/units',
        searchby: 'name'
    },
];