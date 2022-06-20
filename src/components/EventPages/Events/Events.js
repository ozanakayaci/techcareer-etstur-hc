import React from "react";

//data
import data from "../../../../data.json";

//redux
import { Link, useParams } from "react-router-dom";

function Events() {
  let { category } = useParams();

  return (
    <div>
      {data.map((item, i) => {
        return (
          <div>
            <Link to={`/eventPage/${item.event_id}`}>
              {category == item.category.toLowerCase() && item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
