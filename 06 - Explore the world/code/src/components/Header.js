import { LOGO_URL } from "../utils/constant";
const Logo = () => (
  <img
    src={LOGO_URL}
    alt="logo"
  ></img>
);

// header component
const Header = () => (
  <div className="nav">
    <Logo />
    <h2>Goa Dines</h2>
    <ul>
      <li>Home</li>
      <li>Food</li>
      <li>Support</li>
      <li>Cart</li>
    </ul>
  </div>
);

export default Header;
