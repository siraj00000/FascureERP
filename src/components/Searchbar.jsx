import React from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = ({ func, value }) => {
  return (
    <div className="flex items-center absolute right-5 gap-2 text-darkfs">
      <input
        placeholder="search"
        type={"search"}
        onChange={(e) => func(e.target.value)}
        value={value}
        className="h-8 px-2 text-sm bg-transparent focus:outline-none focus:border-b-2 border-greenfs"
      />
      <IoIosSearch />
    </div>
  );
};

export default Searchbar;
