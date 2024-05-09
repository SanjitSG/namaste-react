import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
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
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
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
        className="absolute h-screen object-cover md:w-full"
        src={BG_URL}
        alt="netflix-main-bg"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 md:w-[24%]  md:h-7/12 absolute p-10 my-36  bg-black  mx-auto right-0 left-0 text-white rounded-lg opacity-80 shadow-lg"
      >
        <h1 className="font-bold py-3 text-3xl">{isSignIn ? "Sign In" : "Sign up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            className="px-5 py-3 my-2 rounded-lg w-full bg-black border border-gray-400"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="px-5 py-3 my-2 rounded-lg w-full bg-black border border-gray-400"
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="px-5 py-3 my-2 rounded-lg w-full  bg-black border border-gray-400"
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
          {isSignIn ? "New to NetflixGemini? Sign up now." : "Already a user? Sign in now."}
        </p>
        <div className="text-xs text-slate-300">
          <p>Test user: user@test.com</p>
          <p>Password: Test@123</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
