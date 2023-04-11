import React from "react";
import { socialMedia } from "../constans";

const Footer = () => {
  return (
    <section className="relative top-5  pt-[100px]" id="contact">
      <div className="flex flex-wrap items-center border-t-2 p-5">
        <div className="flex flex-1 flex-wrap  gap-5">
          {socialMedia.map((sosmed) => (
            <div key={sosmed.id}>
              <a href={sosmed.link} target="_blank">
                <img
                  src={sosmed.icon}
                  alt=""
                  className="w-[40px] rounded-md dark:bg-white dark:p-0.5 dark:hover:bg-sky-500"
                />
              </a>
            </div>
          ))}
        </div>
        <div>
          <h1 className="pt-4 font-semibold dark:text-white  md:pt-0">
            Copyright © 2023 YNZDEV | All Rights Reserved
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
