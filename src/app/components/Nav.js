"use client";
import React from "react";
import { useRouter } from "next/navigation";
// const links=["Services","Blog","Students"]
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Users",
    path: "/users",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const router = useRouter();
  const [logggedIn, setLoggedIn] = useState(false);

  // const logginState=JSON.parse(localStorage.getItem('isLoggedIn'))

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setLoggedIn(true);
    // window.location.reload();
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setLoggedIn(false);
    router.push("/");
  };
  return (
    <nav className="bg-gray-800 flex  justify-between items-center h-20 p-4 ">
      <p className="text-yellow-50 ml-4 font-semibold text-2xl mr-auto">
        Eduhub
      </p>
      <ul className="flex gap-6 list-none text-gray-200 font-semibold">
        {links.map((link) => (
          <li key={Math.random(1, 100)}>
            <Link
              href={`./${link.path}`}
              className="p-2 hover:bg-red-500 active:bg-purple-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {!logggedIn ? (
        <button
          onClick={handleLogin}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Login
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Header;
