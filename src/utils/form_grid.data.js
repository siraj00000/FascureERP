export const CURRENCY_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Saudi riyal..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'symbol',
        type: 'text',
        placeholder: 'SR..',
        label: 'Symbol*',
        required: true,
    },
    {
        name: 'code',
        type: 'text',
        placeholder: 'SAR..',
        label: 'Code*',
        required: true,
    }
];

export const VAT_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Abc..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'percentage',
        type: 'text',
        placeholder: '23..',
        label: 'Percentage*',
        required: true,
    }
];

export const ADDRESS_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Abc..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'type',
        type: 'text',
        placeholder: 'office..',
        label: 'Type*',
        required: true,
    },
    {
        name: 'location',
        type: 'text',
        placeholder: 'block #2..',
        label: 'Location*',
        required: true,
    },
    {
        name: 'city',
        type: 'text',
        placeholder: 'saudi..',
        label: 'City*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: 'xyz..',
        label: 'Description*',
        required: true,
    },
    {
        name: 'phone_number',
        type: 'text',
        placeholder: '9329323..',
        label: 'Phone Number*',
        required: true,
    },
];

export const PAYMENT_TERMS_FORM = [
    {
        name: 'type',
        type: 'text',
        placeholder: 'Cash..',
        label: 'Type*',
        required: true,
    },
    {
        name: 'days',
        type: 'text',
        placeholder: 'monday..',
        label: 'Days*',
        required: true,
    }
];

export const BANK_ACCOUNT_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'ABC..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'ac',
        type: 'text',
        placeholder: '1133..',
        label: 'AC*',
        required: true,
    },
    {
        name: 'iban',
        type: 'text',
        placeholder: '1122..',
        label: 'Iban*',
        required: true,
    },
    {
        name: 'swift_bic',
        type: 'text',
        placeholder: '3789909..',
        label: 'Swift Bic*',
        required: true,
    },
    {
        name: 'note',
        type: 'text',
        placeholder: 'abc..',
        label: 'Note*',
        required: true,
    },
    {
        name: 'address',
        type: 'text',
        placeholder: 'block #02..',
        label: 'Address*',
        required: true,
    },
];

export const NUMBER_SEQUENCES_FORM = [
    {
        name: 'seq_name',
        type: 'text',
        placeholder: 'invoice..',
        label: 'Seq Name*',
        required: true,
    },
    {
        name: 'seq_prx',
        type: 'text',
        placeholder: 'inv..',
        label: 'Seq Prx*',
        required: true,
    },
    {
        name: 'seq_number',
        type: 'text',
        placeholder: '300..',
        label: 'Seq Number*',
        required: true,
    },
    {
        name: 'comment',
        type: 'text',
        placeholder: 'commenting..',
        label: 'Comment*',
        required: true,
    },
    {
        name: 'type',
        type: 'text',
        placeholder: 'inv..',
        label: 'Type*',
        required: true,
    }
];

export const COUNTRY_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Saudi..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'iso_code',
        type: 'text',
        placeholder: 'PKs..',
        label: 'Iso Code*',
        required: true,
    },
    {
        name: 'phone_code',
        type: 'text',
        placeholder: '+966..',
        label: 'Phone Code*',
        required: true,
    },
];

export const LANGUAGE_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Arabi..',
        label: 'Name*',
        required: true,
    }
];

export const SLAVE_FORM = [
    {
        name: 'part_number',
        type: 'text',
        placeholder: '123..',
        label: 'Part Number*',
        required: true,
    },
    {
        name: 'quantity',
        type: 'number',
        min: "1",
        placeholder: '21..',
        label: 'Quantity*',
        required: true,
    },
    {
        name: 'discount',
        type: 'number',
        min: "0",
        placeholder: '2..',
        label: 'Discount*',
        required: true,
    },
    {
        name: 'unit_price',
        type: 'number',
        min: "1",
        placeholder: '21..',
        label: 'Unit Price*',
        required: true,
    },
    {
        name: 'vat',
        type: 'number',
        min: "1",
        placeholder: '12..',
        label: 'VAT*',
        required: true,
    },
    {
        name: 'grand_total',
        type: 'numeric',
        placeholder: '300..',
        label: 'Grand Total*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: '21..',
        label: 'Description*',
        required: true,
    },
];

