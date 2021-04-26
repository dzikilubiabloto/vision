import React from "react";

import "./meeting.styles.scss";

function Meeting() {
  return (
    <div className="values-container">
      <div className="values meeting">
        {true && (
          <img
            src="https://i.ibb.co/SwGYkD5/m-131-web-v-1024x295.jpg"
            alt="table with chairs next to big window with nature outside"
          />
        )}
        {false && (
          <img
            src="https://i.ibb.co/kDHjSnn/meeting.jpg"
            alt="table with chairs next to big window with nature outside"
          />
        )}
        <div className="typora-export">
          <div id="write" className="">
            {/*// <p>
            //   <span>
            //     <em>
            //       <strong>Notes: </strong> I am not sure how much time the
            //       meeting will take. It depends of the amount of people. So if
            //       you think you need time to find the answer to those questions,
            //       I am sending them in advance.{" "}
            //     </em>
            //   </span>
            //   <strong>
            //     <span>
            //       <em>
            //         But still it is completely fine to take time to think, wait,
            //         breath, gather thoughts during the answer!
            //       </em>
            //     </span>
            //   </strong>
            // </p>
            // <p>
            //   <span>
            //     <em>
            //       Because length of the meeting depends of the amount of people,
            //       we can skip some points of agenda and move them to the next
            //       meeting so we fit in 2h. In that case I would suggest skipping
            //       points 4 and 5.{" "}
            //     </em>
            //   </span>
            // </p>*/}
            <div className='grey'>
              <p>The meetings could serve as:</p>
              <ul>
                <li>
                  <span>
                    a <strong>connecting</strong> space where we share our stories and what
                    is our dream;
                  </span>
                </li>
                <li>
                  <span>
                    {" "}
                    <strong>learning</strong> space, where we learn more about community
                    building;
                  </span>
                </li>
                <li>
                  <span>
                  <strong>creativity</strong> space where we develop new ideas of what we
                    can build together.
                  </span>
                </li>
                <li>
                  <span>
                    {" "}
                    place where we <strong>build</strong> something together (e.g. create
                    vision, choose decision making process, decide how we are
                    dealing with conflicts)
                  </span>
                </li>
              </ul>
            </div>
            <p>&nbsp;</p>
            <h4>
              <strong>
                <span>Purpose of the meeting:</span>
              </strong>
              <span> </span>
            </h4>
            <ul>
              <li>
                <span>
                  {" "}
                  to learn who from our environment, friends is interested in
                  building a community/living in a community.
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  networking, meeting people and learning something about them.
                </span>
              </li>
              <li>
                <span>
                  bring a little bit of clarity to the topic of the meetings{" "}
                </span>
                <em>
                  <span>
                    (but I think the first meeting could be too soon to expect
                    more and would like to focus on more technical details on
                    the 2nd/3rd meeting).
                  </span>
                </em>
              </li>
            </ul>
            <h3>
              <strong>
                <span id="first-meeting">FIRST MEETING: </span>
              </strong>
              <span>(2h)</span>
            </h3>
            <p>
              <strong>
                <span>Facilitator</span>
              </strong>
              <span>: Talita</span>
            </p>
            <p>
              <strong>
                <span>Notary</span>
              </strong>
              <span>: (saving information - to be discussed)</span>
            </p>
            <h4>
              <strong>
                <span>Beginning</span>
              </strong>
              <span>: One minute of silence for arrival.</span>
            </h4>
            <h4>
              <strong>
                <span>Agenda</span>
              </strong>
              <span>:</span>
            </h4>
            <ol start="">
              <li>
                <h5>
                  <strong>
                    <span>
                      Why am I here? What am I expecting from this meeting?
                    </span>
                  </strong>
                  <span> </span>
                </h5>
                <p>
                  <span>Round for answering these questions.</span>
                </p>
              </li>
              <li>
                <h5>
                  <strong>
                    <span>Who we are. (approximate time: 20-30 minutes)</span>
                  </strong>
                </h5>
                <p>
                  <span>
                    This is a round of sharing who we are and what motivates us
                    to join this meeting.
                  </span>
                  <span>We will have a round for answering questions:</span>
                </p>
                <ul>
                  <li>
                    <p>
                      <em>
                        <span>
                          first we can share how we are feeling at this moment,
                          what thoughts we have
                        </span>
                      </em>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>who am I? </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>what is important for me?</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>what motivates me?</span>
                      <br />
                      <span>
                        or/and anything else we want to share about ourselves,
                        our experiences
                      </span>
                    </p>
                    <p>
                      <strong>
                        <em>
                          <span>
                            Depending on the time we can have a round/popcorn of
                            questions/discussion.
                          </span>
                        </em>
                      </strong>
                      <span>(5-10min)</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <strong>
                    <span>Why we are here.(approximate time: 30 minutes)</span>
                  </strong>
                </h5>
                <p>
                  <span>Round for answering these questions:</span>
                </p>
                <ul>
                  <li>
                    <p>
                      <span>Why am I interested in communities?</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        Why I would like to live in a community? And when.
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        What qualities, values, characteristics I am looking for
                        in a community?
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>How am I imagining the community I live in?</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>
                        What are the things I would like to do in the direction
                        my dream of living in a community comes true?
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>What information, materials are inspiring me?</span>
                    </p>
                    <p>
                      <strong>
                        <em>
                          <span>
                            Depending on the time we can have a round/popcorn of
                            questions/discussion.
                          </span>
                        </em>
                      </strong>
                      <span>(5-10min)</span>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <strong>
                    <span>Meetings. (approximate time: 15-20 minutes)</span>
                  </strong>
                </h5>
                <ul>
                  <li>
                    <span>
                      What would I like to do during meetings on-line? (round)
                    </span>
                  </li>
                  <li>
                    <span>What am I expecting from them? (round)</span>
                  </li>
                  <li>
                    <span>
                      How involved would I like to be in creating them? (round)
                    </span>
                  </li>
                  <li>
                    <span>
                      Who is meeting? how much of commitment is needed to take
                      part in meetings? who can make decisions? (round +
                      discussion)
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <strong>
                    <span>Proposals for the next meeting</span>
                  </strong>
                  <span>. </span>
                  <strong>
                    <span>(approximate time: 15-20 minutes)</span>
                  </strong>
                </h5>
                <ul>
                  <li>
                    <span>Gathering proposals for the next meeting.</span>
                  </li>
                  <li>
                    <span>Choosing topics and people responsible for them</span>
                  </li>
                  <li>
                    <span>
                      When will we meet? Some tool for choosing the best time?
                      (it does not have to be set forever time, but just time
                      for the next meeting where we choose more fixed time)
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <strong>
                    <span>
                      Any other topics, questions, things we want to say?
                    </span>
                  </strong>
                </h5>
                <p>
                  <span>
                    Time to add something we want to the previous discussions.
                  </span>
                </p>
              </li>
            </ol>
            <h4>
              <span>Check-out round:</span>
            </h4>
            <p>
              <span>
                Round of sharing how we feel, what we think about this meeting.
                Anything.
              </span>
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h3>
              <span>PROPOSALS FOR THE NEXT MEETING:</span>
            </h3>
            <h3>
              <strong>
                <span>1. Getting to know each other:</span>
              </strong>
            </h3>
            <ul>
              <li>
                <span>
                  asking questions present people, new people introduce
                  themselves
                </span>
              </li>
            </ul>
            <p>
              <span>Our community expectations:</span>
            </p>
            <ul>
              <li>
                <span>
                  we can have a round and discussion on topics: what I would
                  like to have in a community and hat I fear in community.
                  Chatting and gathering questions from this discussion.
                </span>
              </li>
              <li>
                <span>
                  or another rounds about who we are and why we are interested
                  in communities
                </span>
              </li>
            </ul>
            <h3>
              <span>2. </span>
              <strong>
                <span>'Organize our group' STEP:</span>
              </strong>
            </h3>
            <h4>
              <span>0. who is meeting</span>
            </h4>
            <p>
              <span> </span>
              <span>
                how much of commitment is needed to take part in meetings? who
                can make decisions?
              </span>
            </p>
            <h4>
              <span>1. format of this meetings</span>
            </h4>
            <p>
              <span> </span>
              <span>
                how often, how long, when and how are we deciding about the next
                meeting, agenda, facilitator, notes from meetings, how the
                structure looks
              </span>
            </p>
            <h4>
              <span>2. data privacy</span>
            </h4>
            <p>
              <span> </span>
              <span>
                where do we meet? which data are we storing and where? do we
                exchange contacts and how? anything else?{" "}
              </span>
            </p>
            <h4>
              <span>3. group organization </span>
            </h4>
            <p>
              <span> </span>
              <span>
                do we have smaller groups responsible for different topics,
                researches? How are we organizing that? (maybe groups, people
                responsible for particular steps)
              </span>
            </p>
            <h4>
              <span>4. knowledge sharing</span>
            </h4>
            <p>
              <span> </span>
              <span>
                Do we have any expectations to the knowledge each of us should
                have, literature, courses, experience, common exercises,
                internal materials?
              </span>
            </p>
            <h3>
              <span>3. Knowledge sharing:</span>
            </h3>
            <p>
              <span> </span>
              <span>
                We could read something in between and discuss it on the
                meeting.
              </span>
            </p>
            <p>
              <span> </span>
              <span>
                We could research some topic and discuss it on the meeting.
              </span>
            </p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
