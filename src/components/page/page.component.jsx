import React from "react";

import { Switch, Route } from "react-router-dom";

import Books from "../books/books.component";
import Dreaming from "../dreaming/dreaming.component";
import Meeting from "../meeting/meeting.component";
import Values from "../values/values.component";
import { quotes } from "../../data/console.quotes";

import "./page.styles.scss";

function Page() {
  console.log(
    "%c.",
    "display: inline-block ; background-image: url( 'https://i.pinimg.com/originals/47/d8/cf/47d8cf3127c66dc94f852b44e6a6bdc5.jpg' ) ; " +
      "background-size: cover ; padding: 10px 175px 158px 10px ; " +
      "font-size: 11px ; line-height: 11px ; " +
      "font-family: monospace ;"
  );

  const i = Math.floor(Math.random() * 3)
  const [quote, author] = quotes[i];
  console.log(
    '%c%s',
      "font-size: 18px ; line-height: 20px ;" +
    "font-family: 'Times New Roman' ;", quote
  );
  console.log(
    '%c%s',
    "font-size: 16px ; line-height: 18px ; " +
    "font-family: 'Times New Roman' ;",author
);

  return (
    <div>
      <Switch>
        <Route exact path="/vision/">
          <div className="fade-in-bottom">
            <img
              src="https://i.ibb.co/mJwbmPj/barn-2594975.jpg"
              alt="wwooden house in forest at night with light insode and outside, people sitting by the fire"
            />
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
