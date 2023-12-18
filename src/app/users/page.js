"use client";
import React, { useState } from "react";

const Page = () => {
  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [existingFormData, setExistingFormData] = useState(
    JSON.parse(localStorage.getItem("formData")) || []
  );

  const handleLogin = () => {
    // Your login logic goes here
    // For example, setting isLoggedIn to true and updating user data
    setLoggedIn(true);
    setExistingFormData(/* Update with the actual user data */);
    // After successful login, trigger a page reload
    window.location.reload();
  };
  console.log("djhgdjhdghd");
  return (
    <div>
      {isLoggedIn ? (
        existingFormData.map((user) => (
          <div className="bg-gray-200 p-4 mb-4" key={user.email}>
            <h1 className="text-xl font-bold mb-2">{user.email}</h1>
            <h2 className="text-xl font-bold mb-2">{user.age}</h2>
            <h2 className="text-xl font-bold mb-2">{user.country}</h2>
            <h2 className="text-xl font-bold mb-2">{user.pincode}</h2>
            <br />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Oops!You are logged off.
            </h2>
            <p className="text-gray-600 mb-8">
              Please Login and try again later.
            </p>
            <a
              href="/" // Replace with the actual login route
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Go to Home
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
