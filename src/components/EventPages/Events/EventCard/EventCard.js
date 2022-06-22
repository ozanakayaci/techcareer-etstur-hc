import React from "react";

//router
import { Link } from "react-router-dom";

function EventCard(item) {
  return (
    <Link to={`/eventPage/${item.props.event_id}`}>{item.props.name}</Link>
  );
}

export default EventCard;
