import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar((prevValue) => !prevValue);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Cricket Update
      </Link>
      <div
        onClick={handleNavbar}
        className="navbar__menu"
        data-shownav={showNavbar}
      >
        <div className="navbar__menu--bars"></div>
        <div className="navbar__menu--bars"></div>
        <div className="navbar__menu--bars"></div>
      </div>
      <div className="navbar__links" data-shownav={showNavbar}>
        <Link to="/" className="navbar__links--link">
          Home
        </Link>
        <Link to="/news" className="navbar__links--link">
          News
        </Link>
        <Link to="/series" className="navbar__links--link">
          Series
        </Link>
        <Link to="/fantasy" className="navbar__links--link">
          Fantasy
        </Link>
        <Link to="/about" className="navbar__links--link">
          About
        </Link>
      </div>
    </nav>
  );
}
