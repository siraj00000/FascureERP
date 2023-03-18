import React from "react";

const ToggleSwitch = ({
  enableText,
  disabledText,
  updateHandler,
  updatedVal,
}) => {
  const onClick = () => {
    updateHandler((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClick} className="px-3 rounded-full text-white text-md bg-greenfs">
        {!updatedVal ? <h6>{disabledText}</h6> : <h6>{enableText}</h6>}
      </button>
    </div>
  );
};

export default ToggleSwitch;
