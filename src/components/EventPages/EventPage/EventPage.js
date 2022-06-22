import React from "react";

import { useState } from "react";

//css
import "./EventPage.scss";

//data
import data from "../../../../data.json";

//react router
import { Link, useParams } from "react-router-dom";

function EventPage() {
  let { event_id } = useParams();

  const [image, setImage] = useState(0);
  const [event, setEvent] = useState(
    data[
      data.findIndex((object) => {
        return object.event_id == event_id;
      })
    ]
  );
  const date = `${new Date(event.date)}`;

  return (
    <div className="event-page">
      <h1>
        {event.name}, {event.location.name}
      </h1>
      <div className="image-slider">
        {event.images.map((item, i) => {
          return (
            <div
              className={i == image ? "fade selected-image" : "fade hide-image"}
              key={i}
            >
              <img src={item} alt="" />
            </div>
          );
        })}
        <a
          class="next"
          onClick={() => {
            setImage(image - 1 < 0 ? event.images.length - 1 : image - 1);
          }}
        >
          &#10094;
        </a>
        <a
          class="prev"
          onClick={() => {
            setImage(image + 1 >= event.images.length ? 0 : image + 1);
          }}
        >
          &#10095;
        </a>
      </div>
      <div className="event-info">
        <div>
          <div>
            <div className="info-card">
              <Link to={`/eventPage/${event.event_id}`}>
                <div className="box">
                  <div className="info-box">
                    <div className="date-box">
                      <div className="day">{date.slice(8, 10)}</div>
                      <div>
                        <div>{date.slice(0, 3)}</div>
                        <div>{date.slice(4, 7)}</div>
                        <div>{date.slice(11, 15)}</div>
                      </div>
                    </div>
                    <div className="nlc">
                      <Link to={`/events/location/${event.location.name}`}>
                        <div className="faint">{event.location.name}</div>
                      </Link>
                    </div>
                  </div>
                  <div>{event.description}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: event.location.mapLocation,
          }}
        ></div>
      </div>
    </div>
  );
}

export default EventPage;
