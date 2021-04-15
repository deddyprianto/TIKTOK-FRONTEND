import React from "react";
import { MusicNote } from "@material-ui/icons";
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter({ name, description, song }) {
  return (
    <div className="video__footer">
      <div className="videoFooter__text">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="videFooter__ticker">
          <MusicNote className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img src="" className="videoFooter__record" alt="" />
    </div>
  );
}

export default VideoFooter;
