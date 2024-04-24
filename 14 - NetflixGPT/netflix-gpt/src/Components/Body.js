import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { auth } from "../utils/firebase";

const Body = () => {
  useEffect({}, []);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, displayName, photoURL } = user;
    } else {
      // User is signed out
      // ...
    }
  });

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
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default Body;
