import "./NavBar.css";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar drop-shadow-lg">
      <a id="logo" href="/">
        <img src={Logo} alt="logo" />
      </a>
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#services">
          <li>Services</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
