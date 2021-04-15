import React from "react";
import Video from "./Video";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="app__video">
        <Video
          url={"put your URL in Here"}
          name="deddy"
          channel="deeddyy"
          description="whooo this is work dope!!!!!"
          song="chansMoker"
          like={20123}
          share={123123}
          message={123}
        />
      </div>
    </div>
  );
}

export default App;
