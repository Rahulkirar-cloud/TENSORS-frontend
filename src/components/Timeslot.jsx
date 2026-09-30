import React from 'react'
import { Link } from 'react-router-dom';

const Timeslot = () => {
  return (
    <div
      className="container mx-auto my-4 p-6 rounded-2xl shadow-2xl
                 bg-linear-to-br from-blue-50 via-white to-indigo-100
                 font-['Times_New_Roman']"
    >

      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900">
          Time-Configuration
        </h1>

        <p className="text-xl text-gray-500 mt-1">
          Enter the time details of your timetable.
        </p>
      </div>


      {/* ================= BASIC INFORMATION ================= */}
      <form className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-5xl">

        {/* Start Time */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            College Start Time
          </label>

          <input
            type="text"
            placeholder="Enter start time"
            className="w-full border border-gray-300 rounded-lg p-3
                      bg-white outline-blue-800"

          />
        </div>


        {/* Period Duration */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Period Duration (Minutes)
          </label>

          <input
            type="text"
            placeholder="Enter period duration"
            className="w-full border border-gray-300 rounded-lg p-3
                      bg-white outline-blue-800"

          />

          
        </div>


        {/* Break Duration */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Break Duration (Minutes)
          </label>

          <input
            type="text"
            placeholder="Enter break duration"
            className="w-full border border-gray-300 rounded-lg p-3
                      bg-white outline-blue-800"

          />


          
        </div>


        {/* No.of period*/}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Number of period per day
          </label>

          
          <input
            type="nuber"
            placeholder="Enter no. of periods per day"
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"

          />

          
        </div>


        {/* end time*/ }
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            College End Time
          </label>

          <input
            type="text"
            placeholder="Enter college end time"
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"

          />
        </div>

      </form>






      {/* ================= WORKING DAYS ================= */}
      <div className="mt-10 border-t border-gray-200 pt-7">

        <h2 className="text-2xl font-bold text-blue-900">
          Working Days
        </h2>

        <p className="text-lg text-gray-500 mt-1 mb-6">
          Select the days on which the timetable will be created.
        </p>


        <div className="flex flex-wrap gap-x-10 gap-y-4">

          {/* Monday */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-lg text-blue-900">
              Monday
            </span>
          </label>


          {/* Tuesday */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-lg text-blue-900">
              Tuesday
            </span>
          </label>


          {/* Wednesday */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-lg text-blue-900">
              Wednesday
            </span>
          </label>


          {/* Thursday */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-lg text-blue-900">
              Thursday
            </span>
          </label>


          {/* Friday */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-lg text-blue-900">
              Friday
            </span>
          </label>


          {/* Saturday */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-lg text-blue-900">
              Saturday
            </span>
          </label>

        </div>

      </div>

    
 {/* ================= BUTTONS ================= */ }
  <div className="mt-10 border-t border-gray-200 pt-6 flex justify-between">

    {/* Previous */}
    <button
      type="button"
      className="px-8 py-3 rounded-lg
                     bg-blue-900 text-white font-semibold
                     hover:bg-blue-700
                     transition duration-200"
    > <Link to={"/management/classroom"}>
      ← Previous
      </Link>
    </button>


    {/* Next */}
    <button
      type="button"
      className="px-8 py-3 rounded-lg
                     bg-blue-900 text-white font-semibold
                     hover:bg-blue-700
                     transition duration-200"
    >
      <Link to="/management/student">
        Next →
      </Link>
    </button>

  </div>

</div>
  );
};



export default Timeslot