import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MENU_LINKS } from "../utils/menu.data";

const Sidebar = () => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 bg-greenfs text-gray-100";
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white 
  dark:text-gray-200 dark:hover:text-black hover:bg-light-gray hover:text-black m-2`;

  return (
    <div className="bg-darkfs ml-0 px-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-greenfs"
        >
          <SiShopware /> <span>Fascure</span>
        </Link>
      </div>
      <div className="mt-10">
        {MENU_LINKS.map((item) => (
          <div key={item.title}>
            <p className="text-gray-400 m-3 mt-4">{item.title}</p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.nav}`}
                key={link.name}
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
