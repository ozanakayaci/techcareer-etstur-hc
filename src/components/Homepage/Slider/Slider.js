import React from "react";
import { useState, useEffect } from "react";

//router
import { Link } from "react-router-dom";

function Slider(data) {
  const [selected, setSelected] = useState(data.props[0].event_id);

  return (
    <div className="slider">
      <div className="slider-photos">
        <img
          src={
            data.props[
              data.props.findIndex((object) => {
                return object.event_id == selected;
              })
            ].images[0]
          }
          alt=""
        />
        <div className="description">
          {
            data.props[
              data.props.findIndex((object) => {
                return object.event_id == selected;
              })
            ].description
          }
        </div>
      </div>
      <div className="slider-event">
        {data.props.map((item, i) => {
          if (i < 7 && item.status != "past") {
            return (
              <div
                onMouseEnter={() => setSelected(item.event_id)}
                className={`cards ${
                  item.event_id == selected ? "selected-card" : ""
                }`}
                key={i}
              >
                <Link className="box-link" to={`/eventPage/${item.event_id}`}>
                  <div className="box">
                    <span>{item.name}</span>
                    <span className="date">{item.date}</span>
                  </div>
                  <Link
                    className="card-location"
                    to={`/events/location/${item.location.name}`}
                  >
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
