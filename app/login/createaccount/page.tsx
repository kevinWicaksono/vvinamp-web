"use client";
import React from "react";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import TextField from "@/components/text_field";
import TextButton from "@/components/text_button";
import Alert from "@/components/alert";

export default function Home() {
  //#region STATE
  const [isObscured1, setIsObscured1] = useState(true);
  const [isObscured2, setIsObscured2] = useState(true);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  //#endregion

  return (
    <div className="flex justify-center items-center h-screen bg-amber-200">
      <div className="bg-white p-8 rounded-xl shadow-md w-md w-max mx-auto max-w-md md:max-w-2xl overflow-hidden">
        <h2 className="text-black text-xl font-bold">Create new account</h2>
        <hr className="mt-1 mb-3" />
        <div className="mt-2 flex justify-between items-center">
          <div>
            <label
              htmlFor="firstname"
              className="text-base text-gray-600 text-sm block mb-1"
            >
              First name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="John"
              className="placeholder-gray-200 border border-gray-200 text-sm text-base text-black w-full px-2 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 hover:border-amber-500 focus:ring-amber-500"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="ml-4">
            <label
              htmlFor="lastname"
              className="text-base text-gray-600 text-sm block mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Doe"
              className="placeholder-gray-200 border border-gray-200 text-sm text-base text-black w-full px-2 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 hover:border-amber-500 focus:ring-amber-500"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <TextField
          id="username"
          label="Username"
          placeholder="enter your username"
          onchange={(e) => setUsername(e.target.value)}
        ></TextField>
        <TextField
          id="email"
          type="email"
          label="Email"
          placeholder="johndoe@email.com"
          onchange={(e) => setEmail(e.target.value)}
        ></TextField>
        <div className="mt-2">
          <label
            htmlFor="password"
            className="text-base text-gray-600 text-sm block mb-1"
          >
            Password
          </label>
          <div className="flex justify-between items-center">
            <input
              type={isObscured1 ? "password" : "text"}
              id="password"
              placeholder="enter a strong password"
              className="placeholder-gray-200 border border-gray-200 text-sm text-base text-black w-full px-2 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 hover:border-amber-500 focus:ring-amber-500"
              onChange={(e) => {
                setPassword(e.target.value);
                setShowAlert(false);
              }}
            />
            <button
              type="button"
              onClick={() => setIsObscured1(!isObscured1)}
              className="px-2 text-base text-sm text-blue-500 hover:text-blue-700 hover:underline focus:outline-none cursor-pointer"
            >
              {isObscured1 ? (
                <EyeSlashIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
              ) : (
                <EyeIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
              )}
            </button>
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="repeatpassword"
            className="text-base text-gray-600 text-sm block mb-1"
          >
            Password
          </label>
          <div className="flex justify-between items-center">
            <input
              type={isObscured2 ? "password" : "text"}
              id="repeatpassword"
              placeholder="repeat your password"
              className="placeholder-gray-200 border border-gray-200 text-sm text-base text-black w-full px-2 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 hover:border-amber-500 focus:ring-amber-500"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setShowAlert(false);
              }}
            />
            <button
              type="button"
              onClick={() => setIsObscured2(!isObscured2)}
              className="px-2 text-base text-sm text-blue-500 hover:text-blue-700 hover:underline focus:outline-none cursor-pointer"
            >
              {isObscured2 ? (
                <EyeSlashIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
              ) : (
                <EyeIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
              )}
            </button>
          </div>
        </div>
        {showAlert && <Alert message="password not match" type="error"></Alert>}
        <TextButton
          label="Create Account"
          onclick={() => {
            if (password !== confirmPassword) {
              setShowAlert(true);
              return;
            }

            console.log("Login clicked");
            console.log("Name:", firstname + " " + lastname);
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Password:", password);
            console.log("Confirm Password:", confirmPassword);
          }}
        ></TextButton>
      </div>
    </div>
  );
}
