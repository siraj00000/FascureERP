//

import React, { useState } from "react";
import TransitionModal from "../../../components/TransitionModal";
import {
  handleFetchAction,
  handleInsertAction,
} from "../../../context/actions";
import { ISP_DYNAMIC_DATA } from "../../../utils/ISP.data";
import SearchBarComponent from "../../../components/SearchBarComponent";
import FormInput from "../../../components/FormInput";
import Splash from "../../../components/Splash";
import { MdKeyboardBackspace } from "react-icons/md";
import swal from "sweetalert";

const DeliveryOrderForm = (props) => {
  let collection = ISP_DYNAMIC_DATA.delivery_order;
  const [deliveryOrderRawData, setDeliveryOrderRawData] = useState(null);

  const getAndSetDeliveryOrderData = async () => {
    try {
      const response = await handleFetchAction(
        `/api/get/single-saleorder/${props.id}`
      );
      setDeliveryOrderRawData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let isLoading = deliveryOrderRawData === null;
  return (
    <TransitionModal
      title={"Delivery Order"}
      onPress={getAndSetDeliveryOrderData}
      isLoading={isLoading}
    >
      <ChildElement
        {...props}
        data={deliveryOrderRawData}
        collection={collection}
      />
    </TransitionModal>
  );
};

const ChildElement = ({ onClose, data, collection, id, onInsertComplete }) => {
  const [level, setLevel] = useState(0);
  const [values, setValues] = useState(collection.schema);
  const [inventoryHistory, setInventoryHistory] = useState(null);
  const [deliveryOrderItem, setDeliveryOrderItem] = useState([]);

  const [deliverQty, setDeliverQty] = useState({
    itemIndex: null,
    value: "",
  });
  const log = console.log;

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSelect = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  const getPartNumbers = () => {
    let partNumList = [];

    data?.detail.forEach((item) => {
      let part_number = item.product.part_number;
      partNumList.push(part_number);
    });

    return partNumList;
  };
  const sortInventoryData = (response) => {
    let inventoryInfo = [];

    for (let index = 0; index < response?.data.length; index++) {
      let element = response?.data[index];
      if (element.length !== 0) {
        let part_number = element[0].part_number;
        let serial_number = "serial12";
        let count = response?.total[index];
        inventoryInfo.push({ part_number, serial_number, count });
      }
    }

    return inventoryInfo;
  };
  const searchInventory = async () => {
    let partNumberList = getPartNumbers();
    try {
      const response = await handleFetchAction(
        `/api/get/quantity-by-warehourse-id?ware_house_id=${values.warehouse_id?.id}&part_number=${partNumberList}`
      );
      const getSortedInfo = sortInventoryData(response.data);
      setInventoryHistory(getSortedInfo);
    } catch (error) {
      console.log(error);
    }
  };
  const onAddDeliverQty = (index, e) => {
    let value = e.target.value;

    setDeliverQty({ itemIndex: index, value });
  };
  const addDeliveryOrderItem = (index, item) => {
    if (index !== deliverQty.itemIndex) return;

    let list = [...deliveryOrderItem];
    list[index] = { ...item, quantity: deliverQty.value };
    setDeliveryOrderItem(list);
  };
  const editDeliveryOrderItem = (index) => {
    let list = [...deliveryOrderItem];
    list[index] = undefined;
    setDeliveryOrderItem(list);
  };
  const goToPrevious = () => {
    if (level !== 0) setLevel(level - 1);
  };
  const insertDeliveryOrder = async () => {
    try {
      let deliveryOrderRequestData = {
        sale_order_id: id,
        address_id: data?.sale_order?.address_id,
        warehouse_id: values.warehouse_id.id,
        note: values.note,
        signature: values.signature,
        description: values.description,
        deliveryOrder: deliveryOrderItem,
      };

      await handleInsertAction(
        "/api/delivery_orders",
        deliveryOrderRequestData
      );
      onInsertComplete();
      swal("Good job!", "Delivery order created succesfully!", "success");

      onClose();
    } catch (error) {
      log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (level === 0) {
      setLevel(1);
      searchInventory();
    } else if (level === 1) {
      insertDeliveryOrder();
      // will decide
    }
  };

  let isLoading = level === 1 && inventoryHistory === null;
  if (isLoading) return <Splash />;
  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-5">
        {level !== 0 && (
          <MdKeyboardBackspace size={30} onClick={goToPrevious} />
        )}
        <h1 className="font-semibold text-3xl">{collection.type}</h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Level 0 */}
        {level === 0 ? (
          <div className="w-[400px]">
            {collection?.dropdowns.map((input, index) => (
              <SearchBarComponent
                key={index}
                {...input}
                value={values[input.name]}
                onSelect={onSelect}
                size={"w-full"}
              />
            ))}
            {collection?.inputs.map((input, index) => (
              <FormInput
                key={index}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                size={"w-full border-red-500"}
                note={["description"].includes(input.name) ? "h-20" : ""}
              />
            ))}
          </div>
        ) : null}

        {level === 1 ? (
          <div className="w-[900px]">
            <table className="table-fixed border-1 w-full">
              <thead>
                <tr className="bg-gray-200 pl-2 h-12">
                  <th className="pl-2">Part No</th>
                  <th>Serial No</th>
                  <th>Qty</th>
                  <th>Deliver Qty</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {inventoryHistory.map((item, index) => (
                  <tr key={index} className="h-12 text-sm">
                    <td className="pl-2">{item.part_number}</td>
                    <td>{item.serial_number}</td>
                    <td>{item.count}</td>
                    <td className="relative">
                      <input
                        required
                        disabled={
                          deliveryOrderItem[index] !== undefined ||
                          item.count === 0
                        }
                        placeholder="qty.."
                        type={"number"}
                        onChange={(e) => onAddDeliverQty(index, e)}
                        className={`text-md placeholder:text-darkfs text-darkfs border-1 px-2 w-24 ${
                          index === deliverQty.itemIndex &&
                          item.count < deliverQty.value &&
                          "border-red-500 border-2 outline-none"
                        }`}
                        max={item.count}
                        min="1"
                      />
                      {index === deliverQty.itemIndex &&
                        item.count < deliverQty.value && (
                          <p className="text-[8px] font-bold text-red-500 absolute -bottom-1">
                            Exceeding form the qty
                          </p>
                        )}
                    </td>
                    <td className="text-center">
                      <div className="w-full">
                        {deliveryOrderItem[index] === undefined ? (
                          <button
                            disabled={
                              index !== deliverQty.itemIndex ||
                              item.count < deliverQty.value ||
                              item.count === 0
                            }
                            type="button"
                            className={
                              "inline-block px-4 mr-2 my-2 py-1.5 bg-greenfs text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkfs hover:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                            }
                            onClick={() => addDeliveryOrderItem(index, item)}
                          >
                            Add
                          </button>
                        ) : (
                          <button
                            type="button"
                            className={
                              "inline-block px-4 mr-2 my-2 py-1.5 bg-greenfs text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkfs hover:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                            }
                            onClick={() => editDeliveryOrderItem(index, item)}
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        <div className="w-full mt-10">
          <button
            className={`w-full flex items-center justify-center gap-2 border-1 rounded-md bg-greenfs text-gray-100 font-semibold p-2`}
          >
            {level === 1 ? "Done" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(DeliveryOrderForm);
