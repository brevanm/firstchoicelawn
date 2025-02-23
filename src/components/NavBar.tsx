import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Drawer from "./Drawer";
import MenuIcon from "./icons/MenuIcon";
import Logo from "../assets/logo-winter.png";
import "./NavBar.css";
import Button from "./Button";
import { useIsAtTop } from "../utils/hooks";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const isAtTop = useIsAtTop();

  const hoverClass = isAtTop ? "hover:text-white" : "hover:text-fcll-green";

  const list = (
    <>
      <HashLink to="/#">
        <li className={hoverClass}>Home</li>
      </HashLink>
      <HashLink to="/#services">
        <li className={hoverClass}>Services</li>
      </HashLink>
      <HashLink to="/#about">
        <li className={hoverClass}>About</li>
      </HashLink>
      <HashLink to="/#contact">
        <Button highlight>
          <li className="hover:text-white">Contact</li>
        </Button>
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
      <nav
        className={`transition ease-in-out duration-300 navbar drop-shadow-lg fixed w-full z-10 py-2 px-40 ${isAtTop ? "" : "bg-white"
          }`}
      >
        <div className="max-w-screen-xl m-auto flex justify-between items-center">
          <HashLink className="" to="/#">
            <img
              style={{ filter: isAtTop ? "saturate(0) invert(1) brightness(100%)" : undefined }}
              src={Logo}
              alt="logo"
            />
          </HashLink>
          <ul
            className={`transition ease-in-out duration-300 hidden list-none p-0 justify-between items-center gap-8 md:flex ${isAtTop ? "text-white" : ""
              }`}
          >
            {list}
          </ul>
          <MenuIcon
            className={`md:hidden mr-10 cursor-pointer ${isAtTop ? "text-white" : ""
              }`}
            style={{ fontSize: "2rem" }}
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
