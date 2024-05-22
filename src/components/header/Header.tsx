import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  return (
    <div className="container mx-auto px-5 py-3 max-w-6xl ">
      <div className="flex justify-between items-center md:py-1">
        <div className="flex gap-4 items-center">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
          <MenuItem
            title="About"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
        </div>
        <div className="flex gap-2 items-center">
          <ThemeIcon />
          <span className=" bg-amber-500 text-xl py-1 ml-3  text-white cursor-pointer rounded-md px-3 hover:bg-amber-500 transition-all">
            IMDB
          </span>
          {/* <span className="hidden text-xl sm:inline font-semibold">Clone</span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
