/* eslint-disable react/prop-types */
import Container from "./Container";
import "./AboutSection.css";

const AboutSection = ({ languageSet, languageChange }) => {
  return (
    <section id="about" className="bg-slate-400 w-full relative">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 h-80 relative ">
            <div className="image w-full h-full object-cover rounded-xl" />
            <span className="py-1 px-2 absolute bg-slate-300 -top-4 left-1/2 -translate-x-1/2 font-bold rounded-md border-8 border-white dark:border-slate-700 uppercase text-5xl w-2/3 text-center">
              {languageSet[languageChange].about.about}
            </span>
          </div>

          <div className="w-full lg:w-1/2 dark:text-white text-center lg:text-left">
            <h3 className="text-4xl font-bold text-black dark:text-slate-200 mb-4">
              {languageSet[languageChange].about.title}
            </h3>
            <p>{languageSet[languageChange].about.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
