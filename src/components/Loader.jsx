import React from "react";

const Loader = () => {
  return (
    <div className="bg-transparent text-center flex flex-col items-center justify-center gap-1">
      <img
        src={require("../assets/logo.jpeg")}
        className="w-40 contain animate-pulse"
        alt="splash"
      />
      <p className="text-sm font-semibold text-gray-500 uppercase mt-2">
        loading...
      </p>
    </div>
  );
};

export default Loader;
