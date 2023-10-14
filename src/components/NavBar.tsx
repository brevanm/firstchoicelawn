import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Drawer from "./Drawer";
import MenuIcon from "./icons/MenuIcon";
import Logo from "../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const list = (
    <>
      <HashLink to="/#">
        <li>Home</li>
      </HashLink>
      <HashLink to="/#services">
        <li>Services</li>
      </HashLink>
      <HashLink to="/#about">
        <li>About</li>
      </HashLink>
      <HashLink to="/#contact">
        <li>Contact</li>
      </HashLink>
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
        <HashLink className="ml-10 md:ml-40" to="/#">
          <img src={Logo} alt="logo" />
        </HashLink>
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
