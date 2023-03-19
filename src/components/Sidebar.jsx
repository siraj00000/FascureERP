import React, { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { DYNAMIC_MENU_LINKS } from "../utils/menu.data";
import { useStateContext } from "../context/ContextProvider";
import Logo from "../assets/logo.jpeg";

const Sidebar = () => {
  const { companyData, lang, permissions } = useStateContext();
  let MENU_LINKS = useMemo(() => DYNAMIC_MENU_LINKS(lang, permissions), []);
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 bg-greenfs text-gray-100";
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-darks 
  dark:text-gray-200 dark:hover:text-black hover:bg-gray-100 hover:text-darkfs m-2`;

  return (
    <div className="divide-y bg-white ml-0 px-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-start gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-greenfs"
        >
          <img
            src={companyData?.logo || Logo}
            width={"80px"}
            height={"80px"}
            alt="company-logo"
          />
          <div className="">
            <h6 className="text-sm font-semibold ">{companyData?.name}</h6>
            <h6 className="text-sm font-semibold ">{companyData?.email}</h6>
          </div>
        </Link>
      </div>
      <div className="mt-10">
        {MENU_LINKS?.map((item, index) => (
          <div key={index}>
            <p className="text-darkfs m-3 mt-4">{item.title}</p>
            {item.links.map((link, l_in) => (
              <NavLink
                to={`/${link.nav}`}
                key={l_in}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
