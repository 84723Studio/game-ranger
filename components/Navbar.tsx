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
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-6 text-red-500  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
            />
          </svg> */}
          <img
            className="w-full h-12 ml-20  grayscale "
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
        <Link href="/Time" className="btn glass">
          <span className="font-bold">Get started</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
