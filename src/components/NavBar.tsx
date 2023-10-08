import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar drop-shadow-lg">
      <Link id="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <ul>
        <Link to="/#">
          <li>Home</li>
        </Link>
        <Link to="/#services">
          <li>Services</li>
        </Link>
        <Link to="/#about">
          <li>About</li>
        </Link>
        <Link to="/#contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
