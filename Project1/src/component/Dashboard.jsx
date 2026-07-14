import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10 xl:px-12">
      {/* Left Side */}
      <div className="w-full flex flex-col items-center text-center gap-6 lg:w-1/2 lg:items-start lg:text-left">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          MY Dashboard Is Very Cool
        </h1>

        <p className="text-base leading-relaxed text-gray-600 sm:text-lg max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Click Me
          </button>

          <button className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100">
            Shopify
          </button>
        </div>
      </div>
      
      


      {/* Right Side */}
      <div className="w-full flex justify-center lg:w-1/2">
        <img
          className="w-full max-w-sm object-contain rounded-xl  sm:max-w-md lg:max-w-lg"
          src="https://wallpapers.com/images/hd/nike-running-shoe-blueand-yellow-4x0twz555435bg1f.png"
          alt="Nike Shoe"
        />
      </div>
    </div>
  );
};

export default Dashboard;