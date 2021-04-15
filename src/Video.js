import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
function Video({ url, name, description, song, likes, shares, messages }) {
  const [video, setVideo] = useState(false);
  const initVideoRef = useRef(null);
  const handlerVideo = () => {
    if (video) {
      initVideoRef.current.pause();
      setVideo(false);
    } else {
      initVideoRef.current.play();
      setVideo(true);
    }
  };
  return (
    <div className="video">
      <video
        loop
        src={url}
        ref={initVideoRef}
        onClick={handlerVideo}
        className="video__player"
      ></video>
      <VideoFooter name={name} description={description} song={song} />
      <VideoSideBar like={likes} share={shares} message={messages} />
    </div>
  );
}

export default Video;
