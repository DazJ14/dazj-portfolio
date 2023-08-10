/* eslint-disable react/prop-types */
import Container from "./Container";
import ProjectsList from "./ProjectsList";
import "./PortfolioSection.css";

const PortfolioSection = ({ projects, languageSet, languageChange }) => {
  return (
    <section
      id="projects"
      className="w-full bg-slate-100 relative dark:bg-slate-900"
    >
      <div className="custom-shape-divider-top-1689995938">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill fill-slate-400"
          ></path>
        </svg>
      </div>
      <Container>
        <h2 className="text-5xl sm:text-6xl font-bold uppercase mb-6 dark:text-white text-center lg:text-left">
          {languageSet[languageChange].portfolio.title}
        </h2>
        <p className="mb-8 dark:text-white text-center lg:text-left">
          {languageSet[languageChange].portfolio.description}
        </p>
        <ProjectsList projects={projects} />
      </Container>
    </section>
  );
};

export default PortfolioSection;
