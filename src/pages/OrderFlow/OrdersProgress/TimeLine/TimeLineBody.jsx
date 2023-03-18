import React from "react";
import { COMPONENT_LIST } from "../componentList";

const TimeLineBody = ({ activeIndex, data }) => {
  let Component = COMPONENT_LIST[activeIndex].Component;
  return (
    <section className="my-5 rounded-lg bg-white drop-shadow-xl w-full p-5">
      <Component
        data={data[activeIndex]}
        activeIndex={activeIndex}
      />
    </section>
  );
};

export default React.memo(TimeLineBody);
