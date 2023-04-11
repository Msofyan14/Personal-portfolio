import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "../constans";
import { Fade, Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <section className="relative top-12   lg:pt-[100px]" id="projects">
      <h1 className="mb-4 text-[32px] font-semibold dark:text-white">
        Projects
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
          }}
          //   slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects.map((card, index) => (
            <SwiperSlide key={card.id}>
              <Fade delay={100 * index}>
                <div className="card overflow-hidden">
                  <img src={card.img} alt="" className="w-full" />
                  <div className="p-4">
                    <h1 className="text-[20px] font-semibold dark:text-white">
                      {card.title}
                    </h1>
                    <p className="pt-1 text-subheading dark:text-[#D9D9D9]">
                      {card.descriptions}
                    </p>
                  </div>
                </div>
              </Fade>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
