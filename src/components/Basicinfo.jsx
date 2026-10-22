import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Basicinfo = () => {

  const [formData, setFormData] = useState({
    timetable_name: "",
    academic_year: "",
    semester: "",
    department: "",
    class_section: ""
  });

  const [loading, setLoading] = useState(false);

  // Input change handle
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/basic-info/",
        formData
      );

      console.log("API Response:", response.data);

      alert("Basic information saved successfully!");

    } catch (error) {
      console.error("API Error:", error);

      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container mx-auto my-4 p-6 rounded-2xl shadow-2xl
                 bg-linear-to-br from-blue-50 via-white to-indigo-100"
    >

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900">
          Basic Information
        </h1>

        <p className="text-xl text-gray-500 mt-1">
          Enter the basic details of your timetable.
        </p>
      </div>


      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-5xl"
      >

        {/* Timetable Name */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Timetable Name
          </label>

          <input
            type="text"
            name="timetable_name"
            value={formData.timetable_name}
            onChange={handleChange}
            placeholder="Enter timetable name"
            className="w-full border border-gray-300 rounded-lg p-3
                       bg-white outline-blue-800"
          />
        </div>


        {/* Academic Year */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Academic Year
          </label>

          <select
            name="academic_year"
            value={formData.academic_year}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"
          >
            <option value="">Select Academic Year</option>
            <option value="2024-25">2024 - 2025</option>
            <option value="2025-26">2025 - 2026</option>
            <option value="2026-27">2026 - 2027</option>
          </select>
        </div>


        {/* Semester */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Semester
          </label>

          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"
          >
            <option value="">Select Semester</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>


        {/* Department */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Department
          </label>

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"
          >
            <option value="">Select Department</option>

            <option value="computer-science">
              Computer Science
            </option>

            <option value="information-technology">
              Information Technology
            </option>

            <option value="mechanical">
              Mechanical
            </option>
          </select>
        </div>


        {/* Class / Section */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-blue-900 mb-2">
            Class / Section
          </label>

          <input
            type="text"
            name="class_section"
            value={formData.class_section}
            onChange={handleChange}
            placeholder="Enter class / section"
            className="w-full border border-gray-300 rounded-lg p-3
                       outline-blue-800 bg-white"
          />
        </div>

      </form>


      {/* BUTTONS */}
      <div className="mt-10 border-t border-gray-200 pt-6 flex justify-between">

        {/* Previous */}
        <button
          type="button"
          className="px-6 py-3 rounded-lg border border-gray-300
                     text-gray-400 bg-gray-100 cursor-not-allowed"
        >
          ← Previous
        </button>


        {/* Next */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="px-8 py-3 rounded-lg
                     bg-blue-900 text-white font-semibold
                     hover:bg-blue-700
                     transition duration-200 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Next →"}
        </button>

      </div>

    </div>
  );
};

export default Basicinfo;