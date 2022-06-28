import React from 'react';
import './DisplayServices.css'

const DisplayServices = ({ services }) => {
  const sliceDes = services.servicesDescription.slice(0,100)
  return (
    <div className='bg-white p-4 shadow-2xl rounded' id='cardAnimation' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
      <div className="m-auto" style={{width:'120px',height:'auto'}}>
        <img className='max-w-full' src={services.img} alt="services photos" />
      </div>
      <div className="content py-4">
        <h1 className='py-2 text-xl text-slate-800 uppercase'>{services.servicesHeader}</h1>
        <p className='text-sm text-slate-500 capitalize'>{sliceDes.length > 100 ? `${sliceDes} see more`: services.servicesDescription}</p>
      </div>
    </div>
  );
};

export default DisplayServices;