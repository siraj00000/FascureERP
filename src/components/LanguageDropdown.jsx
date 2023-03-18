import { useEffect, useMemo, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { handleFetchAction } from "../context/actions";
import { useStateContext } from "../context/ContextProvider";
import { fetchLanguage } from "../context/contextActions";
import Cookies from "universal-cookie";

export default function LanguageDropdown() {
  const { setLang } = useStateContext();
  const [languages, setLanguages] = useState(null);

  const cookies = useMemo(() => new Cookies(), []);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await handleFetchAction("/api/languages");
        setLanguages(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (isMounted) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const selectLang = (item) => {
    let langAttri = `${item.slug}/en`;
    cookies.set("lang", langAttri);
    fetchLanguage(langAttri, setLang);
    window.location.href = '/'
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Language
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={"div"}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="w-full absolute right-0 z-10 mt-2 p-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1 w-full text-sm ">
            {languages?.map((item, index) => (
              <Menu.Item
                as={"h6"}
                key={index}
                onClick={() => selectLang(item)}
                className={"p-2 hover:bg-gray-200 cursor-pointer"}
              >
                {item?.name}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
