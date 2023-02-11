import React, { useState } from "react";
import {
  handleFetchAction,
  handleInsertAction,
} from "../../../context/actions";
import TransitionModal from "../../../components/TransitionModal";
import { ISP_DYNAMIC_DATA } from "../../../utils/ISP.data";
import SearchBarComponent from "../../../components/SearchBarComponent";
import FormInput from "../../../components/FormInput";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdKeyboardBackspace } from "react-icons/md";
import ProductsModal from "./ProductsModal";
import NonSeriallizedProduct from "./NonSeriallizedProduct";
import swal from "sweetalert";

const RoForms = ({ id, attribute }) => {
  let COLLECTION_ATTRIBUTES = ISP_DYNAMIC_DATA[attribute];
  const [level, setLevel] = useState(0);
  const [productList, setProductList] = useState([]);
  const [values, setValues] = useState(COLLECTION_ATTRIBUTES.schema);
  const [receiveOrderItemsList, setReceiveOrderItemsList] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);
  const [receivedQty, setReceivedQty] = useState({
    itemIndex: null,
    value: "",
  });
  const goToPrevious = () => {
    if (level !== 0) setLevel(level - 1);
  };

  const calcPrevReceiveOrderQty = (receiveOrderDetail, index) => {
    let quantity = 0;
    for (let roIndex = 0; roIndex < receiveOrderDetail.length; roIndex++) {
      const element = receiveOrderDetail[roIndex].detail[index];
      quantity = quantity + Number(element?.quantity);
    }
    return quantity;
  };

  const fetchROsOfPO = async () => {
    try {
      const response = await handleFetchAction(
        `/api/get/receive-orders-by-po-id?po_id=${id}`
      );

      let { poDetails, receiveOrders } = response?.data?.Data;

      let purchaseOrderDetail = poDetails?.detail;
      let receiveOrderDetail = receiveOrders?.data;

      let product_list = [];

      for (let index = 0; index < purchaseOrderDetail?.length; index++) {
        const item = purchaseOrderDetail[index];

        let receiveOrdersQty = calcPrevReceiveOrderQty(
          receiveOrderDetail,
          index
        );

        let availableQty = item?.quantity - receiveOrdersQty;

        product_list.push({
          part_number: item?.product.part_number,
          name: item?.product?.name,
          quantity: availableQty,
          serialized_item: item?.product?.serialized_item,
        });
      }

      setProductList(product_list);
    } catch (error) {}
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSelect = (name, value) => {
    setValues({ ...values, [name]: value?.id });
  };

  const onAddReceivedQty = (index, e) => {
    let value = e.target.value;

    setReceivedQty({ itemIndex: index, value });
  };

  const addNonSeriallizedItem = (item, index) => {
    if (index !== receivedQty.itemIndex) return;
    let inventoryItems = [...inventoryList];
    let roItems = [...receiveOrderItemsList];
    let nonSeriallizedItem = [
      {
        name: item?.name,
        part_number: item?.part_number,
        serial_number: "null",
        quantity: Number(receivedQty.value),
      },
    ];

    roItems[index] = {
      part_number: item?.part_number,
      list: nonSeriallizedItem,
    };
    setReceiveOrderItemsList(roItems);

    item["quantity"] = Number(receivedQty.value);
    inventoryItems[index] = [item];
    setInventoryList(inventoryItems);
  };

  const addROItems = (indexOfItem, list, inventory) => {
    let roItems = [...receiveOrderItemsList];
    let inventoryItem = [...inventoryList];

    roItems[indexOfItem] = list;
    inventoryItem[indexOfItem] = inventory;

    setReceiveOrderItemsList(roItems);
    setInventoryList(inventoryItem);
  };

  const editReceiveOrderItem = (index) => {
    let roItems = [...receiveOrderItemsList];
    let inventoryItem = [...inventoryList];

    roItems[index] = undefined;
    inventoryItem[index] = undefined;

    setReceiveOrderItemsList(roItems);
    setInventoryList(inventoryItem);
  };

  const mergeReceiveOrderItem = () => {
    let arr = [];

    for (let index = 0; index < receiveOrderItemsList.length; index++) {
      const element = receiveOrderItemsList[index];
      if (element !== undefined) {
        arr.push(...element.list);
      }
    }

    return arr;
  };

  const mergeInventoryItem = () => {
    let arr = [];

    for (let index = 0; index < inventoryList.length; index++) {
      const element = inventoryList[index];
      if (element !== undefined) {
        arr.push(...element);
      }
    }

    return arr;
  };

  const handleSubmit = (e, onClose) => {
    e.preventDefault();

    if (level === 2) {
      // submitting...
      let receiveOrder = mergeReceiveOrderItem();
      let inventory = mergeInventoryItem();
      let data = {
        ware_house_id: values.ware_house_id,
        po_id: id,
        signature: values.signature,
        description: values.description,
        note: values.note,
        receiveOrder,
        inventory,
      };
      const insertReceiveOrder = async () => {
        try {
          handleInsertAction("api/receive_orders", data);
          swal("Good job!", "Receive order created succesfully!", "success");
          onClose();
        } catch (error) {
          swal("Failed!", "Issue occure", "error");
          console.log(error);
        }
      };

      insertReceiveOrder();
    } else if (level === 1) {
      setLevel(2);
    } else {
      setLevel(1);
      // listing...
      fetchROsOfPO();
    }
  };

  let isLoading = level && productList.length === 0;
  let btnStyle =
    "inline-block px-4 mr-2 my-2 py-1.5 bg-greenfs text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkfs hover:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out";
  return (
    <div>
      <TransitionModal
        title={"Receive Order"}
        onPress={() => ""}
        isLoading={isLoading}
      >
        <ChildElement handleSubmit={handleSubmit}>
          <div className="flex items-center gap-3 mb-5">
            {level !== 0 && (
              <MdKeyboardBackspace size={30} onClick={goToPrevious} />
            )}
            <h1 className="font-semibold text-3xl">
              {COLLECTION_ATTRIBUTES.type}
            </h1>
          </div>
          {level === 0 && (
            <div className="flex justify-between gap-x-2 flex-wrap">
              {COLLECTION_ATTRIBUTES.dropdowns.variables.map(
                (dropdown, index) => (
                  <React.Fragment key={index}>
                    <SearchBarComponent
                      {...dropdown}
                      value={values[dropdown.name]}
                      onSelect={onSelect}
                      size={dropdown.w_size}
                    />
                  </React.Fragment>
                )
              )}
              {COLLECTION_ATTRIBUTES.inputs.variables.map((input, index) => (
                <React.Fragment key={index}>
                  <FormInput
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    size={input.w_size}
                    note={
                      ["note", "description"].includes(input.name) ? "h-20" : ""
                    }
                  />
                </React.Fragment>
              ))}
            </div>
          )}

          {level === 1 && (
            <div>
              <table className="table-fixed border-1 w-full">
                <thead>
                  <tr className="bg-gray-200 pl-2 h-12">
                    <th className="pl-2">Item</th>
                    <th>Part No</th>
                    <th>Qty</th>
                    <th>Received Qty</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {productList?.map((item, index) => (
                    <tr key={index} className="h-12 text-sm">
                      <td className="pl-2">{item.name}</td>
                      <td>{item.part_number}</td>
                      <td>{item.quantity}</td>
                      <td className="relative">
                        <input
                          required
                          disabled={
                            receiveOrderItemsList[index] !== undefined ||
                            item.quantity === 0
                          }
                          placeholder="qty.."
                          type={"number"}
                          onChange={(e) => onAddReceivedQty(index, e)}
                          className={`text-md placeholder:text-darkfs text-darkfs border-1 px-2 w-24 ${
                            index === receivedQty.itemIndex &&
                            item.quantity < receivedQty.value &&
                            "border-red-500 border-2 outline-none"
                          }`}
                          max={item.quantity}
                          min="1"
                        />
                        {index === receivedQty.itemIndex &&
                          item.quantity < receivedQty.value && (
                            <p className="text-[8px] font-bold text-red-500 absolute -bottom-1">
                              Exceeding form the qty
                            </p>
                          )}
                      </td>
                      <td className="text-center">
                        <div className="w-full">
                          {receiveOrderItemsList[index] !== undefined ? (
                            <button
                              type="button"
                              className={btnStyle}
                              onClick={() => editReceiveOrderItem(index)}
                            >
                              Edit
                            </button>
                          ) : (
                            <>
                              {item.serialized_item === 1 ? (
                                <TooltipComponent
                                  content={"Add item's serial number"}
                                  position={"TopCenter"}
                                >
                                  <ProductsModal
                                    isDisabled={
                                      index !== receivedQty.itemIndex ||
                                      item.quantity < receivedQty.value ||
                                      item.quantity === 0
                                    }
                                    list={item}
                                    numOfItems={receivedQty.value}
                                    addROItems={addROItems}
                                    indexOfItem={index}
                                    ware_house_id={values.ware_house_id}
                                  />
                                </TooltipComponent>
                              ) : (
                                <TooltipComponent
                                  content={"non seriallized item"}
                                  position={"TopCenter"}
                                >
                                  <NonSeriallizedProduct
                                    isDisabled={
                                      index !== receivedQty.itemIndex ||
                                      item.quantity < receivedQty.value ||
                                      item.quantity === 0
                                    }
                                    list={item}
                                    indexOfItem={index}
                                    addItem={addNonSeriallizedItem}
                                  />
                                </TooltipComponent>
                              )}
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {level === 2 && (
            <div>
              <table className="table-fixed border-1 w-full">
                <thead>
                  <tr className="bg-gray-200 pl-2 h-12">
                    <th className="pl-2">Item</th>
                    <th>Part Num</th>
                    <th>Qty</th>
                    <th>Serial Num</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {receiveOrderItemsList?.map((item) =>
                    item?.list.map((subItem, subIndex) => (
                      <tr key={subIndex} className="h-12 text-sm">
                        <td className="pl-2">{subItem.name}</td>
                        <td>{subItem.part_number}</td>
                        <td>{subItem.quantity}</td>
                        <td>{subItem.serial_number || "non seriallized"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          <div className="w-full mt-10">
            <button
              className={`${
                level === 2 ? "bg-greenfs" : "bg-darkfs"
              } w-full flex items-center justify-center gap-2 border-1 rounded-md text-gray-100 font-semibold p-2`}
            >
              {level === 2 ? "Submit" : "next"}
            </button>
          </div>
        </ChildElement>
      </TransitionModal>
    </div>
  );
};

const ChildElement = ({ children, onClose, handleSubmit }) => {
  return (
    <div className="w-[900px] p-5">
      <form onSubmit={(e) => handleSubmit(e, onClose)}>{children}</form>
    </div>
  );
};

export default RoForms;
