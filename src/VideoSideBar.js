import React, { useState } from "react";
import { Favorite, Message, Share, FavoriteBorder } from "@material-ui/icons";
import "./VideoSideBar.css";

function VideoSideBar({ likes, messages, shares }) {
  const [like, setLike] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__icon">
        {like ? (
          <Favorite fontSize="large" onClick={() => setLike(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={() => setLike(true)} />
        )}
        <p>{like ? likes + 1 : 100}</p>
      </div>
      <div className="videoSidebar__icon">
        <Message fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__icon">
        <Share fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
