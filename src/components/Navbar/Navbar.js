import React from "react";

//react router
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar-button logo" to="/">
        Get<span>-</span>ket
      </Link>
      <div className="category-buttons">
        <Link className="navbar-button" to="/events/music">
          Music
        </Link>
        <Link className="navbar-button" to="/events/theatre">
          Theatre
        </Link>
        <Link className="navbar-button" to="/events/art">
          Art
        </Link>
        <Link className="navbar-button" to="/events/sport">
          Sport
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