export const CUSTOMER_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'mark..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'bac@gmail.com..',
        label: 'Email*',
        required: true,
    },
    {
        name: 'phone_number',
        type: 'text',
        placeholder: '11312..',
        label: 'Phone Number*',
        required: true,
    },
    {
        name: 'web',
        type: 'text',
        placeholder: 'https://app..',
        label: 'Web*',
        required: true,
    },
    {
        name: 'cr_number',
        type: 'number',
        min: "1",
        placeholder: '1290121..',
        label: 'CR Number*',
        required: true,
    },
    {
        name: 'vat_number',
        type: 'number',
        min: "1",
        placeholder: '2323232..',
        label: 'VAT Number*',
        required: true,
    },
    {
        name: 'type',
        type: 'text',
        placeholder: 'seller..',
        label: 'Type*',
        required: true,
    },
    {
        name: 'note',
        type: 'text',
        placeholder: 'the note..',
        label: 'Note*',
        required: true,
    }
];

export const SUPPLIER_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'mark..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'bac@gmail.com..',
        label: 'Email*',
        required: true,
    },
    {
        name: 'phone_number',
        type: 'text',
        placeholder: '11312..',
        label: 'Phone Number*',
        required: true,
    },
    {
        name: 'web',
        type: 'text',
        placeholder: 'https://app..',
        label: 'Web*',
        required: true,
    },
    {
        name: 'cr_number',
        type: 'number',
        min: "1",
        placeholder: '1290121..',
        label: 'CR Number*',
        required: true,
    },
    {
        name: 'vat_number',
        type: 'number',
        min: "1",
        placeholder: '2323232..',
        label: 'VAT Number*',
        required: true,
    },
    {
        name: 'type',
        type: 'text',
        placeholder: 'seller..',
        label: 'Type*',
        required: true,
    },
    {
        name: 'note',
        type: 'text',
        placeholder: 'the note..',
        label: 'Note*',
        required: true,
    }
];

export const PRODUCT_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'product name..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'part_number',
        type: 'number',
        min: "1",
        placeholder: '121..',
        label: 'Part Number*',
        required: true,
    },
    {
        name: 'serialized_item',
        type: 'number',
        min: "1",
        placeholder: '12..',
        label: 'Serialized Item*',
        required: true,
    },
    {
        name: 'category',
        type: 'text',
        placeholder: 't31..',
        label: 'Category*',
        required: true,
    },
    {
        name: 'note',
        type: 'text',
        placeholder: 'the note..',
        label: 'Note*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: 'block #02..',
        label: 'Description*',
        required: true,
    },
];

export const PURCHASE_ORDER_FORM = [
    {
        name: 'po_num',
        type: 'text',
        placeholder: '20%..',
        label: 'PO Number*',
        required: true,
    },
    {
        name: 'total with vat',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Total With VAT*',
        required: true,
    },
    {
        name: 'vat_total',
        type: 'number',
        min: "1",
        placeholder: '25%..',
        label: 'Total VAT*',
        required: true,
    },
    {
        name: 'grand_total',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Grand Total*',
        required: true,
    },
    {
        name: 'quantity',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Quantity*',
        required: true,
    },
    {
        name: 'unit_price',
        type: 'number',
        min: "1",
        placeholder: '20%..',
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
        name: 'vat_amount',
        type: 'number',
        min: "1",
        placeholder: '200..',
        label: 'VAT Amount*',
        required: true,
    },
    {
        name: 'line_total',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Line Total*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: '20%..',
        label: 'Discription*',
        required: true,
    },
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
];

export const SALES_ORDER_FORM = [
    {
        name: 'total_without_vat',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Total Without VAT*',
        required: true,
    },
    {
        name: 'vat_total',
        type: 'number',
        min: "1",
        placeholder: '25%..',
        label: 'Total VAT*',
        required: true,
    },
    {
        name: 'grand_total',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Grand Total*',
        required: true,
    },
    {
        name: 'quantity',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Quantity*',
        required: true,
    },
    {
        name: 'unit_price',
        type: 'number',
        min: "1",
        placeholder: '20%..',
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
        name: 'vat_amount',
        type: 'number',
        min: "1",
        placeholder: '200..',
        label: 'VAT Amount*',
        required: true,
    },
    {
        name: 'line_total',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Line Total*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: '20%..',
        label: 'Discription*',
        required: true,
    },
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
];

