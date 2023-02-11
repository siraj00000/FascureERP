import React, { useState } from "react";
import TransitionModal from "../../../components/TransitionModal";
import { MdOutlineAddBox, MdOutlineClose } from "react-icons/md";
import { ISP_DYNAMIC_DATA } from "../../../utils/ISP.data";
import FormInput from "../../../components/FormInput";

const ProductsModal = (props) => {
  return (
    <div>
      <TransitionModal
        isDisabled={props.isDisabled}
        title={"Add"}
        onPress={() => ""}
      >
        <ChildElement {...props} />
      </TransitionModal>
    </div>
  );
};

const ChildElement = ({
  list,
  numOfItems,
  addROItems,
  onClose,
  indexOfItem,
  ware_house_id,
}) => {
  let Model = ISP_DYNAMIC_DATA.receive_order.product_modal;
  const [values, setValues] = useState(Model.schema);
  const [productList, setProductList] = useState({
    receive_order: [],
    inventory: [],
  });

  let isDisabled = productList.receive_order.length === Number(numOfItems);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addSerialNumItem = () => {
    const receive_order_item = [...productList.receive_order];
    const inventory_item = [...productList.inventory];

    receive_order_item.push({
      name: list?.name,
      part_number: list?.part_number,
      quantity: 1,
      serial_number: values.serial_number,
    });

    inventory_item.push({
      ware_house_id,
      part_number: list?.part_number,
      quantity: 1,
      ...values,
    });

    setProductList({
      receive_order: receive_order_item,
      inventory: inventory_item,
    });
    setValues(Model.schema);
  };
  const deleteLastSerialNumber = () => {
    const reveiveOrderList = [...productList.receive_order];
    const inventoryList = [...productList.inventory];

    reveiveOrderList.pop();
    inventoryList.pop();
    setProductList({
      receive_order: reveiveOrderList,
      inventory: inventoryList,
    });
  };
  const handleInsertProductList = (e) => {
    e.preventDefault();

    if (!isDisabled) {
      addSerialNumItem();
    } else {
      addROItems(
        indexOfItem,
        {
          part_number: list.part_number,
          list: productList.receive_order,
        },
        productList.inventory
      );
      onClose();
    }
  };

  return (
    <div className="w-[800px] p-5">
      <h2 className="mb-3 text-3xl text-darkfs font-bold">Seriallization</h2>
      <form className="w-full">
        <h5
          className="mb-3 text-sm text-darkfs font-bold italic"
          title="part number"
        >
          {list.part_number}
        </h5>

        {!isDisabled && (
          <div className="w-full flex flex-wrap items-center justify-between">
            {Model.inputs.map((input, index) => (
              <FormInput
                key={index}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                size={"w-[49%]"}
              />
            ))}
          </div>
        )}

        <div className="w-full flex items-center justify-between text-sm capitalize py-2">
          <h6 title="total serial numbers to add">
            total item <strong>{numOfItems} </strong>
          </h6>
          <h6 title="total serials number added">
            serials added <strong>{productList.receive_order?.length}</strong>
          </h6>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {productList.receive_order?.map((item, index) => (
            <h6
              title="serial number"
              key={index}
              className="text-[10px] bg-greenfs p-1 rounded-full text-white font-bold flex items-center gap-2"
            >
              {item?.serial_number}

              {index === productList.receive_order.length - 1 && (
                <MdOutlineClose
                  onClick={deleteLastSerialNumber}
                  size={15}
                  className="cursor-pointer"
                  title="delete last serial number"
                />
              )}
            </h6>
          ))}
        </div>

        <button
          onClick={handleInsertProductList}
          className={`bg-greenfs mt-5 w-full flex items-center justify-center gap-2 border-0 rounded-md text-white font-semibold p-2`}
        >
          {isDisabled ? "Insert" : "Next"}
        </button>
      </form>
    </div>
  );
};

export default ProductsModal;
