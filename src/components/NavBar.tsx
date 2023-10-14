import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import MenuIcon from "./icons/MenuIcon";
import Logo from "../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(true);

  const list = (
    <>
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
    </>
  );

  return (
    <>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <ul
          className="list-none px-0 pt-4 justify-between flex flex-col items-center gap-y-8 text-xl"
          onClick={() => {
            setOpen(false);
          }}
        >
          {list}
        </ul>
      </Drawer>
      <nav className="navbar drop-shadow-lg">
        <Link className="ml-10 md:ml-40" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="hidden list-none mr-40 p-0 justify-between  md:flex">
          {list}
        </ul>
        <MenuIcon
          className="md:hidden mr-10 cursor-pointer"
          style={{ fontSize: "2rem" }}
          onClick={() => {
            setOpen(true);
          }}
        />
      </nav>
    </>
  );
};

export default NavBar;
