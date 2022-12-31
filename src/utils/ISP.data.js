export const ISP_DYNAMIC_DATA = {
    sale_order: {
        type: "Sales Order",
        products_by: "so",
        dropdowns: {
            constants: [
                {
                    name: 'customer_id',
                    type: 'search',
                    placeholder: 'search customer..',
                    label: 'Customer*',
                    required: true,
                    url: '/api/customers',
                    searchby: 'name'
                },
                {
                    name: 'address_id',
                    type: 'search',
                    placeholder: 'search address..',
                    label: 'Address*',
                    required: true,
                    url: '/api/addresses',
                    searchby: 'name'
                }
            ],
            variables: [
                {
                    name: 'prod_id',
                    type: 'search',
                    placeholder: 'mark..',
                    label: 'Product*',
                    required: true,
                    url: '/api/products',
                    searchby: 'name',
                    method: "selectProduct"
                },
                {
                    name: 'vat_id',
                    type: 'search',
                    placeholder: 'mark..',
                    label: 'VAT*',
                    required: true,
                    url: '/api/vats',
                    searchby: 'name',
                    method: "selectVat"
                },
            ]
        },
        inputs: {
            variables: [
                {
                    name: 'quantity',
                    type: 'number',
                    min: "1",
                    placeholder: '40..',
                    label: 'Quantity*',
                    required: true,
                },
                {
                    name: 'unit_price',
                    type: 'text',
                    min: "0",
                    placeholder: '200..',
                    label: 'Unit Price*',
                    required: true,
                },
                {
                    name: 'discount',
                    type: 'number',
                    min: 0,
                    placeholder: '2%..',
                    label: 'Discount*',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'text',
                    placeholder: 'the des..',
                    label: 'Discription*',
                    required: true,
                }
            ]
        },
        reference_number: {
            name: 'reference_number',
            type: 'text',
            placeholder: '#23232..',
            label: 'Ref No.*',
            required: true,
        },
        dateFromTo: [
            {
                name: 'date',
                type: 'date',
                placeholder: '2022-09-28..',
                label: 'Date*',
                required: true,
            },
            {
                name: 'due_date',
                type: 'date',
                placeholder: '2022-09-29..',
                label: 'Due date*',
                required: true,
            }
        ],
        schema: {
            constants: {
                customer_id: "",
                currency_id: "",
                address_id: "",
                address: "",
                reference_number: "",
                payment_id: "",
                days: "",
                so: []
            },
            // variable will be sent in the so array
            variables: {
                prod_id: 0,
                product_name: "",
                vat_id: 0,
                vat_percentage: 0,
                quantity: 1,
                unit_price: "",
                discount: 0,
                vat_amount: "",
                line_total: "",
                description: ''
            }
        },
        headerTags: ['so_num', 'total_without_vat', 'vat_total', 'date', 'due_date']
    },
    purchase_order: {
        type: "Purchase Order",
        products_by: "po",
        dropdowns: {
            constants: [
                {
                    name: 'supplier_id',
                    type: 'search',
                    placeholder: 'search supplier..',
                    label: 'Supplier*',
                    required: true,
                    url: '/api/suppliers',
                    searchby: 'name'
                },
                {
                    name: 'sale_order_id',
                    type: 'search',
                    placeholder: 'search sale order..',
                    label: 'Sale Order*',
                    required: true,
                    url: '/api/sale_orders',
                    searchby: 'so_num'
                },
                {
                    name: 'address_id',
                    type: 'search',
                    placeholder: 'search address..',
                    label: 'Address*',
                    required: true,
                    url: '/api/addresses',
                    searchby: 'name'
                },
                // {
                //     name: 'payment_id',
                //     type: 'search',
                //     placeholder: 'search payment..',
                //     label: 'Payment*',
                //     required: true,
                //     url: '/api/payment_terms',
                //     searchby: 'type'
                // },
            ],
            variables: [
                {
                    name: 'prod_id',
                    type: 'search',
                    placeholder: 'mark..',
                    label: 'Product*',
                    required: true,
                    url: '/api/products',
                    searchby: 'name',
                    method: "selectProduct"
                },
                {
                    name: 'vat_id',
                    type: 'search',
                    placeholder: 'mark..',
                    label: 'VAT*',
                    required: true,
                    url: '/api/vats',
                    searchby: 'name',
                    method: "selectVat"
                },
            ]
        },
        inputs: {
            variables: [
                {
                    name: 'quantity',
                    type: 'number',
                    min: "1",
                    placeholder: '40..',
                    label: 'Quantity*',
                    required: true,
                },
                {
                    name: 'unit_price',
                    type: 'text',
                    min: "1",
                    placeholder: '200..',
                    label: 'Unit Price*',
                    required: true,
                },
                {
                    name: 'discount',
                    type: 'number',
                    min: "1",
                    placeholder: '2%..',
                    label: 'Discount*',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'text',
                    placeholder: 'the des..',
                    label: 'Discription*',
                    required: true,
                }
            ]
        },
        reference_number: {
            name: 'reference_number',
            type: 'text',
            placeholder: '#23232..',
            label: 'Ref No.*',
            required: true,
        },
        dateFromTo: [
            {
                name: 'date',
                type: 'date',
                placeholder: '2022-09-28..',
                label: 'Date*',
                required: true,
            },
            {
                name: 'due_date',
                type: 'date',
                placeholder: '2022-09-29..',
                label: 'Due date*',
                required: true,
            }
        ],
        schema: {
            constants: {
                supplier_id: "",
                sale_order_id: "",
                currency_id: "",
                address_id: "",
                address: "",
                payment_id: "",
                days: "",
                reference_number: "",
                total_without_vat: "",
                vat_total: "",
                grand_total: "",
                po: []
            },
            // variable will be sent in the po array
            variables: {
                prod_id: 0,
                product_name: "",
                vat_id: 0,
                vat_percentage: 0,
                quantity: 1,
                unit_price: "",
                discount: 0,
                vat_amount: "",
                line_total: "",
                description: ''
            }
        },
        headerTags: ['po_num', 'total_without_vat', 'vat_total', 'date', 'due_date']
    },
    invoice_order: {
        type: "Invoice Order",
        products_by: "inv",
        dropdowns: {
            constants: [
                {
                    name: 'sale_order_id',
                    type: 'search',
                    placeholder: 'search sale order..',
                    label: 'Sale Order*',
                    required: true,
                    url: '/api/sale_orders',
                    searchby: 'so_num'
                },
                {
                    name: 'customer_id',
                    type: 'search',
                    placeholder: 'search customer..',
                    label: 'Customer*',
                    required: true,
                    url: '/api/customers',
                    searchby: 'name'
                },
                {
                    name: 'address_id',
                    type: 'search',
                    placeholder: 'search address..',
                    label: 'Address*',
                    required: true,
                    url: '/api/addresses',
                    searchby: 'name'
                }
            ],
            variables: [
                {
                    name: 'prod_id',
                    type: 'search',
                    placeholder: 'mark..',
                    label: 'Product*',
                    required: true,
                    url: '/api/products',
                    searchby: 'name',
                    method: "selectProduct"
                },
                {
                    name: 'vat_id',
                    type: 'search',
                    placeholder: 'mark..',
                    label: 'VAT*',
                    required: true,
                    url: '/api/vats',
                    searchby: 'name',
                    method: "selectVat"
                },
            ]
        },
        inputs: {
            variables: [
                {
                    name: 'quantity',
                    type: 'number',
                    min: "1",
                    placeholder: '40..',
                    label: 'Quantity*',
                    required: true,
                },
                {
                    name: 'unit_price',
                    type: 'text',
                    min: "0",
                    placeholder: '200..',
                    label: 'Unit Price*',
                    required: true,
                },
                {
                    name: 'discount',
                    type: 'number',
                    min: 0,
                    placeholder: '2%..',
                    label: 'Discount*',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'text',
                    placeholder: 'the des..',
                    label: 'Discription*',
                    required: true,
                }
            ]
        },
        reference_number: {
            name: 'reference_number',
            type: 'text',
            placeholder: '#23232..',
            label: 'Ref No.*',
            required: true,
        },
        description: {
            name: 'description',
            type: 'text',
            placeholder: '...',
            label: 'Description*',
            required: true,
        },
        dateFromTo: [
            {
                name: 'date',
                type: 'date',
                placeholder: '2022-09-28..',
                label: 'Date*',
                required: true,
            },
            {
                name: 'due_date',
                type: 'date',
                placeholder: '2022-09-29..',
                label: 'Due date*',
                required: true,
            }
        ],
        schema: {
            constants: {
                customer_id: "",
                currency_id: "",
                sale_order_id: "",
                address_id: "",
                address: "",
                reference_number: "",
                payment_id: "",
                days: "",
                description: '',
                total_vat: 0,
                grand_total: 0,
                no_of_quantity: 0,
                total_without_vat: 0,
                inv: [],
            },
            // variable will be sent in the inv array
            variables: {
                prod_id: 0,
                product_name: "",
                vat_id: 0,
                vat_percentage: 0,
                quantity: 1,
                unit_price: "",
                discount: 0,
                vat_amount: "",
                line_total: "",
                description: ''
            }
        },
        headerTags: ['so_num', 'total_without_vat', 'vat_total', 'date', 'due_date']
    },
    receive_order: {
        type: "Receive Order",
        dropdowns: {
            variables: [
                {
                    name: 'ware_house_id',
                    type: 'search',
                    placeholder: 'search sale order..',
                    label: 'Ware house*',
                    required: true,
                    url: '/api/ware_houses',
                    searchby: 'name'
                },
            ]
        },
        inputs: {
            variables: [
                {
                    name: 'signature',
                    placeholder: 'any...',
                    label: 'Signature*',
                    required: true,
                },
                {
                    name: 'part_number',
                    placeholder: '40232..',
                    label: 'Part Number*',
                    required: true,
                },
                {
                    name: 'serial_number',
                    placeholder: '423..',
                    label: 'Serial Number*',
                    required: true,
                },
                {
                    name: 'quantity',
                    type: 'number',
                    min: "1",
                    placeholder: '40..',
                    label: 'Quantity*',
                    required: true,
                },
                {
                    name: 'note',
                    placeholder: 'add note..',
                    label: 'Note*',
                    required: true,
                },
            ]
        },
        schema: {
            ware_house_id: 4,
            signature: "",
            part_number: "",
            serial_number: "",
            quantity: 0
        },
        endpoint: `/api/receive_orders`
    }
};;