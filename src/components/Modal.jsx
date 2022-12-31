import React from "react";

const Modal = ({ children, mxw }) => {
  return (
    <div
      className={`absolute justify-center items-start flex overflow-hidden inset-0 
       z-50 outline-none focus:outline-none bg-black bg-opacity-50 ${
         mxw ? "p-2" : "p-5"
       }
       
       `}
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className={`bg-white max-h-[100vh] overflow-auto relative inset-0 ${
          mxw ? "w-90" : "max-w-8% w-auto"
        } rounded-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
