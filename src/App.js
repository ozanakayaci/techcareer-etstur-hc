import React from "react";

//components
import Navbar from "./components/Navbar/Navbar.js";
import MainMenu from "./components/MainMenu/MainMenu.js";
import EventPage from "./components/EventPages/EventPage.js";

//SASS
import "./App.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainMenu />
      <EventPage />
      <h1>Hello</h1>
    </div>
  );
};

export default App;
