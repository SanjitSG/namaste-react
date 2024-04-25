import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //sign-up/in login
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        className="absolute w-full "
        src={
          "https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        }
        alt="netflix-main-bg"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 my-36 bg-black w-3/12 min-w-96 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
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
          ref={email}
          className="px-4 py-3 my-2 rounded-lg w-full bg-black border border-gray-400"
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="px-4 py-3 my-2 rounded-lg w-full  bg-black border border-gray-400"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <p className=" my-5 font-bold text-red-600">{errorMessage}</p>
        <button
          className="bg-red-700 px-4 py-2 my-8 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
