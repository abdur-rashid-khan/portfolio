import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddBlog = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const imgbbAPIKey = 'ef8e2adcf82ba9b088feff829df4d6bf';
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const services = {
            topic: data.topic,
            author: data.author,
            description:data.description,
            date: new Date(),
            img: img
          }
          // send services data to database
          fetch('https://stormy-woodland-85419.herokuapp.com/add-blog', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(services)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.acknowledged) {
                Swal.fire(
                  'blog add success',
                  '',
                  'success'
                )
                reset();
              }
            })
          // console.log(services);
        }
      })
  }
  return (
    <div>
      <div id="services-content" className='rounded'>
        <div className="text-center">
          <h1 className="text-2xl font-serif pt-4" >Add Blog</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div>
              <label htmlFor="topic" className="text-slate-600">Topic Name</label>
              <input id="topic" name="topic" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Type "
                {...register("topic", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                }
                )}
              />
              <label className="">
                {errors.topic?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.topic.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="author" className="text-slate-600">Author Name</label>
              <input id="author" name="author" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Author Name "

                {...register("author", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },

                }
                )}
              />
              <label className="">
                {errors.author?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.author.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="description" className="text-slate-600">Description Name</label>
              <textarea id="description" name="description" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Description "
                cols="30" rows="3"
                {...register("description", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },

                }
                )}
              />
              <label className="">
                {errors.description?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
            <div className='pb-4'>
              <label htmlFor="image" className="text-slate-600">Topic photos</label>
              <input id="image" name="image" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },

                }
                )}
              />
              <label className="">
                {errors.image?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;