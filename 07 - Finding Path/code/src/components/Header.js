import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
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
        <li>Home</li>
        <li>Food</li>
        <li>Support</li>
        <li>Cart</li>
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
