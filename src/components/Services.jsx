import React from "react";
import vid from "../assets/vid.gif";
import mirror from "../assets/mirror.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import tools from "../assets/tools.webp";
import img4 from "../assets/img4.png";

const Services = () => {
  return (
    <section id="services" className="mt-[100px]">
      <h1 className="text-[3rem] md:text-[6rem] font-bold italic text-end">
        Services
      </h1>

      <div className="mt-[20px] sm:mt-[50px] flex flex-col gap-[30px]">
        <div className="service">
          <h2>
            Teeeth <br /> Cleaning
          </h2>

          <div>
            <img src={vid} alt="graphic" />
          </div>

          <img
            className="right-0 bottom-[-50px] md:bottom-0"
            src={img4}
            alt="mirror"
          />
        </div>

        <div className="service">
          <h2>
            Scaling <br /> & Polishing
          </h2>

          <div>
            <img src={vid} alt="graphic" />
          </div>

          <img
            className="right-0 bottom-[-50px] md:bottom-0"
            src={tools}
            alt="mirror"
          />
        </div>

        <div className="service">
          <h2>
            Gum <br /> Treatment
          </h2>

          <div>
            <img src={vid} alt="graphic" />
          </div>

          <img
            className="right-[20px] bottom-[-50px] md:bottom-0"
            src={img2}
            alt="mirror"
          />
        </div>

        <div className="service">
          <h2>
            Orah Health <br /> Education
          </h2>

          <div>
            <img src={vid} alt="graphic" />
          </div>

          <img
            className="right-0 bottom-[-100px] md:bottom-0"
            src={img3}
            alt="mirror"
          />
        </div>

        <div className="service">
          <h2>
            Dental <br /> Medical Outreach
          </h2>

          <div>
            <img src={vid} alt="graphic" />
          </div>

          <img
            className="right-0 bottom-[-65px] md:bottom-0"
            src={mirror}
            alt="mirror"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
