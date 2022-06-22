import React from "react";

//componenet
import EventCard from "./EventCard/EventCard.js";

//redux
import { useParams } from "react-router-dom";

//data
import data from "../../../../data.json";

function Events() {
  let { category, location, word, date_range } = useParams();

  let filterWord = "";

  //filteredWord is the word that is searched for
  location != undefined
    ? (filterWord = location)
    : category != undefined
    ? (filterWord = category)
    : date_range != undefined
    ? (filterWord = date_range)
    : (filterWord = word);

  console.log(filterWord);

  const filteredEvents = [...data].filter((item) => {
    if (filterWord != undefined) {
      return Object.keys(item).some(
        (prop) =>
          item[prop] !== undefined &&
          (item[prop]
            .toString()
            .toLowerCase()
            .includes(filterWord.toLowerCase()) ||
            Object.keys(item[prop]).some(
              (prop2) =>
                item[prop][prop2] !== undefined &&
                item[prop][prop2]
                  .toString()
                  .toLowerCase()
                  .includes(filterWord.toLowerCase())
            ))
      );
    } else {
      return [...data];
    }
  });

  console.log(filteredEvents);
  return (
    <div>
      {
        //filtered by
        location != undefined ? (
          <h1>Events at {location}</h1>
        ) : category != undefined ? (
          <h1>
            <span>Events in {category.slice(0, 1).toUpperCase()}</span>
            <span>{category.slice(1, category.length)}</span> category...
          </h1>
        ) : word != undefined ? (
          <h1>search results:"{word}"</h1>
        ) : (
          <div>{date_range} range</div>
        )
      }
      {filteredEvents.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.status == "upcoming" && <EventCard props={item} />}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
