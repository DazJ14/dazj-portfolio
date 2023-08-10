import Container from "./Container";
import SocialLinks from "./SocialLinks";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <Container>
        <div className="flex flex-row justify-between items-center text-4xl">
          <span className="text-white font-bold">DazJ</span>
          <div className="text-white">
            <SocialLinks
              svg={faLinkedin}
              link="https://www.linkedin.com/in/diego-armando-zamora-jurado-546a6b270/"
            />
            <SocialLinks svg={faGithub} link="https://github.com/DazJ14" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
