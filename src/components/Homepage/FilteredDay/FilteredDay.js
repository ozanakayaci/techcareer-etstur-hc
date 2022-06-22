import React from "react";
//useState
import { useState } from "react";

//router
import { Link } from "react-router-dom";

//calendar
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

//css
import "../Upcoming/Upcoming.scss";

//data
import data from "../../../../data.json";

function FilteredDay() {
  const [counter, setCounter] = useState(0);
  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 6),
      key: "selection",
    },
  ]);

  return (
    <div className="date-filter">
      <div>
        <DateRangePicker
          onChange={(item) => setSelectedDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={selectedDate}
          direction="horizontal"
        />
      </div>
      <div className="filtered-days">
        {data.map((item, i) => {
          let tempDate = new Date(item.date);
          let date = `${tempDate}`;

          if (
            tempDate >= selectedDate[0].startDate &&
            tempDate <= selectedDate[0].endDate
          ) {
            return (
              <div
                className={`cards ${item.status == "past" && "past-event"}`}
                key={i}
              >
                <Link to={`/eventPage/${item.event_id}`}>
                  <div className="box">
                    <div className="date-box">
                      <div className="day">{date.slice(8, 10)}</div>
                      <div>
                        <div>{date.slice(0, 3)}</div>
                        <div>{date.slice(4, 7)}</div>
                        <div>{date.slice(11, 15)}</div>
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

export default FilteredDay;
