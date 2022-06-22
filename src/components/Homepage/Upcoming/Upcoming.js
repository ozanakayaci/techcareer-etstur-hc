import React from "react";

//router
import { Link } from "react-router-dom";

//css
import "./Upcoming.scss";

function Upcoming(data) {
  const sortedData = [...data.props].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="upcoming-events">
      <h1>Upcoming Events</h1>
      <div className="upcoming-box">
        {sortedData.map((item, i) => {
          if (i < 7 && item.status != "past") {
            const date = `${new Date(item.date)}`;

            return (
              <div className="cards" key={i}>
                <Link to={`/eventPage/${item.event_id}`}>
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
                      <div>{item.name}</div>
                      <Link to={`/events/location/${item.location.name}`}>
                        <div className="faint">{item.location.name}</div>
                      </Link>
                      <div>
                        <span>{item.category.slice(0, 1).toUpperCase()}</span>
                        <span className="faint">
                          {item.category.slice(1, item.category.length)}
                        </span>
                      </div>
                    </div>
                    <div className="mini-img">
                      <img src={item.mini_image} alt="" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Upcoming;
