/* eslint-disable react/prop-types */
const CurriculumButton = ({ languageSet, languageChange }) => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1EWd6OB3_801hZDu5nHf02jYsK03ABnre"
      download="curriculum.pdf"
      className="bg-sky-400 hover:bg-sky-500 py-2 px-4 rounded shadow-xl transition-colors"
    >
      {languageSet[languageChange].home.cvdownload}
    </a>
  );
};

export default CurriculumButton;
