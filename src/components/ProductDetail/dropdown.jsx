import React, { useState } from "react";
import { handleFetchAction } from "../../context/actions";

const ISPProductDropdown = (props) => {
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
    <div className={`flex w-full flex-col mt-2`}>
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
            <option key={index} value={item?.id}>
              {item[inputProps?.searchBy]}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default ISPProductDropdown;
