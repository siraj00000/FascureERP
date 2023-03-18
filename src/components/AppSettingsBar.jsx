import React from "react";
import { useStateContext } from "../context/ContextProvider";
import LanguageDropdown from "./LanguageDropdown";

const AppSettingsBar = () => {
  const { settingBarWidth } = useStateContext();
  let width = settingBarWidth ? "w-full" : "hidden";

  return (
    <div>
      <section
        className={`${width} h-full bg-black bg-opacity-[.3] absolute right-0 z-50 shadow-md drop-shadow-xl`}
      >
        <div className={`w-[300px] bg-white absolute h-full right-0 p-5`}>
          {/* Language */}
          <div className="flex flex-col">
            <LanguageDropdown />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppSettingsBar;
