import { TbFileInvoice, TbTruckDelivery } from 'react-icons/tb';
import { BsBank, BsBoxSeam, BsFlag } from 'react-icons/bs';
import { MdOutlinePayments, MdOutlineSell, MdPayment } from 'react-icons/md';
import { RiContactsLine, RiFolderReceivedLine, RiSecurePaymentLine, RiAdminLine } from 'react-icons/ri';
import { IoReceiptOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart, AiOutlineSetting } from 'react-icons/ai';
import { FaRegAddressCard, FaWarehouse, FaRegMoneyBillAlt } from 'react-icons/fa';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { BiMessageSquareAdd, BiCategoryAlt, BiMessageAltDetail } from 'react-icons/bi';
import { ImSortNumbericDesc } from 'react-icons/im';
import { TbTruckLoading } from 'react-icons/tb';
import { GoRequestChanges } from 'react-icons/go';

export const DYNAMIC_MENU_LINKS = (lang, permissions) => {
    const MENU_LINKS = [
        {
            title: 'Receiveables',
            links: [
                {
                    name: lang?.sale_order,
                    icon: <MdOutlineSell />,
                    nav: 'sales-order',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.customer,
                    icon: <RiContactsLine />,
                    nav: 'customer',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.product,
                    icon: <BsBoxSeam />,
                    nav: 'product',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.invoice,
                    icon: <TbFileInvoice />,
                    nav: 'invoice',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.delivery_order,
                    icon: <TbTruckDelivery />,
                    nav: 'delivery-note',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.receipt,
                    icon: <IoReceiptOutline />,
                    nav: 'receipt',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.supplier,
                    icon: <TbTruckLoading />,
                    nav: 'supplier',
                    isAllowed: permissions['']
                }
            ],
        },
        {
            title: 'Paybles',
            links: [
                {
                    name: lang?.purchase_order,
                    icon: <AiOutlineShoppingCart />,
                    nav: 'purchase-order',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.cash_recept,
                    icon: <MdOutlinePayments />,
                    nav: 'payment-receipt',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.receive_note,
                    icon: <RiFolderReceivedLine />,
                    nav: 'receive-note',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.seq_number,
                    icon: <ImSortNumbericDesc />,
                    nav: 'number-sequence',
                    isAllowed: permissions['']
                },
            ],
        },
        {
            title: lang?.ware_house,
            links: [
                {
                    name: lang?.warehouse,
                    icon: <FaWarehouse />,
                    nav: 'warehouse',
                    isAllowed: permissions['']
                }
            ],
        },
        {
            title: 'Settings',
            links: [
                {
                    name: lang?.company_settings,
                    icon: <AiOutlineSetting />,
                    nav: 'company-settings',
                    isAllowed: permissions['']
                },
                {
                    name: 'Permissions',
                    icon: <RiAdminLine />,
                    nav: 'user-permissions',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.vat_amount,
                    icon: <HiOutlineReceiptTax />,
                    nav: 'vat-config',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.payment_terms,
                    icon: <RiSecurePaymentLine />,
                    nav: 'payment-terms',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.payment_mode,
                    icon: <MdPayment />,
                    nav: 'payment-method',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.currency,
                    icon: <FaRegMoneyBillAlt />,
                    nav: 'currency',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.bank_account,
                    icon: <BsBank />,
                    nav: 'bank-account',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.country,
                    icon: <BsFlag />,
                    nav: 'country',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.language,
                    icon: <BiMessageSquareAdd />,
                    nav: 'language',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.address,
                    icon: <FaRegAddressCard />,
                    nav: 'address',
                    isAllowed: permissions['']
                },
            ],
        },
        {
            title: 'Others',
            links: [
                {
                    name: lang?.category,
                    icon: <BiCategoryAlt />,
                    nav: 'category',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.req,
                    icon: <GoRequestChanges />,
                    nav: 'request',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.request_detail,
                    icon: <BiMessageAltDetail />,
                    nav: 'req-detail',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.term_condition,
                    icon: <MdPayment />,
                    nav: 'term-condition',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.term_applied,
                    icon: <FaRegMoneyBillAlt />,
                    nav: 'term-applied',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.unit_type,
                    icon: <FaRegMoneyBillAlt />,
                    nav: 'unit-type',
                    isAllowed: permissions['']
                },
                {
                    name: lang?.unit,
                    icon: <FaRegMoneyBillAlt />,
                    nav: 'unit',
                    isAllowed: permissions['']
                },
            ],
        }
    ];

    return MENU_LINKS;
};