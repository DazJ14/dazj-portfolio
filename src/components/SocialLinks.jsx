/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialLinks.css";

const SocialLinks = ({ svg, link }) => {
  return (
    <a
      href={link}
      className="text-3xl hover:text-sky-400 ml-3 first-of-type:ml-0 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={svg} />
    </a>
  );
};

export default SocialLinks;
