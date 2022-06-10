import React from 'react';
import './Contact.css'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className='container mx-auto py-8 px-4'>
      <div class="mt-10 sm:mt-0 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div className="visible md:hidden">
          <div className="text-start">
            <h1 className='text-4xl text-blue-700 font-serif'>Contact info</h1>
            <p className='py-8 text-slate-700 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum soluta obcaecati itaque dignissimos vero odio culpa incidunt iste reiciendis, esse maxime nostrum illum deserunt fugit accusantium natus, repudiandae veritatis.</p>
            <Link to='' className="bg-blue-600 hover:bg-blue-800 p-2 px-6 text-white text-lg uppercase font-serif rounded-bl-xl rounded-tr-xl">Connect with online</Link>
          </div>
        </div>
        <div class="m-auto bg-slate-300 rounded shadow" id='contactForm'>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5  sm:p-6">
                  <div class="">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="firstName" class="block text-sm font-medium text-gray-700">First name</label>
                      <input id="firstName" name="firstName" type="text" autocomplete="current-firstName" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter fast your name" />

                    </div>

                    <div class="col-span-6 sm:col-span-3 pt-3">
                      <label for="lastName" class="block text-sm font-medium text-gray-700">Last name</label>
                      <input id="lastName" name="lastName" type="text" autocomplete="current-lastName" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your last name" />
                    </div>

                    <div class="col-span-6 sm:col-span-4 pt-3">
                      <label for="emailAddress" class="block text-sm font-medium text-gray-700">Email address</label>
                      <input id="emailAddress" name="emailAddress" type="email" autocomplete="current-emailAddress" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your e-mail" />
                    </div>
                    <div class="col-span-6 sm:col-span-4 pt-3">
                      {/* <label for="textAria" class="block text-sm font-medium text-gray-700"></label> */}
                      <textarea id="textAria" name="textAria" type="text" autocomplete="current-textAria" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="typing here " />
                    </div>
                    {/* 
              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div> */}

                    {/* <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div> */}

                    {/* <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div> */}

                    {/* <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div> */}

                    {/* <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div> */}
                  </div>
                </div>
                <div class="px-4 py-3 text-right sm:px-6">
                  <button type="submit" class="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="" id='contactText'>
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