import React from "react";
import Button from "./Button";

const Badge = () => {
  return (
    <section className="relative top-5  pt-[100px]">
      <div className="flex flex-col items-center bg-white p-8 dark:bg-dark">
        <h1 className="text-center text-[48px] font-semibold dark:text-white">
          Interested in <br /> working with me ?
        </h1>
        <p className="text-center text-subheading dark:text-[#D9D9D9]">
          I will help you with finding a solution <br /> and solve your problem{" "}
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Badge;
