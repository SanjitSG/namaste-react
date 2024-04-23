import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        className="absolute w-full h-full object-cover"
        src={
          "https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        }
        alt="netflix-main-bg"
      />
      <form
        action="submit"
        className="absolute p-12 bg-black w-3/12 min-w-96 my-24 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold py-3 text-3xl">{isSignIn ? "Sign In" : "Sign up"}</h1>
        {!isSignIn && (
          <input
            className="px-4 py-3 my-2 rounded-lg w-full bg-black border border-gray-400"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />
        )}
        <input
          className="px-4 py-3 my-2 rounded-lg w-full bg-black border border-gray-400"
          type="text"
          name="email"
          id="email"
          placeholder="Email Id"
        />
        <input
          className="px-4 py-3 my-2 rounded-lg w-full  bg-black border border-gray-400"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button className="bg-red-700 px-4 py-2 my-8 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
        <p
          className="text-xs w-full py-4 cursor-pointer"
          onClick={toggleSignIn}
        >
          {isSignIn ? "New to Netflix? Sign up now." : "Already a user? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
