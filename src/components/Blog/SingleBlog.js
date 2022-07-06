import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleBlog = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState([]);
  // const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://stormy-woodland-85419.herokuapp.com/blog/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setBlog(data))
  }, [id])
  return (
    <section className='pt-20 bg-white'>
      <div className="container mx-auto px-4">
        <div className="">
          {
            blog.map(b =>
              <div className="" key={b._id} >
                <div className="m-auto h-auto sm:h-96 w-full sm:w-[45rem]">
                  <img className='mx-auto rounded shadow-2xl w-full h-full' src={b.img} alt="blog_img" />
                </div>
                <div className="m-auto h-auto sm:h-96 w-full sm:w-[45rem] py-4">
                  {/* <strong className='block text-slate-700'>Upload Date : {b.date.split('T')[0]}</strong> */}
                  <h3 className='py-2 text-2xl capitalize text-slate-800'>{b.topic}</h3>
                  <h1 className='text-slate-600 text-base pb-2'>{b.description}</h1>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;