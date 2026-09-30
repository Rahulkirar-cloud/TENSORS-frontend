import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import StepNavbar from "../components/StepNavbar.jsx";
import TopNavbar from "../components/TopNavbar.jsx";

const Management = () => {
  // Sidebar desktop par initially open rahega
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { path: "basicinfo", label: "Basic Information" },
    { path: "subjects", label: "Subjects" },
    { path: "faculty", label: "Faculty" },
    { path: "classroom", label: "Rooms" },
    { path: "timeslot", label: "Time Slots" },
    { path: "student", label: "Student" },
    { path: "review", label: "Review" },
  ];

  return (
    <div className="h-screen overflow-hidden bg-gray-50">

      {/* ================================================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ================================================= */}

      {isSidebarOpen && (
        <aside
          className="
            hidden
            lg:flex
            flex-col

            fixed
            left-0
            top-0

            w-72
            h-screen

            bg-linear-to-b
            from-gray-950
            via-gray-900
            to-blue-950

            text-white

            px-5
            py-7

            shadow-2xl

            z-40

            transition-all
            duration-300
          "
        >

          {/* ================= SIDEBAR HEADER ================= */}

          <div className="flex items-start justify-between mb-8">

            <div>
              <h2 className="text-2xl xl:text-3xl font-bold">
                Timetable
              </h2>

              <h2 className="text-2xl xl:text-3xl font-bold text-blue-400">
                Management
              </h2>

              <div className="w-16 h-1 bg-blue-500 rounded-full mt-4" />
            </div>


            {/* DESKTOP CLOSE BUTTON */}

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="
                w-10
                h-10
                rounded-lg

                flex
                items-center
                justify-center

                text-xl
                text-gray-300

                hover:bg-white/10
                hover:text-white

                transition
              "
              aria-label="Close sidebar"
            >
              ✕
            </button>

          </div>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav className="flex flex-col gap-2 text-base xl:text-lg">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </nav>

        </aside>
      )}


      {/* ================================================= */}
      {/* MOBILE OVERLAY */}
      {/* ================================================= */}

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="
            fixed
            inset-0

            bg-black/50

            z-40

            lg:hidden
          "
        />
      )}


      {/* ================================================= */}
      {/* MOBILE SIDEBAR */}
      {/* ================================================= */}

      <aside
        className={`
          fixed
          top-0
          left-0

          z-50

          w-72
          max-w-[85vw]
          h-screen

          bg-linear-to-b
          from-gray-950
          via-gray-900
          to-blue-950

          text-white

          px-5
          py-7

          shadow-2xl

          transition-transform
          duration-300
          ease-in-out

          lg:hidden

          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* ================= MOBILE SIDEBAR HEADER ================= */}

        <div className="flex justify-between items-start mb-8">

          <div>

            <h2 className="text-2xl font-bold">
              Timetable
            </h2>

            <h2 className="text-2xl font-bold text-blue-400">
              Management
            </h2>

            <div className="w-16 h-1 bg-blue-500 rounded-full mt-4" />

          </div>


          {/* MOBILE CLOSE BUTTON */}

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="
              w-10
              h-10
              rounded-lg

              flex
              items-center
              justify-center

              text-2xl
              text-gray-300

              hover:bg-white/10
              hover:text-white

              transition
            "
            aria-label="Close sidebar"
          >
            ✕
          </button>

        </div>


        {/* ================= MOBILE NAVIGATION ================= */}

        <nav className="flex flex-col gap-2">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

        </nav>

      </aside>


      {/* ================================================= */}
      {/* MAIN AREA */}
      {/* ================================================= */}

      <div
        className={`
          h-screen

          transition-all
          duration-300

          ${
            isSidebarOpen
              ? "lg:ml-72"
              : "lg:ml-0"
          }
        `}
      >

        {/* ================================================= */}
        {/* TOP NAVBAR */}
        {/* ================================================= */}

        <TopNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />


        {/* ================================================= */}
        {/* SCROLLABLE CONTENT */}
        {/* ================================================= */}

        <main
          className="
            h-[calc(100vh-4rem)]

            overflow-y-auto
            overflow-x-hidden

            p-3
            sm:p-4
            md:p-6
            lg:p-8
          "
        >

          {/* ================= PAGE HEADER ================= */}

          <header className="mb-3">

            <h1
              className="
                text-xl
                sm:text-2xl
                md:text-3xl

                text-blue-900
                font-bold
              "
            >
              Manage Timetable
            </h1>

            <p
              className="
                text-sm
                sm:text-base

                text-gray-500
                mt-1
              "
            >
              Configure all the details to generate your perfect timetable.
            </p>

          </header>


          {/* ================= STEP NAVBAR ================= */}

          <StepNavbar />


          {/* ================= PAGE CONTENT ================= */}

          <div className="w-full min-w-0">
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
};

export default Management;