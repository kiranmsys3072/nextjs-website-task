"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const page = ({ params }) => {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [loading,setLoading]=useState(true)
  const id = params.id;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setLoading(false)
        return setPost(res.data);
      });
  }, []);

  return (
    <div class="container mx-auto my-8 p-9 bg-white rounded-lg shadow-md mt-5 mb-80">

      {loading? (  <h1>loading...</h1>):( <div> 
        <h1 class="text-3xl font-bold mb-4 text-gray-800 text-center">
        {post.title}
      </h1>
      <div class="prose">
        <p>{post.body}</p>
        <center>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
              router.push("/posts");
            }}
          >
            Back
          </button>
        </center>
      </div>
      </div>)}

     

     



    </div>
  );
};

export default page;
