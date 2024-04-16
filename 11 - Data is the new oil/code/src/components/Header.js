import { useContext, useState } from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatue = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className=" m-1 flex justify-between items-center bg-orange-100 mb-2 shadow-lg max-h-16">
      <div className="logo-container">
        <img
          className="w-14 m-2"
          src={logo}
          alt="logo"
        ></img>
      </div>

      <h2 className="text-5xl font-bold">Goa Dines</h2>

      <ul className="flex p-4 m-4 text-xl font-semibold items-center">
        <li className="px-2">Online Statue: {onlineStatue ? "✅" : "🔴"}</li>
        <Link
          to="/"
          className="link"
        >
          <li className="px-2">Home</li>
        </Link>
        <Link
          to="/food"
          className="link"
        >
          <li className="px-2">Food</li>
        </Link>
        <Link
          to="/support"
          className="link"
        >
          <li className="px-2">Support</li>
        </Link>
        <Link
          to="/grocery"
          className="link"
        >
          <li className="px-2">Grocery</li>
        </Link>
        <Link
          to="/cart"
          className="link"
        >
          <li className="px-2">Cart</li>
        </Link>
        <button
          className="px-3 py-1 rounded-lg bg-red-300"
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
        <li className="px-2">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
