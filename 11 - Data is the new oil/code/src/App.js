import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Food from "./components/Food";
import Cart from "./components/Cart";
import Support from "./components/Support";

import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    //auth logic
    const userInfo = {
      name: "Sanjit SG",
    };
    setUserInfo(userInfo.name);
  }, []);
  return (
    <>
      <UserContext.Provider value={{}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading!!!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
