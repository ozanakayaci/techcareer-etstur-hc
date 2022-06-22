import React from "react";
import { useState } from "react";

//router
import { Link } from "react-router-dom";

function Slider(data) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="slider">
      <div className="slider-photos">
        <img src={data.props[selected].images[0]} alt="" />
        <div className="description">{data.props[selected].description}</div>
      </div>
      <div className="slider-event">
        {data.props.map((item, i) => {
          if (i < 7 && item.status != "past") {
            return (
              <div
                onMouseEnter={() => setSelected(item.event_id - 1)}
                className={`cards ${
                  item.event_id == selected + 1 ? "selected-card" : ""
                }`}
                key={i}
              >
                <Link className="box-link" to={`/eventPage/${item.event_id}`}>
                  <div className="box">
                    <span>{item.name}</span>
                    <span className="date">{item.date}</span>
                  </div>
                  <Link to={`/events/location/${item.location.name}`}>
                    <span>{item.location.name}</span>'da
                  </Link>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Slider;
