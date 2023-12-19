"use client";
import React, { useState, useEffect } from "react";
import NextPagenation from "../components/NextPagenation";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      return setData(res.data), setPerPage(res.data.slice(0, 10));
    });
  }, []);

  const pageHandler = (pageNumber) => {
    setPerPage(data.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Latest Posts
        </h1>
        {data.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perPage.map((post) => (
              <div
                className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"'
                onClick={() => {
                  console.log(post.id);
                }}
              >
                <center>
                  <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 p-2">{post.id}</p>
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => {
                      router.push(`/posts/${post.id}`);
                    }}
                  >
                    ViewMore
                  </button>
                </center>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <NextPagenation data={data} pageHandler={pageHandler} />
      </div>
    </div>
  );
};

export default page;
