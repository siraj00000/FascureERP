import { TbFileInvoice, TbTruckDelivery } from 'react-icons/tb';
import { BsBank, BsBoxSeam, BsFlag } from 'react-icons/bs';
import { MdOutlinePayments, MdOutlineSell, MdPayment } from 'react-icons/md';
import { RiContactsLine, RiFolderReceivedLine, RiSecurePaymentLine } from 'react-icons/ri';
import { IoReceiptOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart, AiOutlineSetting } from 'react-icons/ai';
import { FaRegAddressCard, FaWarehouse, FaRegMoneyBillAlt } from 'react-icons/fa';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { BiMessageSquareAdd, BiCategoryAlt, BiMessageAltDetail } from 'react-icons/bi';
import { ImSortNumbericDesc } from 'react-icons/im';
import { TbTruckLoading } from 'react-icons/tb';
import { GiHandGrip } from 'react-icons/gi';
import { GoRequestChanges } from 'react-icons/go';

export const MENU_LINKS = [
    {
        title: 'Receiveables',
        links: [
            {
                name: 'Sales Order',
                icon: <MdOutlineSell />,
                nav: 'sales-order'
            },
            {
                name: 'Customer',
                icon: <RiContactsLine />,
                nav: 'customer'
            },
            {
                name: 'Product',
                icon: <BsBoxSeam />,
                nav: 'product'
            },
            {
                name: 'Invoice',
                icon: <TbFileInvoice />,
                nav: 'invoice'
            },
            {
                name: 'Delivery Note',
                icon: <TbTruckDelivery />,
                nav: 'delivery-note'
            },
            {
                name: 'Receipt',
                icon: <IoReceiptOutline />,
                nav: 'receipt'
            },
            {
                name: 'Supplier',
                icon: <TbTruckLoading />,
                nav: 'supplier'
            },
            {
                name: 'Slave',
                icon: <GiHandGrip />,
                nav: 'slave'
            },
        ],
    },
    {
        title: 'Paybles',
        links: [
            {
                name: 'Purchase Order',
                icon: <AiOutlineShoppingCart />,
                nav: 'purchase-order'
            },
            {
                name: 'Payment Receipt',
                icon: <MdOutlinePayments />,
                nav: 'payment-receipt'
            },
            {
                name: 'Receive Note',
                icon: <RiFolderReceivedLine />,
                nav: 'receive-note'
            },
            {
                name: 'Number Sequence',
                icon: <ImSortNumbericDesc />,
                nav: 'number-sequence'
            },
        ],
    },
    {
        title: 'Ware House',
        links: [
            {
                name: 'Warehouse',
                icon: <FaWarehouse />,
                nav: 'warehouse'
            }
        ],
    },
    {
        title: 'Settings',
        links: [
            {
                name: 'Company Settings',
                icon: <AiOutlineSetting />,
                nav: 'company-settings'
            },
            {
                name: 'VAT Config',
                icon: <HiOutlineReceiptTax />,
                nav: 'vat-config'
            },
            {
                name: 'Payment terms',
                icon: <RiSecurePaymentLine />,
                nav: 'payment-terms'
            },
            {
                name: 'Payment Method',
                icon: <MdPayment />,
                nav: 'payment-method'
            },
            {
                name: 'Currency',
                icon: <FaRegMoneyBillAlt />,
                nav: 'currency'
            },
            {
                name: 'Bank Account',
                icon: <BsBank />,
                nav: 'bank-account'
            },
            {
                name: 'Country',
                icon: <BsFlag />,
                nav: 'country'
            },
            {
                name: 'Language',
                icon: <BiMessageSquareAdd />,
                nav: 'language'
            },
            {
                name: 'Address',
                icon: <FaRegAddressCard />,
                nav: 'address'
            },
        ],
    },
    {
        title: 'Others',
        links: [
            {
                name: 'Category',
                icon: <BiCategoryAlt />,
                nav: 'category'
            },
            {
                name: 'Request',
                icon: <GoRequestChanges />,
                nav: 'request'
            },
            {
                name: 'Req Detail',
                icon: <BiMessageAltDetail />,
                nav: 'req-detail'
            },
            {
                name: 'Term Condition',
                icon: <MdPayment />,
                nav: 'term-condition'
            },
            {
                name: 'Term Applied',
                icon: <FaRegMoneyBillAlt />,
                nav: 'term-applied'
            },
            {
                name: 'Unit Type',
                icon: <FaRegMoneyBillAlt />,
                nav: 'unit-type'
            },
            {
                name: 'Unit',
                icon: <FaRegMoneyBillAlt />,
                nav: 'unit'
            },
        ],
    }
];