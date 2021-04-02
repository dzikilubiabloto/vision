import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Books from "../books/books.component";
import Dreaming from "../dreaming/dreaming.component";
import Meeting from "../meeting/meeting.component";
import Values from "../values/values.component";

import "./page.styles.scss";

function Page({ chosenPage }) {
  console.log("cccc", chosenPage);
  // switch(chosenPage) {

  //     case('home'):{
  //         return (<div></div>);
  //     };
  //     case('values'): {
  //         console.log("UUUUUUUUUUUUUUUUUU")
  //         return <Values />
  //     };
  //     case('dreaming'): {
  //         console.log("UUUUUUUUUUUUUUUUUU")
  //         return <Dreaming />
  //     };
  //     case('books'): {
  //         console.log("UUUUUUUUUUUUUUUUUU")
  //         return <Books />
  //     };
  //     case('meeting'): {
  //         console.log("UUUUUUUUUUUUUUUUUU")
  //         return <Meeting />
  //     };
  // }
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <div></div>
        </Route>
        <Route path="/values">
          <Values />
        </Route>
        <Route path="/dreaming">
          <Dreaming />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/meeting">
          <Meeting />
        </Route>
      </Switch>
    </div>
  );
}

export default Page;
