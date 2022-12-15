import React, { useState } from "react";

const ISPProductFormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, ...inputProps } = props;

  const handleFocused = () => setFocused(true);

  return (
    <div className={`flex flex-col w-full mt-2`}>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocused}
        focused={focused.toString()}
        className={`px-2 my-1 rounded-md border-1 bg-white text-sm text-black 
        font-medium h-8 focus:border-2 focus:outline-none validitate`}
      />
    </div>
  );
};

export default ISPProductFormInput;
