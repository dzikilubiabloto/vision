import React from "react";

import { Switch, Route } from "react-router-dom";

import Books from "../books/books.component";
import Dreaming from "../dreaming/dreaming.component";
import Meeting from "../meeting/meeting.component";
import Values from "../values/values.component";

import "./page.styles.scss";

function Page() {

  console.log(
    "%cBackground image",
    "display: inline-block ; background-image: url( 'https://i.pinimg.com/originals/47/d8/cf/47d8cf3127c66dc94f852b44e6a6bdc5.jpg' ) ; " +
      "background-size: cover ; padding: 10px 175px 158px 10px ; " +
      "border: 2px solid black ; font-size: 11px ; line-height: 11px ; " +
      "font-family: monospace ;"
  );

  return (
    <div>
      <Switch>
        <Route exact path="/vision/">
          <div>
            <img src="https://i.ibb.co/mJwbmPj/barn-2594975.jpg" alt="wwooden house in forest at night with light insode and outside, people sitting by the fire"/>
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