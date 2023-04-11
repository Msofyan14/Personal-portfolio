import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { techStack } from "../constans";

const TechStack = () => {
  return (
    <section className="relative  pt-[100px]">
      <div>
        <h1 className="mb-4 text-[32px] font-semibold dark:text-white">
          Tech Stack
        </h1>
        <div className="">
          <Swiper
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 3,
              },
              1024: {
                // width: 768,
                slidesPerView: 4,
              },
              1440: {
                // width: 768,
                slidesPerView: 5,
              },
            }}
            //   slidesPerView={1}
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper cursor-pointer py-4"
          >
            {techStack.map((stack) => (
              <SwiperSlide key={stack.id}>
                <div className=" rounded-[10px] bg-white p-4 shadow-md dark:bg-dark">
                  <div className="flex items-center gap-5">
                    <img
                      src={stack.img}
                      alt=""
                      className="w-[75px] object-contain"
                    />
                    <h1 className="text-2xl font-semibold dark:text-white">
                      {stack.title}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