export const INVOICES_FORM = [
    {
        name: 'part_number',
        type: 'number',
        min: "1",
        placeholder: '252..',
        label: 'Part Number*',
        required: true,
    },
    {
        name: 'item_number',
        type: 'number',
        min: "1",
        placeholder: '252..',
        label: 'Item Number*',
        required: true,
    },
    {
        name: 'total_without_vat',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Total Without VAT*',
        required: true,
    },
    {
        name: 'vat_total',
        type: 'number',
        min: "1",
        placeholder: '25%..',
        label: 'Total VAT*',
        required: true,
    },
    {
        name: 'grand_total',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Grand Total*',
        required: true,
    },
    {
        name: 'quantity',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Quantity*',
        required: true,
    },
    {
        name: 'unit_price',
        type: 'number',
        min: "1",
        placeholder: '20%..',
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
        name: 'vat_amount',
        type: 'number',
        min: "1",
        placeholder: '200..',
        label: 'VAT Amount*',
        required: true,
    },
    {
        name: 'line_total',
        type: 'number',
        min: "1",
        placeholder: '20%..',
        label: 'Line Total*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: 'abc..',
        label: 'Discription*',
        required: true,
    },
    {
        name: 'product_description',
        type: 'text',
        placeholder: 'abc..',
        label: 'Product Discription*',
        required: true,
    },
    {
        name: 'invoice_date',
        type: 'date',
        placeholder: '2022-09-28..',
        label: 'Invoice Date*',
        required: true,
    },
    {
        name: 'due_date',
        type: 'date',
        placeholder: '2022-09-29..',
        label: 'Due date*',
        required: true,
    }
];

export const COMPANY_SETTINGS_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'abc..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'email',
        type: 'text',
        placeholder: 'mark@example.com..',
        label: 'Email*',
        required: true,
    },
    {
        name: 'phone_number',
        type: 'text',
        placeholder: '+2929121338..',
        label: 'Phone Number*',
        required: true,
    },
    {
        name: 'cr_number',
        type: 'text',
        placeholder: '392392839..',
        label: 'CR Number*',
        required: true,
    },
    {
        name: 'vat_number',
        type: 'text',
        placeholder: '392832839..',
        label: 'VAT Number*',
        required: true,
    },
    {
        name: 'address',
        type: 'text',
        placeholder: 'block #02..',
        label: 'Address*',
        required: true,
    },
    {
        name: 'logo',
        type: 'file',
        placeholder: 'brand name..',
        label: 'Logo*',
        required: true,
        accept: "images/png, images/svg, images/jpeg, images/jpg, images/gif"
    },
];

export const PAYMENT_METHOD_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'xyz..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: 'the des..',
        label: 'Description*',
        required: true,
    },
    {
        name: 'note',
        type: 'text',
        placeholder: 'the note..',
        label: 'Note*',
        required: true,
    }
];

export const CASH_RECEIPT_FORM = [
    {
        name: 'payment_mode',
        type: 'text',
        placeholder: 'cash..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'amount',
        type: 'number',
        placeholder: '400..',
        label: 'Amount*',
        required: true,
    },
    {
        name: 'note',
        type: 'text',
        placeholder: 'the note..',
        label: 'Note*',
        required: true,
    }
];

export const CONTACT_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'abc..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'phone_number',
        type: 'tel',
        placeholder: '400..',
        label: 'Phone Number*',
        required: true,
    }
];

export const WARE_HOUSE_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'abc..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'part_number',
        type: 'number',
        min: "1",
        placeholder: '1120..',
        label: 'Part Number*',
        required: true,
    },
    {
        name: 'serial',
        type: 'number',
        min: "1",
        placeholder: '1220..',
        label: 'Serial*',
        required: true,
    },
    {
        name: 'quantity',
        type: 'number',
        min: "1",
        placeholder: '1120..',
        label: 'Quantity*',
        required: true,
    },
    {
        name: 'location',
        type: 'text',
        placeholder: 'plaza..',
        label: 'Location*',
        required: true,
    },
    {
        name: 'address',
        type: 'text',
        placeholder: 'near park..',
        label: 'Address*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: 'the des..',
        label: 'Description*',
        required: true,
    },
];

