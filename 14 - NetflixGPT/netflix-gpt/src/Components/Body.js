import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../utils/userSlice";

import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
