import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import FormDropdown from "../FormDropdown";
import FormInput from "../FormInput";

const FormLayout = (props) => {
  const [status, setStatus] = useState({ msg: null, type: "" });
  const [values, setValues] = useState(props.valuesGroup);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.refresh(true);
    props
      .handleAction(values)
      .then((res) => {
        let successMessage = res.data.Success.message;
        setStatus({ msg: successMessage, type: "success" });
        props.refresh(false);
      })
      .catch((error) => {
        setStatus({ msg: error.response?.data[1], type: "error" });
        props.refresh(false);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClose = () => {
    props.close();
  };

  if (status.type === "success") {
    setTimeout(() => {
      props.close();
    }, 2000);
  }

  return (
    <div>
      <div className="flex items-center justify-between h-12 px-5 bg-bluef text-yellowfc">
        <h1 className="text-xl font-bold uppercase">{props.type}</h1>
        <FaWindowClose
          onClick={onClose}
          className={
            "cursor-pointer rounded-sm text-yellowfc font-bold text-xl"
          }
        />
      </div>
      <form onSubmit={handleSubmit} className={"px-10 pt-5"}>
        <div className={`flex items-center flex-wrap gap-x-12 gap-y-2`}>
          {props.formDropdownGrid?.length !== 0 &&
            props?.formDropdownGrid?.map((input, index) => (
              <FormDropdown
                key={index}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                setstatus={setStatus}
              />
            ))}
          {props?.formSource.map((input, index) => (
            <FormInput
              key={index}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>

        {status.msg !== null && (
          <div
            className={` ${
              status.type === "error" ? "bg-red-200" : "bg-green-200"
            } rounded-md p-5 gap-5 flex items-center flex-wrap w-max mt-5 border-1`}
          >
            {typeof status.msg === "string" ? (
              <h6 className="text-xs font-semibold">{status.msg}</h6>
            ) : (
              Object.entries(status.msg)?.map(([key, value]) => (
                <div
                  key={key + value}
                  className="flex items-center gap-2 w-max"
                >
                  <h6 className="text-xs font-semibold">*</h6>
                  <h6 className="text-xs font-semibold ">{key}</h6>
                  <h6 className="text-xs">{value[0]}</h6>
                </div>
              ))
            )}
          </div>
        )}

        <div className="text-right border-t-1 mt-4 py-3">
          <button
            className={`h-10 px-10 rounded-lg text-center bg-bluefc font-semibold text-yellowfc`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLayout;
