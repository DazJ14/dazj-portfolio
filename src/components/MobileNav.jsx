/* eslint-disable react/prop-types */
import MobileNavItem from "./MobileNavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./MobileNav.css";
import spanish from "../assets/icons/spain.png";
import english from "../assets/icons/estados-unidos.png";

const MobileNav = ({
  mobileMenuClick,
  sections,
  changeLanguage,
  languageChange,
}) => {
  return (
    <div
      id="mobile-nav-container"
      className="fixed w-full h-screen z-50 translate-x-full transition-all bg-white flex flex-col top-0 dark:bg-slate-900"
    >
      <div
        className="text-right text-lg flex justify-end items-center h-20 px-4"
        onClick={mobileMenuClick}
      >
        <FontAwesomeIcon
          icon={faX}
          className="w-8 h-8 p-2 rounded-full dark:text-white dark:hover:bg-gray-700 hover:bg-gray-300 cursor-pointer"
        />
      </div>
      <ul className="grow grid place-content-center text-xl dark:text-white">
        {sections.map((obj) => (
          <MobileNavItem
            key={`${obj.name}-mobile`}
            link={obj.section}
            mobileMenuClick={mobileMenuClick}
          >
            {obj.name}
          </MobileNavItem>
        ))}
        <li>
          <button onClick={changeLanguage} className="block lg:hidden">
            <span className="flex">
              Language
              {languageChange === "english" ? (
                <img src={english} className="ml-1 h-6" />
              ) : (
                <img src={spanish} className="ml-1 h-6" />
              )}
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
