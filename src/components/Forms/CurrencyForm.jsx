import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import FormInput from "../FormInput";

const FormLayout = (props) => {
  const [values, setValues] = useState({
    name: "",
    symbol: "",
    code: "",
    value: 1,
    status: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.refresh(true);
    props
      .handleAction(values)
      .then((res) => props.refresh(false))
      .catch((error) => {
        console.log("currency", error);
        props.refresh(false);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClose = () => {
    props.close();
  };
  return (
    <div>
      <GrClose
        onClick={onClose}
        className={"cursor-pointer absolute top-5 right-5 text-3xl"}
      />
      <form onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-5 uppercase">{props.type}</h1>
        <div className={`flex items-center gap-2`}>
          {props?.formSource.map((input, index) => (
            <FormInput
              key={index}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <button
          className={`w-full h-10 rounded-lg text-center bg-black my-4 font-semibold text-white`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormLayout;
