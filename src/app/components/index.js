"use client";
import React from "react";
import { useFormik } from "formik";
import { basicSChema } from "../schemas";

const PageForm = () => {
  const onSubmitFunction = async (values) => {
    // formikBag.preventDefault();
    console.log("Form submitted successfully!", values);
    // // Retrieve existing data from local storage or initialize an empty array
    const existingFormData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log("formData", existingFormData);
    // // Push current form data to the array

    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    existingFormData.push(values);

    // // Update local storage with the new array
    localStorage.setItem("formData", JSON.stringify(existingFormData));

    alert("Form submitted successfully");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      number: "",
      password: "",
      confirmpassword: "",
      country: "",
      pincode: "",
    },
    validationSchema: basicSChema,
    onSubmit: onSubmitFunction,
  });

  return (
    <div className=" flex justify-center items-center h-screen bg-grey-200">
      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className="bg-grey-700"
      >
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.email && formik.touched.email
                ? "border-2 border-red-500 p-2 rounded-md  focus:border-grey-500"
                : "border-2 border-green-500 p-2 rounded-md  focus:border-grey-500"
            }
          />
        </div>

        {formik.errors.email && formik.touched.email && (
          <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
        )}

        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="number"
          >
            Number
          </label>
          <input
            id="number"
            type="number"
            placeholder="Enter your phone number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.email && formik.touched.email
                ? "border-2 border-red-500 p-2 rounded-md  focus:border-grey-500"
                : "border-2 border-green-500 p-2 rounded-md  focus:border-grey-500"
            }
          />
        </div>
        {formik.errors.number && formik.touched.number && (
          <p className="text-red-500 text-xs italic">{formik.errors.number}</p>
        )}

        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.password && formik.touched.password
                ? "border-2 border-red-500 p-2 rounded-md  focus:border-grey-500"
                : "border-2 border-green-500 p-2 rounded-md  focus:border-grey-500"
            }
          />
        </div>

        {formik.errors.password && formik.touched.password && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.password}
          </p>
        )}

        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            confirm Password
          </label>
          <input
            id="confirmpassword"
            type="password"
            placeholder="Enter your confirmpassword"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.confirmpassword && formik.touched.confirmpassword
                ? "border-2 border-red-500 p-2 rounded-md  focus:border-grey-500"
                : "border-2 border-green-500 p-2 rounded-md  focus:border-grey-500"
            }
          />
        </div>
        {formik.errors.confirmpassword && formik.touched.confirmpassword && (
          <p className="text-red-500 text-xs italic">{formik.errors.pincode}</p>
        )}

        <label htmlFor="country">country</label>
        <select
          name="country"
          id="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="india">india</option>
          <option value="usa">usa</option>
          <option value="srilanka">srilanka</option>
          <option value="china">china</option>
        </select>
        {formik.errors.country && formik.touched.country && (
          <p className="text-red-500 text-xs italic">{formik.errors.country}</p>
        )}

        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pincode"
          >
            pincode
          </label>
          <input
            id="pincode"
            type="number"
            placeholder="Enter your pincode"
            value={formik.values.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.pincode && formik.touched.pincode
                ? "border-2 border-red-500 p-2 rounded-md  focus:border-grey-500"
                : "border-2 border-green-500 p-2 rounded-md  focus:border-grey-500"
            }
          />
        </div>

        {formik.errors.pincode && formik.touched.pincode && (
          <p className="text-red-500 text-xs italic">{formik.errors.pincode}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PageForm;
