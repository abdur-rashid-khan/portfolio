import React from 'react';
import CountUp from 'react-countup';

const SummaryTotalProjects = () => {
  return (
    <section className='container mx-auto px-2 py-8'>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center justify-items-center">
      <div className="text-center bg-white w-full h-auto border-r py-20 rounded shadow-2xl border" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" >
      <CountUp
      
      className='text-3xl font-serif font-semibold'
        start={0}
        end={40}
        duration={5}
        suffix="+"
        separator=" "
      />
      <h1 className='capitalize text-xl font-serif '>Complete Project</h1>
      </div>
      <div className="text-center bg-white w-full h-auto border-r py-20 rounded shadow-2xl border" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1300">
      <CountUp 
      
      className='text-3xl font-serif font-semibold'
        start={0}
        end={130}
        duration={5}
        suffix="+"
        separator=" "
      />
      <h1 className='capitalize text-xl font-serif '>Total Review</h1>
      </div>
      <div className="text-center bg-white w-full h-auto border-r py-20 rounded shadow-2xl border" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1500">
      <CountUp 
      
      className='text-3xl font-serif font-semibold'
        start={0}
        end={20}
        duration={5}
        suffix="+"
        separator=" "
      />
      <h1 className='capitalize text-xl font-serif '>Pending Project</h1>
      </div>
      <div className="text-center bg-white w-full h-auto border-r py-20 rounded shadow-2xl border" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1800">
      <CountUp 
      
      className='text-3xl font-serif font-semibold'
        start={0}
        end={10}
        duration={5}
        suffix="+"
        separator=" "
      />
      <h1 className='capitalize text-xl font-serif '>team member</h1>
      </div>
      </div>
    </section>
  );
};

export default SummaryTotalProjects;