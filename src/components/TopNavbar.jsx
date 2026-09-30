import React from "react";

const TopNavbar = ({ onMenuClick }) => {
  return (
    <header
      className="
        h-16
        sm:h-18
        md:h-20

        w-full

        bg-white
        border-b
        border-gray-200

        flex
        items-center
        justify-between

        px-3
        sm:px-4
        md:px-6

        z-30
        relative

        flex-shrink-0
      "
    >

      {/* ================= LEFT ================= */}

      <div className="flex items-center">

        {/* Sidebar Open Button */}

        <button
          onClick={onMenuClick}
          className="
            w-10
            h-10

            flex
            items-center
            justify-center

            rounded-lg

            text-2xl
            text-gray-600

            hover:bg-blue-50
            hover:text-blue-600

            transition
          "
          aria-label="Open sidebar"
        >
          ☰
        </button>

      </div>


      {/* ================= RIGHT ================= */}

      <div
        className="
          flex
          items-center

          gap-3
          sm:gap-4
          md:gap-6
        "
      >

        {/* ================= NOTIFICATION ================= */}

        <button
          className="
            relative

            w-9
            h-9
            sm:w-10
            sm:h-10

            flex
            items-center
            justify-center

            rounded-full

            text-lg
            sm:text-2xl

            text-gray-600

            hover:bg-gray-100

            transition
          "
        >
          🔔

          <span
            className="
              absolute

              top-1
              right-1

              w-2
              h-2
              sm:w-2.5
              sm:h-2.5

              bg-red-500

              rounded-full

              border-2
              border-white
            "
          />
        </button>


        {/* ================= USER ================= */}

        <div className="flex items-center gap-2 sm:gap-3">

          {/* User Icon */}

          <div
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10

              rounded-full

              bg-blue-100

              flex
              items-center
              justify-center

              text-blue-600

              text-lg
              sm:text-xl
            "
          >
            👤
          </div>


          {/* Admin Text */}

          <span
            className="
              hidden
              sm:block

              font-medium
              text-gray-700
            "
          >
            Admin
          </span>


          {/* Dropdown Arrow */}

          <span
            className="
              hidden
              sm:block

              text-gray-500
            "
          >
            ˅
          </span>

        </div>

      </div>

    </header>
  );
};

export default TopNavbar;