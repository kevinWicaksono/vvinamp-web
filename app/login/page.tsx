"use client";
import React from "react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import TextField from "@/components/text_field";
import TextButton from "@/components/text_button";

export default function Home() {
  //#region STATE
  const [isObscured, setIsObscured] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //#endregion

  return (
    <div className="flex justify-center items-center h-screen bg-amber-200">
      <div className="bg-white p-8 rounded-xl shadow-md w-md w-max mx-auto max-w-md md:max-w-2xl overflow-hidden">
        <h2 className="text-black text-xl font-bold">VVinamp</h2>
        <h4 className="text-black text-sm">Please sign in to continue</h4>
        <hr className="mt-1 mb-3" />
        <TextField
          id="username"
          label="Username"
          placeholder="enter your username"
          onchange={(e) => setUsername(e.target.value)}
        ></TextField>
        <div className="mt-2">
          <label
            htmlFor="password"
            className="text-base text-gray-600 text-sm block mb-1"
          >
            password
          </label>
          <div className="flex justify-between items-center">
            <input
              type={isObscured ? "password" : "text"}
              id="password"
              placeholder="enter your password"
              className="placeholder-gray-200 border border-gray-200 text-sm text-base text-black w-full px-2 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 hover:border-amber-500 focus:ring-amber-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setIsObscured(!isObscured)}
              className="px-2 text-base text-sm text-blue-500 hover:text-blue-700 hover:underline focus:outline-none cursor-pointer"
            >
              {isObscured ? (
                <EyeSlashIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
              ) : (
                <EyeIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
              )}
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
        <TextButton
          label="Log In"
          onclick={() => {
            console.log("Login clicked");
            console.log("Username:", username);
            console.log("Password:", password);
          }}
        ></TextButton>
        <div className="text-center">
          <p className="text-sm text-black mt-2">
            Dont have an account?{" "}
            <Link
              href="/login/createaccount"
              className="text-blue-500 hover:text-blue-700"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
