import React from "react";

const Button = ({ color, bgColor, size, text, borderRadius }) => {
  return (
    <button
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{ backgroundColor: bgColor, color, borderRadius }}
    >
      {text}{" "}
    </button>
  );
};

export const ButtonSecondary = ({
  eventToTrigger,
  text,
  Icon,
  disabled,
  isAllowed = true,
}) => (
  <button
    onClick={eventToTrigger}
    className={`${
      isAllowed ? "flex" : "hidden"
    } items-center gap-1 text-darkfs hover:text-greenfs text-sm p-1 rounded-sm`}
    disabled={disabled}
  >
    <Icon /> {text}
  </button>
);

export default Button;
