import React from "react";

//router
import { Link } from "react-router-dom";

function EventCard(item) {
  const date = `${new Date(item.props.date)}`;
  return (
    <div className="cards">
      <Link to={`/eventPage/${item.props.event_id}`}>
        <div className="box">
          <div className="date-box">
            <div className="day">{date.slice(8, 10)}</div>
            <div>
              <div>{date.slice(0, 3)}</div>
              <div>{date.slice(4, 7)}</div>
              <div>{date.slice(11, 15)}</div>
            </div>
          </div>
          <div className="nlc">
            <div>{item.props.name}</div>
            <Link to={`/events/location/${item.props.location.name}`}>
              <div className="faint">{item.props.location.name}</div>
            </Link>
            <div>
              <span>{item.props.category.slice(0, 1).toUpperCase()}</span>
              <span className="faint">
                {item.props.category.slice(1, item.props.category.length)}
              </span>
            </div>
          </div>
          <div className="mini-img">
            <img src={item.props.mini_image} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard;
