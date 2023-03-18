import React from "react";
import { BsCircle } from "react-icons/bs";
import { SiCircle } from "react-icons/si";

const TimeLineHeader = ({ activeIndex, setIndex, data }) => {
  return (
    <div className="bg-white drop-shadow-md shadow-black px-5 rounded-lg w-full flex items-center justify-around gap-10">
      {data.map((item, index) => {
        let isActive = activeIndex === index;

        return (
          <button
            key={index}
            onClick={() => setIndex(index)}
            className={`flex flex-col justify-center items-center p-2 ${
              isActive
                ? "border-b-2 border-b-greenfs text-greenfs scale-125 -translate-y-2 bg-white"
                : "text-greenfs"
            }`}
          >
            {isActive ? <SiCircle size={25} /> : <BsCircle size={20} />}
            <h6 className="text-[10px] font-semibold uppercase text-black">
              {item.title}
            </h6>
          </button>
        );
      })}
    </div>
  );
};

export default React.memo(TimeLineHeader);
