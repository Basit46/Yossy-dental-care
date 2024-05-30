import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="py-[20px] flex justify-between items-center">
      <div className="hidden lg:flex gap-[20px]">
        <Link
          to="services"
          className="text-[20px] font-medium cursor-pointer"
          duration={1000}
          smooth={true}
        >
          Services
        </Link>
        <Link
          to="about"
          className="text-[20px] font-medium cursor-pointer"
          duration={1500}
          smooth={true}
        >
          About
        </Link>
      </div>

      <h1 className="text-[25px] font-bold">
        YOSSY <sup>TM</sup>
      </h1>

      <div></div>

      <a
        className="fixed inline-block z-[100] top-[20px] right-[20px] sm:right-[60px] bg-[#2a3440] text-[#eceef2] px-[20px] py-[8px] rounded-[5px] font-medium text-[18px]"
        href="https://wa.me/2347065575772?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
      >
        BOOK <span className="hidden sm:inline-block">AN APPOINTMENT</span>
      </a>
    </nav>
  );
};

export default Navbar;
