import React from "react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="navbar z-20 text-black backdrop-blur-md backdrop-opacity-100 bg-gray-400 bg-opacity-60 fixed ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/Community">Community</Link>
            </li>
            <li tabIndex={0} className="shadow bg-base-100">
              <Link href="/Game" className="justify-between ">
                Game
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li className="shadow bg-base-100">
                  <Link href="/Beginner">Beginner</Link>
                </li>
                <li className="shadow bg-base-100">
                  <Link href="/Game">Play</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Paper">White Paper</Link>
            </li>
            <li>
              <Link href="#footer">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost  md:ml-24 normal-case text-xl">
          {/* Navbar logo */}
          <img
            className="w-10 h-8 md:w-14 md:h-10  mx-auto "
            src="/imgs/Black on Transparent.png
            "
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="Community">Community</Link>
          </li>
          <li tabIndex={0}>
            <Link href="/Game">
              Game
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2">
              <li className="z-10 shadow bg-base-100">
                <Link href="Beginner">Beginner</Link>
              </li>
              <li className="z-10 shadow bg-base-100">
                <Link href="/Game">Play</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/Paper">White Paper</Link>
          </li>
          <li>
            <Link href="#footer">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/Time"
          className="btn bg-orange-300 hue-rotate-40 text-cyan-900 "
        >
          <span className="font-bold ">Get started</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
