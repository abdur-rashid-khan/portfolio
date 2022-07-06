import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/blog', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setBlog(data))
  }, [])
  return (
    <section className='pt-20'>
      <div className="container mx-auto px-4">
        <div className="" data-aos="fade-up" data-aos-easing="linear"data-aos-duration="1000">
          <h1 className="text-3xl font-serif font-semibold text-slate-800"> Blog</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-10 gap-8">
          {
            blog.map( (b,index) =><div className="bg-white rounded shadow-2xl" id='cardAnimation' key={index} data-aos="fade-up" data-aos-easing="linear"data-aos-duration="1000">
            <div className="" style={{width:'100%',height:'260px'}}>
              <img className='rounded-t w-full h-full' src={b.img} alt="react photos" />
            </div>
            <div className="p-2">
              <strong className='pb-2 inline-block capitalize'>{b.topic}</strong>
              <h3  className='capitalize text-slate-800 text-sm'>author : {b.author}</h3>
              <h3 className='capitalize text-slate-800  text-sm'>Date : {b.date.split('T')[0]}</h3>
              {b.description.length > 100 ?  <p className='py-2 text-slate-700 text-sm'>{b.description.slice(0,100)} <Link className='underline text-blue-900' to={`/blog/${b._id}`} >see more</Link></p> : <p className='py-2 text-slate-700 text-sm'>{b.description}</p> }
              {/* b.description.slice(0,100) */}
            </div>
          </div>)
          }
        </div>
      </div>
    </section>
  );
};

export default Blog;