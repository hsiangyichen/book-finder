import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header section-container">
      <h1 className="header__title">BookHunt</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
