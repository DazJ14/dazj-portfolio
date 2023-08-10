/* eslint-disable react/prop-types */
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";

const Layout = ({ list, projects, languageSet, languageChange }) => {
  return (
    <main className="w-full h-auto">
      <HomeSection
        list={list}
        languageSet={languageSet}
        languageChange={languageChange}
      />
      <AboutSection languageSet={languageSet} languageChange={languageChange} />
      <PortfolioSection
        projects={projects}
        languageSet={languageSet}
        languageChange={languageChange}
      />
    </main>
  );
};

export default Layout;
