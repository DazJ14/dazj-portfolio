/* eslint-disable react/prop-types */
import "./NavItem.css";

const MobileNavItem = ({ children, link, mobileMenuClick }) => {
  return (
    <li
      className="navitem relative block text-2xl font-bold text-center mb-3 last-of-type:mb-0"
      onClick={mobileMenuClick}
    >
      <a href={link}>{children}</a>
    </li>
  );
};

export default MobileNavItem;
