import React from "react";
import NavItems from "./NavItems";
import { GetStartedBtn } from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center font-bricolage font-bold text-xl px-4">
      {/* Logo */}
      <h1 className="mt-4">LOGO</h1>

      {/* Navitems */}
      <NavItems />

      {/* Sign in */}
      <GetStartedBtn />
    </nav>
  );
};

export default Navbar;


