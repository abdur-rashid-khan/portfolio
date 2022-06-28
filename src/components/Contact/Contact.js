import React from 'react';
import './Contact.css'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className='container mx-auto py-8 px-4' id='contact'>
      <div className="mt-10 sm:mt-0 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div className="visible md:hidden" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
          <div className="text-start">
            <h1 className='text-4xl text-blue-700 font-serif'>Contact info</h1>
            <p className='py-8 text-slate-700 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum soluta obcaecati itaque dignissimos vero odio culpa incidunt iste reiciendis, esse maxime nostrum illum deserunt fugit accusantium natus, repudiandae veritatis.</p>
            <Link to='' className="bg-blue-600 hover:bg-blue-800 p-2 px-6 text-white text-lg uppercase font-serif rounded-bl-xl rounded-tr-xl">Connect with online</Link>
          </div>
        </div>
        <div className="m-auto bg-slate-300 rounded shadow" id='contactForm' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action='https://formspree.io/f/mvolnlkq' method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5  sm:p-6">
                  <div className="">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                      <input id="firstName" name="firstName" type="text" autoComplete="current-firstName" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter fast your name" />

                    </div>

                    <div className="col-span-6 sm:col-span-3 pt-3">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                      <input id="lastName" name="lastName" type="text" autoComplete="current-lastName" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your last name" />
                    </div>

                    <div className="col-span-6 sm:col-span-4 pt-3">
                      <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email address</label>
                      <input id="emailAddress" name="emailAddress" type="email" autoComplete="current-emailAddress" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your e-mail" />
                    </div>
                    <div className="col-span-6 sm:col-span-4 pt-3">
                      {/* <label htmlFor="textAria" className="block text-sm font-medium text-gray-700"></label> */}
                      <textarea id="textAria" name="textAria" type="text" autoComplete="current-textAria" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="typing here " />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button type="submit" className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="" id='contactText' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
          <div className="text-start">
            <h1 className='text-4xl text-blue-700 font-serif'>Contact info</h1>
            <p className='py-8 text-slate-700 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum soluta obcaecati itaque dignissimos vero odio culpa incidunt iste reiciendis, esse maxime nostrum illum deserunt fugit accusantium natus, repudiandae veritatis.</p>
            <Link to='' className="bg-blue-600 hover:bg-blue-800 p-2 px-6 text-white text-base uppercase font-serif rounded-bl-xl rounded-tr-xl">Connect with online</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;