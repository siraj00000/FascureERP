import React, { useState } from "react";
import { ISP_DYNAMIC_DATA } from "../../../utils/ISP.data";
import TransitionModal from "../../../components/TransitionModal";
import FormInput from "../../../components/FormInput";

const NonSeriallizedProduct = (props) => {
  return (
    <TransitionModal
      isDisabled={props.isDisabled}
      title={"Add"}
      onPress={() => ""}
    >
      <ChildElement {...props} />
    </TransitionModal>
  );
};

const ChildElement = ({ onClose, addItem, list, indexOfItem }) => {
  let Model = ISP_DYNAMIC_DATA.receive_order.product_modal;
  const [values, setValues] = useState(Model.schema);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const addNonSerialNumItem = () => {
    addItem({ ...values, ...list }, indexOfItem);
    onClose();
  };
  return (
    <div className="w-[800px] p-5">
      <form className={"p-5 w-full"}>
        <h2 className="mb-3 text-3xl text-darkfs font-bold">Non Seriallized</h2>
        <div className="w-full flex flex-wrap items-center justify-between">
          {Model.input_ns.map((input, index) => (
            <div key={index} className="w-[49%]">
              <FormInput
                {...input}
                value={values[input.name]}
                onChange={onChange}
                size={"w-full"}
              />
            </div>
          ))}
        </div>
        <button
          onClick={addNonSerialNumItem}
          className={`bg-greenfs mt-5 w-full flex items-center justify-center gap-2 border-0 rounded-md text-white font-semibold p-2`}
        >
          Insert
        </button>
      </form>
    </div>
  );
};

export default React.memo(NonSeriallizedProduct);
