import React from "react";

//data
import data from "../../../../data.json";

//react router
import { Link, useParams } from "react-router-dom";

function EventPage() {
  let { event_id } = useParams();

  return (
    <div className="EventPage">
      {event_id}
      <div
        dangerouslySetInnerHTML={{
          __html: data[event_id - 1].location.mapLocation,
        }}
      ></div>
    </div>
  );
}

export default EventPage;
