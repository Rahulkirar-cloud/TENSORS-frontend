import React from "react";
import { NavLink } from "react-router-dom";

const steps = [
  {
    path: "basicinfo",
    label: "1. Basic Info",
  },
  {
    path: "subjects",
    label: "2. Subjects",
  },
  {
    path: "faculty",
    label: "3. Faculty",
  },
  {
    path: "classroom",
    label: "4. Rooms",
  },
  {
    path: "timeslot",
    label: "5. Time Slots",
  },
  {
    path: "student",
    label: "6. Student",
  },
  {
    path: "review",
    label: "7. Review",
  },
];

const StepNavbar = () => {
  return (
    <div
      className="
        w-full
        bg-white
        border
        border-gray-300
        shadow-lg
        rounded-lg
        my-3
        px-2
        sm:px-3
        md:px-4
        py-2

        overflow-x-auto
        scrollbar-thin

      "
    >
      <div
        className="
          flex
          items-center
          min-w-max
          gap-2
          sm:gap-3
          md:gap-4
        "
      >
        {steps.map((step, index) => (
          <React.Fragment key={step.path}>

            {/* STEP */}
            <NavLink
              to={step.path}
              className={({ isActive }) =>
                `
                flex-shrink-0
                whitespace-nowrap

                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl

                font-bold

                px-2
                py-2

                rounded-lg

                transition-all
                duration-200

                ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-blue-900 hover:text-blue-600 hover:bg-blue-50"
                }

                hover:scale-105
                md:hover:scale-110
                `
              }
            >
              {step.label}
            </NavLink>

            {/* ARROW */}
            {index < steps.length - 1 && (
              <span
                className="
                  flex-shrink-0

                  text-xl
                  sm:text-2xl
                  md:text-3xl

                  font-bold
                  text-blue-900
                "
              >
                →
              </span>
            )}

          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepNavbar;