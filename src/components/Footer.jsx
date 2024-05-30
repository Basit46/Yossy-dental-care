import React from "react";
import footer from "../assets/footer.jpg";
import { PiToothFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="mt-[150px] mb-[40px] h-fit xl:h-[600px] flex flex-col xl:flex-row gap-[40px] justify-between">
      <div className="w-full h-[200px] sm:h-auto sm:w-[40%] ">
        <img
          className="w-full h-full object-cover"
          src={footer}
          alt="dentist"
        />
      </div>

      <div className="h-full flex-1 flex flex-col justify-between">
        <h1 className="text-[2rem] md:text-[3.5rem] font-extrabold leading-[1.15]">
          BOOK AN APPOINTMENT TODAY, LET'S TALK ABOUT YOUR DENTAL HEALTH
        </h1>

        <a
          className="bg-black text-white mt-[50px] w-fit px-[20px] py-[10px] flex gap-[40px] items-center font-bold md:text-[2rem]"
          href="https://wa.me/2347065575772?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
        >
          <p>BOOK - APPOINTMENT</p>
          <PiToothFill className="text-[aqua]" />
        </a>

        <p className="mt-[10px] md:text-[1.5rem] font-semibold">
          Call us on:{" "}
          <a className="text-[blue]" href="tel:+2348121205153">
            08121205153
          </a>{" "}
          or{" "}
          <a className="text-[blue]" href="tel:+2347065575772">
            07065575772
          </a>
        </p>

        <p className="mt-[100px] xl:mt-0 block font-bold text-[20px]">
          built by{" "}
          <a
            href="https://wa.me/2347067668093?text=Hello"
            className="text-[tomato] underline"
            target="blank"
          >
            basit.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
