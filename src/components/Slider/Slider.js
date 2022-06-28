import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <section className="container mx-auto px-2 py-16" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
      <div className="text-3xl font-serif text-slate-800 font-semibold pb-8" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" >Review</div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
          <SwiperSlide className="px-6 py-4 bg-white shadow-2xl rounded cursor-pointer">
            <div className="py-4">
              <h1 className="text-slate-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste non, numquam natus odio aliquam sed sapiente tempore et suscipit.</h1>
            </div>
            <div className="flex items-center">
              <div className="avatar online">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
              </div>
              <div className="pl-4">
                <h1 className="text-slate-800 font-semibold font-serif capitalize">Summit</h1>
                <h2 className="text-slate-800 font-serif  capitalize">Dhaka , Bangladesh</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-6 py-4 bg-white shadow-2xl rounded cursor-pointer">
            <div className="py-4">
              <h1 className="text-slate-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste non, numquam natus odio aliquam sed sapiente tempore et suscipit.</h1>
            </div>
            <div className="flex items-center">
              <div className="avatar online">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
              </div>
              <div className="pl-4">
                <h1 className="text-slate-800 font-semibold font-serif capitalize">Summit</h1>
                <h2 className="text-slate-800 font-serif  capitalize">Dhaka , Bangladesh</h2>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;