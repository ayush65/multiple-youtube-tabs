import { useEffect, useState } from "react";
import "./App.css";
import YouTube from "react-youtube";

function App() {
  // const videoId = "C6FdvC7NWjs";
  const [link, setLink] = useState("");

  const [videoId, setVideoId] = useState("");

  console.log(videoId);
  const opts = {
    width: 500,
    height: 300,
    playerVars: {
      autoplay: 1,
    },
  };

  const handleReady = (event) => {
    event.target.playVideo(); // Auto-play the video
  };

  return (
    <div>
      <div className="code-now-div">
        <input onChange={(e) => setLink(e.target.value)} className="input-div" />
        <button
          onClick={() => {
            setVideoId(link.split("=")[1]);
          }}
          className="input-button"
        >
          Search
        </button>
      </div>
      <div className="App">
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />{" "}
      </div>
    </div>
  );
}

export default App;
