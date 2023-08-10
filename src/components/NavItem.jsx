/* eslint-disable react/prop-types */
import "./NavItem.css";

const NavItem = ({ children, link }) => {
  return (
    <li className="navitem relative hidden md:block dark:after:bg-white">
      <a href={link}>{children}</a>
    </li>
  );
};

export default NavItem;
