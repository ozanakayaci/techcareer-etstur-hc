import React from "react";

//react router
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/events/music">Music</Link>
      <Link to="/events/theatre">Theatre</Link>
      <Link to="/events/sport">Sport</Link>
    </div>
  );
}

export default Navbar;
