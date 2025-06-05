"use client";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [isObscured, setIsObscured] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-amber-200">
      <div className="bg-white p-8 rounded-md shadow-lg w-md">
        <h2 className="text-black text-xl font-bold">VVinamp</h2>
        <h4 className="text-black text-sm">Please sign in to continue</h4>
        <hr className="mt-1 mb-3" />
        <div className="mt-2">
          <label
            htmlFor="username"
            className="text-base text-black text-sm block mb-1"
          >
            username
          </label>
          <input
            type="text"
            id="username"
            placeholder="enter your username"
            className="border border-gray-200 text-sm text-base text-black w-full px-2 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 hover:border-amber-500 focus:ring-amber-500"
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="password"
            className="text-base text-black text-sm block mb-1"
          >
            password
          </label>
          <div className="flex justify-between items-center">
            <input
              type={isObscured ? "password" : "text"}
              id="password"
              placeholder="enter your password"
              className="border border-gray-200 text-sm text-base text-black w-full px-2 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 hover:border-amber-500 focus:ring-amber-500"
            />
            <button
              type="button"
              onClick={() => setIsObscured(!isObscured)}
              className="px-2 text-base text-sm text-blue-500 hover:text-blue-700 hover:underline focus:outline-none cursor-pointer"
            >
              {isObscured ? "Show" : "Hide"}
            </button>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div>
            <input type="checkbox" />
            <label className="text-base text-black text-sm ml-1">
              Remember Me
            </label>
          </div>
          <div>
            <a
              href="#"
              className="text-base text-sm text-blue-500 hover:text-blue-700"
            >
              Forgot Password
            </a>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="cursor-pointer border-3 block border-amber-500 bg-amber-500 text-white text-md px-4 py-2 rounded-sm mt-4 w-full hover:bg-white hover:border-amber-500 hover:text-amber-500 focus:outline-none font-semibold"
          >
            Log In
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-black mt-2">
            Dont have an account?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
