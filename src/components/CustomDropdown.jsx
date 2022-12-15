import React, { useState } from "react";
import { handleFetchAction } from "../context/actions";

const CustomDropdown = (props) => {
  const [placeholder, setPlaceholder] = useState("");
  const [focused, setFocused] = useState(null);
  const [data, setData] = useState([]);
  const { label, ...inputProps } = props;

  const handleBlur = () => setFocused(false);

  const onSelectItemDropdown = (value) => {
    setPlaceholder(value[inputProps?.searchBy]);
    props.onSelect(props.name, value);
    handleBlur();
  };

  const handleSelector = () => {
    setFocused(props.current);
    if (inputProps.name === "address_id" && props.externalData) {
      setData(props.externalData);
      return;
    }
    // fetch dropdown data
    handleFetchAction(inputProps.url)
      .then((res) => setData(res.data.data))
      .catch((error) => {
        let errorMessage = error.response.data;
        if (errorMessage.message === "")
          props.setstatus({ msg: "Request Failed !!", type: "error" });
      });
  };
  return (
    <div className={`${props.size} flex flex-col mt-2 relative`}>
      <label className="font-thin text-xs text-gray-600">{props.label}</label>
      <div
        className={`px-2 pr-10 my-1 rounded-md border-1 bg-white text-xs  
        font-medium h-8 focus:outline-none validitate flex items-center cursor-pointer`}
        onClick={handleSelector}
      >
        <h6 className={placeholder ? "text-darkfs" : "text-gray-400"}>
          {placeholder || inputProps.placeholder}
        </h6>
      </div>
      {/* List */}
      {focused === props.current && (
        <div className="w-full max-h-150 absolute overflow-y-scroll bg-white border-1 top-14 z-40">
          {data.length === 0 ? (
            <h6 className="text-xs cursor-wait">Loading</h6>
          ) : (
            data.map((item, index) => (
              <h6
                key={index}
                className="text-xs py-1 px-2 hover:bg-darkfs hover:text-gray-100 cursor-pointer"
                onClick={() => onSelectItemDropdown(item)}
              >
                {item[inputProps?.searchby]}
              </h6>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
