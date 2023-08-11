/* eslint-disable react/prop-types */
import Container from "./Container";
import TechStackList from "./TechStackList";
import SocialLinks from "./SocialLinks";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HomeWaves from "./HomeWaves";
import CurriculumButton from "./CurriculumButton";

const HomeSection = ({ list, languageSet, languageChange }) => {
  return (
    <section
      id="home"
      className="home h-screen pt-[60px] bg-white dark:bg-slate-900 relative w-full flex place-items-center sm:py-0 transition-colors"
    >
      <Container>
        <div className="flex justify-center align-middle mb-16 text-center lg:text-left flex-col-reverse lg:flex-row z-10">
          <div className="lg:w-3/5 w-full mt-8 lg:mt-0">
            <div className="dark:text-white text-center">
              <h1 className="font-bold text-5xl lg:text-6xl mb-7">
                {languageSet[languageChange].home.title}
              </h1>
              <p className="text-lg mb-2">
                <span className="text-sky-400">
                  {languageSet[languageChange].home.descriptionblue}{" "}
                </span>
                {languageSet[languageChange].home.description}
              </p>
              <div className="mb-8">
                <SocialLinks
                  svg={faLinkedin}
                  link="https://www.linkedin.com/in/diego-armando-zamora-jurado-546a6b270/"
                />
                <SocialLinks svg={faGithub} link="https://github.com/DazJ14" />
              </div>
              <CurriculumButton
                languageSet={languageSet}
                languageChange={languageChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 dark:text-white">
          <h2 className="font-bold border-b-2 border-r-0 sm:border-r-2 sm:border-b-0 text-center border-black border-solid sm:pr-4 pr-0 dark:border-white">
            Tech Stack
          </h2>
          <TechStackList list={list} />
        </div>
      </Container>
      <HomeWaves />
    </section>
  );
};

export default HomeSection;
