import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-300 h-96 relative bg-hero bg-no-repeat bg-cover bg-center">
      <div className="container absolute bottom-6 right-4  mx-auto flex flex-col items-start justify-start p-4 ">
        <h1 className="text-white text-6xl font-medium ">Welcome</h1>
        <p className="text-white text-2xl pl-2">to CapsulesX </p>
      </div>
    </div>
  );
};

export default Banner;
