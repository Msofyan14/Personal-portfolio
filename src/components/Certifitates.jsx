import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { certificates } from "../constans";
import { Fade, JackInTheBox, Roll, Slide } from "react-awesome-reveal";

const Certifitates = () => {
  return (
    <section className="relative top-5  pt-[100px]" id="certificates">
      <div>
        <h1 className="mb-4 text-[32px] font-semibold dark:text-white">
          Certificates
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
            {certificates.map((certificate, index) => (
              <SwiperSlide key={certificate.id}>
                <JackInTheBox>
                  <div className="card  overflow-hidden">
                    <a href={certificate.link} target="_blank">
                      <img
                        src={certificate.img}
                        alt=""
                        className="w-full object-contain"
                      />
                    </a>
                  </div>
                </JackInTheBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certifitates;
