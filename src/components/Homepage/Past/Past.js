import React from "react";

function Past(data) {
  return (
    <div>
      {data.props.map((item, i) => {
        return (
          <div key={i}>
            {item.status == "past" && (
              <div className="past simple-card">{item.name}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Past;
