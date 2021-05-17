import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import "./mardown.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/menu/menu.component";
import Page from "./components/page/page.component";
import AuthProvider from "./context/auth.context";

function App() {
  const setPage = (page) => {
    setChosenPage(page);
  };

  const [chosenPage, setChosenPage] = React.useState("");

  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Menu setPage={setPage} />
          <Page chosenPage={chosenPage} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
