import React from "react";
import { useState, useEffect } from "react";

//componenet
import EventCard from "./EventCard/EventCard.js";

//css
import "./Events.scss";
//redux
import { useParams } from "react-router-dom";

//data
import data from "../../../../data.json";

function Events() {
  let { category, location, word, date_range } = useParams();

  const [filteredEvents, setFilteredEvents] = useState([]);

  let filterWord = "";

  //filteredWord is the word that is searched for
  location != undefined
    ? (filterWord = location)
    : category != undefined
    ? (filterWord = category)
    : date_range != undefined
    ? (filterWord = date_range)
    : (filterWord = word);

  let handleFilter = (datas, key, name) => {
    setFilteredEvents(
      [...datas].filter((item) => {
        if (key != undefined) {
          return Object.keys(item).some(
            (prop) =>
              item[prop] !== undefined &&
              (item[prop]
                .toString()
                .toLowerCase()
                .includes(key.toLowerCase()) ||
                Object.keys(item[prop]).some(
                  (prop2) =>
                    item[prop][prop2] !== undefined &&
                    item[prop][prop2]
                      .toString()
                      .toLowerCase()
                      .includes(key.toLowerCase())
                ))
          );
        } else {
          return [...datas];
        }
      })
    );
    if (datas.length == 0) {
      handleFilter(data, key, name);
    }
  };

  useEffect(() => {
    handleFilter(data, filterWord);
  }, [filterWord]);

  console.log(filteredEvents);
  return (
    <div>
      <div className="filters">
        <h1>Filters</h1>
        <div className="dropdown">
          <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
            <button
              onClick={() => {
                handleFilter(filteredEvents, "music", "category");
              }}
            >
              Music
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "theatre", "category");
              }}
            >
              Theatre
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "art", "category");
              }}
            >
              Art
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "sport", "category");
              }}
            >
              Sport
            </button>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Cities</button>
          <div className="dropdown-content">
            <button
              onClick={() => {
                handleFilter(filteredEvents, "antalya", "city");
              }}
            >
              Antalya
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "balıkesir", "city");
              }}
            >
              Balıkesir
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "istanbul", "city");
              }}
            >
              Istanbul
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "bilbao", "city");
              }}
            >
              Bilbao
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "werchter", "city");
              }}
            >
              Werchter
            </button>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Venue</button>
          <div className="dropdown-content">
            <button
              onClick={() => {
                handleFilter(
                  filteredEvents,
                  "Dorock XL Kadıköy, İstanbul",
                  "name"
                );
              }}
            >
              Dorock XL Kadıköy, İstanbul
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "ESTADIO SAN MAMÉS", "name");
              }}
            >
              ESTADIO SAN MAMÉS
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "Altınoluk Amfi Tiyatro", "name");
              }}
            >
              Altınoluk Amfi Tiyatro
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "Trump Sahne İstanbul", "name");
              }}
            >
              Trump Sahne İstanbul
            </button>
            <button
              onClick={() => {
                handleFilter(
                  filteredEvents,
                  "Antalya Açıkhava Tiyatrosu",
                  "name"
                );
              }}
            >
              Antalya Açıkhava Tiyatrosu
            </button>
            <button
              onClick={() => {
                handleFilter(
                  filteredEvents,
                  "Rock Werchter Festivalpark",
                  "name"
                );
              }}
            >
              Rock Werchter Festivalpark
            </button>
            <button
              onClick={() => {
                handleFilter(filteredEvents, "Pera Müzesi", "name");
              }}
            >
              Pera Müzesi
            </button>
          </div>
        </div>
      </div>
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
            {category == "pastevents" ? (
              <div>{item.status == "past" && <EventCard props={item} />}</div>
            ) : (
              <div>
                {item.status == "upcoming" && <EventCard props={item} />}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Events;
