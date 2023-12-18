import React from "react";
import Link from "next/link";

const NextPagenation = ({ data, pageHandler }) => {
  let pageNumbers = [];

  for (let i = 1; Math.ceil(i < (data.length + 1) / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white-500 ">
      <div className="container mx-auto my-8">
        <ul className="flex justify-center space-x-2"></ul>
        <center>
          {pageNumbers.map((page) => (
            <a
              className="underline text-blue-600 hover:text-green-800 visited:text-purple-600 mr-3 text-lg"
              onClick={() => pageHandler(page)}
            >
              {page}
            </a>
          ))}
        </center>
      </div>
    </div>
  );
};

export default NextPagenation;
