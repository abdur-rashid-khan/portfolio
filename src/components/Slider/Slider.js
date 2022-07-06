import React, { useEffect, useRef, useState } from "react";
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
import SingleReview from "./SingleReview";

const Slider = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('https://stormy-woodland-85419.herokuapp.com/review', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])
  return (
    <section className="container mx-auto px-2 py-16" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
      <div className="text-3xl font-serif text-slate-800 font-semibold pb-8" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" >Testimonial</div>
        <div className="flex w-full">
        {
          review.map((review, index) => <SingleReview review={review} key={index}></SingleReview>)
        }
        </div>
    </section>
  );
};

export default Slider;