import React from 'react';
import './Upload.css'

const UploadServices = () => {
  return (
    <div>
      <div id="services-content" className='rounded'>
      <div className="text-center">
      <h1 className="text-2xl font-serif pt-4" >Add Services</h1>
      </div>
        <form>
          <div className="p-4">
        <div>
          <label for="services-header" class="text-slate-600">Services Header</label>
          <input id="services-header" name="services-header" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services Header " />
        </div>
        <div className='py-4'>
          <label for="services-description" class="text-slate-600">Services Description</label>
          <input id="services-description" name="services-description" type="text"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services Description " />
        </div>
        <div className='pb-4'>
          <label for="services-img" class="text-slate-600">Services photos</label>
          <input id="services-img" name="services-img" type="file"  required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services photos " />
        </div>
        </div>
        <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadServices;