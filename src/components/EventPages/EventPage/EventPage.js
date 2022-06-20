import React from "react";

//data
import data from "../../../../data.json";

//react router
import { Link, useParams } from "react-router-dom";

function EventPage() {
  let { event_id } = useParams();

  return <div>{event_id}</div>;
}

export default EventPage;
