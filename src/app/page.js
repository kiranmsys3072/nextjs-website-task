// pages/index.js
import React from "react";

const Home = ({ data }) => {
  return (
    <div
      className="relative h-screen bg-cover "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content in the Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-4">
          This Website is regarding the educational site.
        </p>

        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

//https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600

//https://images.pexels.com/photos/1906440/pexels-photo-1906440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1