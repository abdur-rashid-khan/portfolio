import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "./Slider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const SingleReview = ({review}) => {
  return (
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        zoom={true}
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
        modules={[Pagination, Navigation, Autoplay,]}
        className="mySwiper"
      >
      <SwiperSlide className="px-6 py-4 bg-white shadow-2xl rounded cursor-pointer mx-auto" id="slider">
        <div className="py-4">
          <h1 className="text-slate-800">{review.review}</h1>
        </div>
        <div className="flex items-center">
          <div className="avatar online">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.images} alt='' />
            </div>
          </div>
          <div className="pl-4">
            <h1 className="text-slate-800 font-semibold font-serif capitalize">{review.userName}</h1>
            <h2 className="text-slate-800 font-serif  capitalize">{review.location}</h2>
          </div>
        </div>
      </SwiperSlide>

      </Swiper>
  );
};

export default SingleReview;