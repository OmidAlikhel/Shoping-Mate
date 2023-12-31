import { Link, NavLink } from "react-router-dom";
import Logo from "../asset/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo"></img>
        <span> Shoping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: 2</span>
      </Link>
    </header>
  );
};
