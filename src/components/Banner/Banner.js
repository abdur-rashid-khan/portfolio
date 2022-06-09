import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto px-2 ">

        <div class="hero h-1/2 bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="https://i.ibb.co/9rj1Sk7/MG-5424.jpg" class="max-w-sm rounded-full shadow-2xl" alt='banner'/>
            <div>
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;