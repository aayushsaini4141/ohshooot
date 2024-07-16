"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-img bg-banner2 fixed top-0 w-full">
        <div className="fixed top-0 z-10 flex flex-1 justify-between items-center h-20 w-full border-b-2 border-gray-500 px-4 lg:px-20 xl:px-60">
          <div className="text-white font-black text-3xl md:w-full md:text-center lg:text-left lg:w-auto lg:mr-10 xl:mr-0 xl:ml-[-10px]">
            <h2>OhShooot</h2>
          </div>
          <button
            className="text-white lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            className={`hidden lg:flex space-x-4 xl:space-x-12 text-white text-lg font-bold ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link href="/about">
                <h1>About</h1>
              </Link>
            </li>             
            <li>
              <Link href="/services">
                <h1>Services</h1>
              </Link>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed z-20 top-0 left-0 h-full w-full bg-black bg-opacity-75`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 z-20 left-0 h-full w-64 bg-gray-800 transition-transform transform`}
          style={{ top: "0", position: "fixed" }}
        >
          <ul className="flex flex-col text-white p-4 space-y-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link href="/about">
                <h1>About</h1>
              </Link>
            </li>             
            <li>
              <Link href="/services">
                <h1>Services</h1>
              </Link>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
