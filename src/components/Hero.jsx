import React, { useEffect } from "react";
import Button from "./Button";
import Profile from "../assets/profiilehero.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="mt-4 flex  flex-col pt-8 md:flex-row md:items-center lg:pt-[100px]"
      id="home"
    >
      {/* <Slide direction="left"> */}
      <div
        className=" flex flex-col "
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h1 className="font-inter text-[42px] font-black dark:text-white lg:relative lg:z-10 lg:text-[64px] 2xl:text-[72px]">
          Muhammad Sofyan
        </h1>
        <h1 className=" from-[#4CA5FF] via-purple-500 to-[#B474F8] font-inter  text-[42px] font-black text-black dark:bg-gradient-to-r dark:bg-clip-text dark:text-transparent lg:relative lg:z-10 lg:text-[64px] 2xl:text-[72px]">
          Front End Web Developer
        </h1>
        <p className="max-w-[545px] text-subheading dark:text-[#D9D9D9] lg:relative lg:z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptatum totam illum iure itaque autem animi eum enim architecto
          quas ullam, excepturi placeat tempore atque dolores nam fuga eos
          delectus.
        </p>
        <Button />
      </div>
      {/* </Slide> */}

      {/* <Slide direction="right"> */}
      <div
        className="static lg:absolute lg:right-0 lg:z-0 2xl:static"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div className="max-h-[450px] max-w-[710px] ">
          <img src={Profile} alt="" className="object-contain pt-10 md:pt-0" />
        </div>
      </div>
      {/* </Slide> */}
    </section>
  );
};

export default Hero;
