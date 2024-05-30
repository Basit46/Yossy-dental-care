import React from "react";
import hero from "../assets/hero1.jpg";

const Hero = () => {
  return (
    <div>
      <h1 className="text-[5.5rem] md:text-[6rem] xl:text-[6.5rem] leading-[1.1] font-bold text-center">
        Your Smile, Our Passion
      </h1>
      <div className="relative bg-[tomato] w-full h-[70vh] sm:h-[90vh] rounded-b-[50px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={hero}
          alt="people smiling"
        />

        <div className="absolute top-0 left-0 h-full w-full flex justify-end md:justify-between items-end p-[10px] md:p-[30px]">
          <p className="hidden md:inline-block w-[90%] md:w-[40%] font-bold text-white">
            Experience top-quality dental care in a comfortable and friendly
            environment. From routine cleanings to advanced procedures, we are
            here to help you achieve and maintain a healthy, beautiful smile.
          </p>

          <a
            className="bg-black border-[gold] hover:animate-none border size-[150px] rounded-full text-white grid place-items-center an animate-bounce"
            href="https://wa.me/2347065575772?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
          >
            <p className="font-medium">BOOK</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
