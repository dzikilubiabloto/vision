import React from "react";

import { Switch, Route } from "react-router-dom";

import Books from "../books/books.component";
import Dreaming from "../dreaming/dreaming.component";
import Meeting from "../meeting/meeting.component";
import Terms from "../terms/terms.component";
import Values from "../values/values.component";

import "./page.styles.scss";

function Page() {
  return (
    <div>
      <Switch>
        <Route exact path="/vision/">
          <div>
          <img src="https://i.ibb.co/mJwbmPj/barn-2594975.jpg" />
          </div>
        </Route>
        <Route path="/vision/values">
          <Values />
        </Route>
        <Route path="/vision/dreaming">
          <Dreaming />
        </Route>
        <Route exact path="/vision/books">
          <Books />
        </Route>
        <Route exact path="/vision/meeting">
          <Meeting />
        </Route>
      </Switch>
    </div>
  );
}

export default Page;
