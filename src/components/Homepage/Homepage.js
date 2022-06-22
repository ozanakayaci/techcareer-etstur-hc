import React from "react";

//data
import data from "../../../data.json";

import "./Homepage.scss";

//child components
import Slider from "./Slider/Slider.js";
import Upcoming from "./Upcoming/Upcoming.js";
import FilteredDay from "./FilteredDay/FilteredDay.js";

function Homepage() {
  return (
    <div className="homepage">
      <div>
        <Slider props={data} />
      </div>
      <div className="events">
        <Upcoming props={data} />
        <FilteredDay />
      </div>
    </div>
  );
}

export default Homepage;
