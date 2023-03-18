import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";

const EmptyCollection = ({ text }) => {
  return (
    <div className="w-full h-[200px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-5 text-gray-400 rounded-md p-2 w-max">
        <FaThermometerEmpty size={50} />
        <h5 className="text-md font-semibold">{text}</h5>
      </div>
    </div>
  );
};

export default EmptyCollection;
