import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-300 h-64 md:h-96 lg:h-128 relative bg-hero bg-no-repeat bg-cover bg-center">
    <div className="container absolute bottom-0 right-0  mx-auto flex flex-col items-start justify-start sm:flex-row sm:items-center p-4 ">
      <div className="sm:w-1/2">
      <h1 className="text-white text-6xl font-medium ">Welcome</h1>
      <p className="text-white text-2xl pl-2">to CapsulesX </p>
      </div>
    </div>
  </div>
  );
};

export default Banner;
