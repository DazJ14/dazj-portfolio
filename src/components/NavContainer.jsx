/* eslint-disable react/prop-types */
import Navbar from "./Navbar";

const NavContainer = ({
  mobileMenuClick,
  sections,
  toggleDarkMode,
  toggleLightMode,
  openMenu,
  themeMenu,
  changeLanguage,
  languageChange,
}) => {
  return (
    <header className="fixed w-full flex justify-between items-center bg-white/70 top-0 left-0 px-4 md:px-16 py-4 shadow-lg z-50 backdrop-blur-sm dark:bg-slate-900/70 dark:text-white dark:border-b dark:border-gray-400">
      <a href={sections[0].section} className="text-xl font-bold">
        DazJ<span className="text-sky-400">.</span>dev
      </a>
      <Navbar
        mobileMenuClick={mobileMenuClick}
        sections={sections}
        toggleLightMode={toggleLightMode}
        toggleDarkMode={toggleDarkMode}
        openMenu={openMenu}
        themeMenu={themeMenu}
        changeLanguage={changeLanguage}
        languageChange={languageChange}
      />
    </header>
  );
};

export default NavContainer;
