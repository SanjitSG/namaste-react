// logo
const Logo = () => <img src="https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg?t=st=1710864654~exp=1710868254~hmac=bc88d5e444cc9e4b93ae0cf2c9031d449283be79ec7519a0ee59fbe61f596fce&w=740" alt="logo"></img>;

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
