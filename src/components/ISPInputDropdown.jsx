import React, { useState } from "react";
import { handleFetchAction } from "../context/actions";

const ISPFormDropdown = (props) => {
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
    <div className={`${props.size} flex flex-col mt-2`}>
      <label className="font-thin text-xs text-gray-600">{props.label}</label>
      <select
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocused}
        focused={focused.toString()}
        className={`px-2 pr-10 my-1 rounded-md border-1 bg-white text-xs text-black 
        font-medium h-8 focus:outline-none validitate`}
        property="voucherCategoryClass"
      >
        <option className="text-xs">{inputProps.placeholder}</option>
        {data.length === 0 ? (
          <option>loading...</option>
        ) : (
          data?.map((item, index) => (
            <option key={index} value={JSON.stringify(item)} security="1">
              {item[inputProps?.searchby]}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default ISPFormDropdown;