export const DELIVERY_ORDER_FORM = [
    {
        name: 'signature',
        type: 'text',
        placeholder: 'ahc..',
        label: 'Signature*',
        required: true,
    },
    {
        name: 'part_number',
        type: 'number',
        placeholder: '2100..',
        label: 'Part Number*',
        required: true,
    },
    {
        name: 'serial_number',
        type: 'number',
        placeholder: '8900..',
        label: 'Serial Number*',
        required: true,
    },
    {
        name: 'quantity',
        type: 'number',
        placeholder: '40..',
        label: 'Quantity*',
        required: true,
    },
];

export const RECEIVE_ORDER_FORM = [
    {
        name: 'signature',
        type: 'text',
        placeholder: 'ahc..',
        label: 'Signature*',
        required: true,
    },
    {
        name: 'part_number',
        type: 'number',
        placeholder: '2100..',
        label: 'Part Number*',
        required: true,
    },
    {
        name: 'serial_number',
        type: 'number',
        placeholder: '8900..',
        label: 'Serial Number*',
        required: true,
    },
    {
        name: 'quantity',
        type: 'number',
        placeholder: '40..',
        label: 'Quantity*',
        required: true,
    },
];

export const CATEGORY_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'mark..',
        label: 'Name*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: '...',
        label: 'Description*',
        required: true,
    },
    {
        name: 'note',
        type: 'text',
        placeholder: '...',
        label: 'Note*',
        required: true,
    }
];

export const TERM_CONDITION_FORM = [
    {
        name: 'term_condition',
        type: 'text',
        placeholder: 'mark..',
        label: 'Term Condition*',
        required: true,
    },
    {
        name: 'comments',
        type: 'text',
        placeholder: '...',
        label: 'Comments*',
        required: true,
    }
];

export const REQUEST_FORM = [
    {
        name: 'user_name',
        type: 'text',
        placeholder: 'mark..',
        label: 'User Name*',
        required: true,
    },
    {
        name: 'name',
        type: 'text',
        placeholder: '...',
        label: 'Name*',
        required: true,
    },
    {
        name: 'date',
        type: 'date',
        placeholder: '...',
        label: 'Date*',
        required: true,
    },
    {
        name: 'due_date',
        type: 'date',
        placeholder: '...',
        label: 'Due Date*',
        required: true,
    },
    {
        name: 'delivery_date',
        type: 'date',
        placeholder: '...',
        label: 'Delivery Date*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: '...',
        label: 'Description*',
        required: true,
    },
    {
        name: 'note',
        type: 'text',
        placeholder: '...',
        label: 'Note*',
        required: true,
    },
];

export const REQUEST_DETAIL_FORM = [
    {
        name: 'quantity',
        type: 'text',
        placeholder: '2..',
        label: 'Quantity*',
        required: true,
    },
    {
        name: 'item_delivery_days',
        type: 'text',
        placeholder: '...',
        label: 'Item Delivery Days*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: '...',
        label: 'Description*',
        required: true,
    },
];

export const TERM_APPLIED_FORM = [
    {
        name: 'term_condition',
        type: 'text',
        placeholder: 'mark..',
        label: 'Term Condition*',
        required: true,
    },
    {
        name: 'comments',
        type: 'text',
        placeholder: '...',
        label: 'Comments*',
        required: true,
    }
];

export const UNIT_FORM = [
    {
        name: 'name',
        type: 'text',
        placeholder: '...',
        label: 'Name*',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        placeholder: '...',
        label: 'Description*',
        required: true,
    }
]

// AUTH FORM
export const LOGIN_FORM = [
    {
        name: 'email',
        type: 'email',
        placeholder: 'mark@example.com..',
        label: 'Email*',
        required: true
    },
    {
        name: 'password',
        type: 'password',
        placeholder: '12***..',
        label: 'Password*',
        required: true
    },
];

export const REGISTERATION_FORM = [
    {
        name: 'name',
        type: 'name',
        placeholder: 'mark..',
        label: 'Name*',
        required: true
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'mark@example.com..',
        label: 'Email*',
        required: true
    },
    {
        name: 'phone_number',
        type: 'tel',
        placeholder: '+92332..',
        label: 'Phone Number*',
        required: true
    },
    {
        name: 'invoice_sync',
        type: 'text',
        placeholder: 'ISQ..',
        label: 'Invoice Sync*',
        required: true
    },
    {
        name: 'password',
        type: 'password',
        placeholder: '12***..',
        label: 'Password*',
        required: true
    },
    {
        name: 'password_confirmation',
        type: 'password',
        placeholder: '12***..',
        label: 'Confirm Password*',
        required: true
    },
];