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

export const DYNAMIC_MENU_LINKS = (lang) => {
    const MENU_LINKS = [
        {
            title: 'Receiveables',
            links: [
                {
                    name: lang?.sale_order,
                    icon: <MdOutlineSell />,
                    nav: 'sales-order'
                },
                {
                    name: lang?.customer,
                    icon: <RiContactsLine />,
                    nav: 'customer'
                },
                {
                    name: lang?.product,
                    icon: <BsBoxSeam />,
                    nav: 'product'
                },
                {
                    name: lang?.invoice,
                    icon: <TbFileInvoice />,
                    nav: 'invoice'
                },
                {
                    name: lang?.delivery_order,
                    icon: <TbTruckDelivery />,
                    nav: 'delivery-note'
                },
                {
                    name: lang?.receipt,
                    icon: <IoReceiptOutline />,
                    nav: 'receipt'
                },
                {
                    name: lang?.supplier,
                    icon: <TbTruckLoading />,
                    nav: 'supplier'
                }
            ],
        },
        {
            title: 'Paybles',
            links: [
                {
                    name: lang?.purchase_order,
                    icon: <AiOutlineShoppingCart />,
                    nav: 'purchase-order'
                },
                {
                    name: lang?.cash_recept,
                    icon: <MdOutlinePayments />,
                    nav: 'payment-receipt'
                },
                {
                    name: lang?.receive_note,
                    icon: <RiFolderReceivedLine />,
                    nav: 'receive-note'
                },
                {
                    name: lang?.seq_number,
                    icon: <ImSortNumbericDesc />,
                    nav: 'number-sequence'
                },
            ],
        },
        {
            title: lang?.ware_house,
            links: [
                {
                    name: lang?.warehouse,
                    icon: <FaWarehouse />,
                    nav: 'warehouse'
                }
            ],
        },
        {
            title: 'Settings',
            links: [
                {
                    name: lang?.company_settings,
                    icon: <AiOutlineSetting />,
                    nav: 'company-settings'
                },
                {
                    name: 'Permissions',
                    icon: <RiAdminLine />,
                    nav: 'user-permissions'
                },
                {
                    name: lang?.vat_amount,
                    icon: <HiOutlineReceiptTax />,
                    nav: 'vat-config'
                },
                {
                    name: lang?.payment_terms,
                    icon: <RiSecurePaymentLine />,
                    nav: 'payment-terms'
                },
                {
                    name: lang?.payment_mode,
                    icon: <MdPayment />,
                    nav: 'payment-method'
                },
                {
                    name: lang?.currency,
                    icon: <FaRegMoneyBillAlt />,
                    nav: 'currency'
                },
                {
                    name: lang?.bank_account,
                    icon: <BsBank />,
                    nav: 'bank-account'
                },
                {
                    name: lang?.country,
                    icon: <BsFlag />,
                    nav: 'country'
                },
                {
                    name: lang?.language,
                    icon: <BiMessageSquareAdd />,
                    nav: 'language'
                },
                {
                    name: lang?.address,
                    icon: <FaRegAddressCard />,
                    nav: 'address'
                },
            ],
        },
        {
            title: 'Others',
            links: [
                {
                    name: lang?.category,
                    icon: <BiCategoryAlt />,
                    nav: 'category'
                },
                {
                    name: lang?.req,
                    icon: <GoRequestChanges />,
                    nav: 'request'
                },
                {
                    name: lang?.request_detail,
                    icon: <BiMessageAltDetail />,
                    nav: 'req-detail'
                },
                {
                    name: lang?.term_condition,
                    icon: <MdPayment />,
                    nav: 'term-condition'
                },
                {
                    name: lang?.term_applied,
                    icon: <FaRegMoneyBillAlt />,
                    nav: 'term-applied'
                },
                {
                    name: lang?.unit_type,
                    icon: <FaRegMoneyBillAlt />,
                    nav: 'unit-type'
                },
                {
                    name: lang?.unit,
                    icon: <FaRegMoneyBillAlt />,
                    nav: 'unit'
                },
            ],
        }
    ];

    return MENU_LINKS;
};