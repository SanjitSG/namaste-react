import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Logo = () => (
  <img
    src={LOGO_URL}
    alt="logo"
  ></img>
);

// header component
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="nav">
      <Logo />
      <h2>Goa Dines</h2>
      <ul>
        <Link
          to="/"
          className="link"
        >
          <li>Home</li>
        </Link>
        <Link
          to="/food"
          className="link"
        >
          <li>Food</li>
        </Link>
        <Link
          to="/support"
          className="link"
        >
          <li>Support</li>
        </Link>
        <Link
          to="/cart"
          className="link"
        >
          <li>Cart</li>
        </Link>
        <button
          className="login-btn"
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </ul>
    </div>
  );
};

export default Header;
