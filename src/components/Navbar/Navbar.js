import React from "react";

//css
import "./Navbar.scss";

//component
import Search from "./Search.js/Search";

//react router
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-comp">
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
          <Link className="navbar-button" to="/events/pastevents">
            Past Events
          </Link>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Navbar;
