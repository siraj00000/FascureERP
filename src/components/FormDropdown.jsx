import React, { useState } from "react";
import { handleFetchAction } from "../context/actions";

const FormDropdown = (props) => {
  const [focused, setFocused] = useState(false);
  const [data, setData] = useState([]);
  const { label, onChange, ...inputProps } = props;

  const handleBlur = () => setFocused(true);

  const handleFocused = () => {
    handleFetchAction(inputProps.url)
      .then((res) => setData(res.data.data))
      .catch((error) => {
        let errorMessage = error.response.data;
        if (errorMessage.message === "")
          props.setstatus({ msg: "Request Failed !!", type: "error" });
      });
  };

  return (
    <div className="w-30 flex flex-col mt-2">
      <label className="font-medium	text-xs text-gray-600">{props.label}</label>
      <select
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocused}
        focused={focused.toString()}
        className={`px-2 pr-10 my-1 rounded-sm border-1 bg-gray-100 text-sm text-black 
        font-medium h-8 focus:border-2 focus:outline-none validitate`}
        property="voucherCategoryClass"
      >
        <option>Select</option>
        {data.length === 0 ? (
          <option>loading...</option>
        ) : (
          data?.map((item, index) => (
            <option key={index} value={item?.id}>
              {item[inputProps?.searchby]}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default FormDropdown;
