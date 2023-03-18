import React, { useEffect, useState } from "react";
import { handleFetchAction } from "../context/actions";
import { RiSearchLine } from "react-icons/ri";

const SearchBarComponent = (props) => {
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState([]);
  const [focused, setFocused] = useState(false);
  const { label, ...inputProps } = props;

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        if (inputProps?.name === "address_id" && props.externaldata) {
          setItemList(props.externaldata);
          return;
        }
        let URL = inputProps.url + `?search=${search}`;
        const response = await handleFetchAction(URL);

        setItemList(response?.data?.data);
      } catch (error) {
        let errorMessage = error?.response?.data;
        if (errorMessage.message === "")
          props.setstatus({ msg: "Request Failed !!", type: "error" });
      }
    };

    if (isMounted) {
      fetchData();
    }

    return () => (isMounted = false);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setFocused(false);
    }, 1000);
  };

  const onSelectItemDropdown = (value) => {
    setSearch(value[inputProps?.searchby]);
    props.onSelect(props?.name, value);
  };

  let shouldDropdownVisible = itemList?.length !== 0 && focused;
  return (
    <div className={`${props.size} flex flex-col mt-2 relative`}>
      <label className="font-thin text-xs text-gray-600">{label}</label>
      <input
        className="px-2 pr-10 my-1 rounded-md border-1 bg-white text-xs  
        font-medium h-8 focus:outline-none validitate flex items-center"
        autoComplete="off"
        {...inputProps}
        value={search}
        onChange={handleSearch}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
      />

      <RiSearchLine className="absolute right-2 top-7 text-gray-600" />

      {shouldDropdownVisible && (
        <div className="w-full h-20 max-h-150 absolute overflow-y-scroll bg-white  shadow-md border-1 top-14 z-40">
          {itemList?.map((item, index) => (
            <h6
              key={index}
              className="text-xs py-1 px-2 w-full hover:bg-darkfs hover:text-gray-100 cursor-pointer relative"
              onClick={() => onSelectItemDropdown(item)}
            >
              {item[inputProps?.searchby]}
            </h6>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(SearchBarComponent);
