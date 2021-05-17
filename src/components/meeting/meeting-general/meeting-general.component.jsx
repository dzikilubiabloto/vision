import React from 'react'

export default function MeetingGeneral() {
    return (
        <div className="grey meeting-tab-content">
        <p>The meetings serve as:</p>
        <ul>
          <li>
            <span>
              a <strong>connecting</strong> space where we share our
              stories and what is our dream;
            </span>
          </li>
          <li>
            <span>
              {" "}
              <strong>learning</strong> space, where we learn more about
              community building;
            </span>
          </li>
          <li>
            <span>
              <strong>creativity</strong> space where we develop new
              ideas of what we can build together.
            </span>
          </li>
          <li>
            <span>
              {" "}
              place where we <strong>are building</strong> something together
              (e.g. create vision, choose decision making process,
              deciding how we are dealing with conflicts)
            </span>
          </li>
        </ul>
      </div>
    )
}
