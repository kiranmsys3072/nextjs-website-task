//http://localhost:3000/data.json
"use client";
import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDateFromJson() {
      const data = await fetch("http://localhost:3000/data.json");
      const jsonData = await data.json();
      setData(jsonData);
    }

    getDateFromJson();
  }, []);
  return (
    <div>
      <div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>

              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>

              <th scope="col" className="px-6 py-3">
                Image
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {data.map((post) => {
        return (
          <tbody key={post.id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {post.id}
              </td>
              <td className="px-6 py-4">{post.title}</td>
              <td className="px-6 py-4">{post.courseName}</td>
              <td className="px-6 py-4">{post.description}</td>
              <td className="px-6 py-4">
                <img
                  src={post.imageUrl}
                  className="object-scale-down h-48 w-96"
                />
              </td>
            </tr>
          </tbody>
        );
      })}
    </div>
  );
};

export default page;

