import React from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pos1 from "../assets/pos1.webp";
import pos2 from "../assets/pos2.webp";

const About = () => {
  return (
    <section id="about" className="mt-[100px] relative w-full ">
      <p className="text-[3rem] vsm:text-[4rem] lg:text-[6rem] xl:text-[6.3rem] text-center font-bold leading-[1.1]">
        At <span className="text-[green]">Yossy</span>{" "}
        <div className="inline-block w-[150px] md:w-[200px] h-[50px] md:h-[70px] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={pic1}
            alt="dentist"
          />
        </div>{" "}
        Dental Services, we provide{" "}
        <span className="text-[green]">exceptional</span> dental{" "}
        <div className="inline-block w-[150px] md:w-[200px] h-[50px] md:h-[70px] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={pic2}
            alt="dentist"
          />
        </div>{" "}
        care with a <span className="text-[green]">personal touch</span>
      </p>

      <img
        className="h-[300px] md:h-[80%] rotate-[35deg] absolute left-[-50px] sm:left-[-20px] top-[-50px] vsm:top-[0%]"
        src={pos1}
        alt="water cleaner"
      />
      <img
        style={{ transform: "rotateY(180deg) rotate(45deg)" }}
        className="h-[300px] md:h-[80%] rotate-[-40deg] absolute right-[-90px] vsm:right-[-60px] top-[-90px] vsm:top-[0%]"
        src={pos2}
        alt="water cleaner"
      />
    </section>
  );
};

export default About;
