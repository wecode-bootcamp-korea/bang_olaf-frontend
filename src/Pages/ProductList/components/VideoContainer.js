import React, { Component } from "react";
import "./VideoContainer.scss";

class VideoContainer extends Component {
  render() {
    return (
      <section className="videoContainer">
        <video
          controls
          autoplay
          src="https://videos.ctfassets.net/8cd2csgvqd3m/3B4qwSWxHo4ejpSBxEAZCG/ba90a9af2157e08fc107d22824a73acd/B_O_Balance_-_Desktop.mp4" //원래사이트 동영상
          type="video/mp4"
        />
      </section>
    );
  }
}

export default VideoContainer;
