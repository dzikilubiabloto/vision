import React from "react";

import "./values.styles.scss";

function Values() {
  return (
    <div className="values-container">
      <div className="values">
        <img src="https://i.ibb.co/9n3QXdD/las-p.png" />
        <div id="write" className="">
          <h3>
            <a
              name="values-i-would-like-to-be-important-in-a-community-i-live-in-"
              className="md-header-anchor"
            ></a>
          </h3>
          <p>
            <em>
              <span>
                (Those are just values I find important in a community. It is open to change,
                compromise, extension. Written down to show the direction I
                would like to go.)
              </span>
            </em>
          </p>
          <ul>
            <li>
              <span>helping others, regenarativity, permaculture</span>
            </li>
            <li>
              <span>unschooling (for all ages)</span>
            </li>
            <li>
              <span>beauty</span>
            </li>
            <li>
              <span>nature</span>
            </li>
            <li>
              <span>freedom</span>
            </li>
            <li>
              <span>inclusivity, diversity</span>
            </li>
            <li>
              <span>creativity, dreaming, learning</span>
            </li>
            <li>
              <span>authenticity, honesty</span>
            </li>
            <li>
              <span>connections, care</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Values;
