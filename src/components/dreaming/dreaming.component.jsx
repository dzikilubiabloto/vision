import React from "react";

import "./dreaming.styles.scss";

function Dreaming() {
  return (
    <div className="values-container">
      <div className="values dreaming">
        <iframe
          title="listening"
          src="https://player.vimeo.com/video/227126380"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        
        <iframe
          title="dancing-rabbit"
          src="https://player.vimeo.com/video/280254239?color=579c87"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Dreaming;
