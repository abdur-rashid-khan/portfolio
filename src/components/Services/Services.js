import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayServices from './DisplayServices';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://stormy-woodland-85419.herokuapp.com/services', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <section className='container mx-auto px-4'>
      <div className="">
        <div className="py-6">
          <h1 className='text-3xl font-serif text-slate-800 font-semibold'>Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 gap-6">
          {
            services.map(s=><DisplayServices services={s} key={s._id}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;