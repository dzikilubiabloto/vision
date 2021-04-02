import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

import Menu from "./components/menu/menu.component";
import Page from "./components/page/page.component";

function App() {
  const setPage = (page) => {
    console.log(page);
    setChosenPage(page);
    console.log("setpage");
  };

  const [chosenPage, setChosenPage] = React.useState("");

  return (
    <div className="app">
      <Router>
        <Menu setPage={setPage} />
        <Page chosenPage={chosenPage} />
      </Router>
    </div>
  );
}

export default App;
