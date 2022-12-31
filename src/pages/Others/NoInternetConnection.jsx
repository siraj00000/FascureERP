import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const NoInternetConnection = () => {
  return (
    <div className="h-[100px] bg-black text-red-500 flex items-center justify-center gap-5">
      <FiAlertTriangle size={50} className="hover:animate-bounce cursor-pointer" />
      <h1 className="font-bold text-lg">No Internet Connection</h1>
    </div>
  );
};

export default NoInternetConnection;
