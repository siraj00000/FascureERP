import React from "react";

const Splash = () => {
  return (
    <div className="w-full bg-white max-h-40 flex flex-col justify-start items-center">
      <img
        src={require("../assets/logo.jpeg")}
        className="w-40 contain animate-pulse"
        alt="splash"
      />
      <p className="text-sm font-semibold text-gray-500 uppercase mt-2">loading...</p>
    </div>
  );
};
export const MainSplash = () => {
  return (
    <div className="w-full bg-white h-screen flex flex-col justify-center items-center">
      <img
        src={require("../assets/logo.jpeg")}
        className="w-40 contain animate-pulse"
        alt="splash"
      />
      <p className="text-sm font-semibold text-gray-500 uppercase mt-2">loading...</p>
    </div>
  );
};

export default Splash;
