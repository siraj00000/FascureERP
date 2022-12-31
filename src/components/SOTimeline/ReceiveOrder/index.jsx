import React, { useState } from "react";
import swal from "sweetalert";
import { handleInsertAction } from "../../../context/actions";
import { ISP_DYNAMIC_DATA } from "../../../utils/ISP.data";
import FormInput from "../../FormInput";
import SearchBarComponent from "../../SearchBarComponent";
import TransitionModal from "../../TransitionModal";

const ReceiveOrder = ({ attribute }) => {
  let COLLECTION_ATTRIBUTES = ISP_DYNAMIC_DATA[attribute];
  const [values, setValues] = useState(COLLECTION_ATTRIBUTES.schema);
  const [error, setError] = useState(null);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let URL = COLLECTION_ATTRIBUTES?.endpoint;
      const response = await handleInsertAction(URL, values);
      let successMessage = response?.data?.Success?.message;
      swal("Good job!", successMessage, "success");
    } catch (error) {
      if (error?.response?.status === 400) {
        setError(error.response.data[1]);
      }
    }
  };
  console.log(error);
  return (
    <TransitionModal title={"Generate"}>
      <div className="p-4 min-w-[400px]">
        <h2 className="font-bold text-xl uppercase text-right mb-5">
          {COLLECTION_ATTRIBUTES.type}
        </h2>
        <form onSubmit={handleSubmit}>
          {COLLECTION_ATTRIBUTES.dropdowns.variables.map((dropdown, index) => (
            <React.Fragment key={index}>
              <SearchBarComponent
                {...dropdown}
                value={values[dropdown.name]}
                onSelect={onChange}
                size={"w-full"}
              />
              {error !== null && error[values[dropdown.name]] && (
                <p>{error[values[dropdown.name]][0]}</p>
              )}
            </React.Fragment>
          ))}
          {COLLECTION_ATTRIBUTES.inputs.variables.map((input, index) => (
            <React.Fragment>
              <FormInput
                key={index}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                size={"w-full"}
                note={input.name === "note" ? "h-20" : ""}
              />
              {error !== null && error[values[input.name]] && (
                <p>{error[values[input.name]][0]}</p>
              )}
            </React.Fragment>
          ))}
          <div className="w-full mt-10">
            <button className="w-full border-1 rounded-md bg-darkfs text-gray-100 font-semibold p-2">
              Submit {COLLECTION_ATTRIBUTES.type}
            </button>
          </div>
        </form>
      </div>
    </TransitionModal>
  );
};

export default ReceiveOrder;
