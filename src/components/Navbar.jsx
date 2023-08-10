/* eslint-disable react/prop-types */
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import spanish from "../assets/icons/spain.png";
import english from "../assets/icons/estados-unidos.png";

const Navbar = ({
  mobileMenuClick,
  sections,
  toggleLightMode,
  toggleDarkMode,
  openMenu,
  themeMenu,
  changeLanguage,
  languageChange,
}) => {
  return (
    <nav>
      <ul className="flex gap-4">
        {sections.map((obj) => (
          <NavItem key={obj.name} link={obj.section}>
            {obj.name}
          </NavItem>
        ))}
        <button onClick={changeLanguage}>
          <span className="flex">
            Language
            {languageChange === "english" ? (
              <img src={english} className="ml-1 h-6" />
            ) : (
              <img src={spanish} className="ml-1 h-6" />
            )}
          </span>
        </button>
        <button
          onClick={openMenu}
          className="border-r pr-3 border-gray-300 md:border-r-0 md:pr-0 md:border-l md:pl-3"
        >
          <span>
            Theme
            <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
          </span>
        </button>
        <li
          id="mobile-menu"
          className="md:hidden text-xl hover:rounded-full hover:bg-slate-100 box-border w-8 h-8 flex place-items-center justify-center z-10 dark:hover:bg-slate-600 cursor-pointer"
          onClick={mobileMenuClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </li>

        {themeMenu ? (
          <ul className="absolute w-36 bg-white -bottom-20 right-6 text-sm rounded-lg drop-shadow-lg text-left dark:bg-slate-800 overflow-hidden">
            <li
              className="py-2 px-3 hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer"
              onClick={toggleLightMode}
            >
              <FontAwesomeIcon icon={faSun} />
              <span className="ml-2">light mode</span>
            </li>
            <li
              className="py-2 px-3 hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer"
              onClick={toggleDarkMode}
            >
              <FontAwesomeIcon icon={faMoon} />
              <span className="ml-2">dark mode</span>
            </li>
          </ul>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
