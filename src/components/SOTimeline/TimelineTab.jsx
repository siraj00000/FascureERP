import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const TimelineTab = ({ event, title, color }) => {
  return (
    <button
      onClick={event}
      style={{ color }}
      className={`max-w-max font-bold uppercase text-[12px] flex items-center flex-col`}
    >
      <AiFillCheckCircle size={30} />
      <h6 className="absolute top-16 z-10">{title}</h6>
    </button>
  );
};

export default TimelineTab;
