import React from "react";

//react router
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar.js";
import Homepage from "./components/Homepage/Homepage.js";
import EventPage from "./components/EventPages/EventPage/EventPage.js";
import Events from "./components/EventPages/Events/Events.js";
import Error404 from "./components/404/Error404.js";

//SASS
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="eventPage">
            <Route path=":event_id" element={<EventPage />} />
          </Route>
          <Route path="events">
            <Route path=":category" element={<Events />} />
          </Route>
          <Route path="*" component={Error404} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
