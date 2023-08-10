import "./App.css";
import NavContainer from "./components/NavContainer";
import Layout from "./components/Layout";
import { useState } from "react";
import StackList from "./StackList";
import Projects from "./Projects";
import Sections from "./Sections";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import language from "./language";

const App = () => {
  const [list] = useState(StackList);
  const [projects] = useState(Projects);
  const [sections] = useState(Sections);
  const [themeMenu, setThemeMenu] = useState(false);
  const [languageChange, setLanguageChange] = useState("english");
  const [languageSet] = useState(language);

  console.log(languageChange);

  const changeLanguage = () => {
    if (languageChange === "english") {
      return setLanguageChange("spanish");
    }
    setLanguageChange("english");
  };

  const openMenu = () => {
    setThemeMenu(!themeMenu);
  };

  const toggleLightMode = () => {
    document.documentElement.classList.remove("dark");
    openMenu();
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.add("dark");
    openMenu();
  };

  const mobileMenuClick = () => {
    document.getElementById("mobile-nav-container").classList.toggle("open");
  };

  return (
    <>
      <NavContainer
        mobileMenuClick={mobileMenuClick}
        sections={sections}
        toggleLightMode={toggleLightMode}
        toggleDarkMode={toggleDarkMode}
        openMenu={openMenu}
        themeMenu={themeMenu}
        changeLanguage={changeLanguage}
        languageChange={languageChange}
      />
      <MobileNav mobileMenuClick={mobileMenuClick} sections={sections} />
      <Layout
        list={list}
        projects={projects}
        languageSet={languageSet}
        languageChange={languageChange}
      />
      <Footer list={list} />
    </>
  );
};

export default App;
