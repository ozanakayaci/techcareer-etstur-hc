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
          <Link className="navbar-button" to="/events/category/music">
            Music
          </Link>
          <Link className="navbar-button" to="/events/category/theatre">
            Theatre
          </Link>
          <Link className="navbar-button" to="/events/category/art">
            Art
          </Link>
          <Link className="navbar-button" to="/events/category/sport">
            Sport
          </Link>
          <Link className="navbar-button" to="/events/category/pastevents">
            Past Events
          </Link>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Navbar;
