import { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar((prevValue) => !prevValue);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        Cricket Update
      </a>
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
        <a href="/" className="navbar__links--link">
          Home
        </a>
        <a href="/news" className="navbar__links--link">
          News
        </a>
        <a href="/matches" className="navbar__links--link">
          Series
        </a>
        <a href="/fantasy" className="navbar__links--link">
          Fantasy
        </a>
        <a href="/about" className="navbar__links--link">
          About
        </a>
      </div>
    </nav>
  );
}
