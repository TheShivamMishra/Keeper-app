import React from "react";
import Zoom from "@material-ui/core/Zoom";
import HighlightIcon from "@material-ui/icons/Highlight";

function Heading() {
  return (
    <div className="nav">
      <Zoom in={true}>
        <div className="nav-bar logo">
          <h1>
            <HighlightIcon />
            Keeper
          </h1>
        </div>
      </Zoom>
      <div className="nav-bar items">
        <div className="item">
          <a href="/">Home</a>
        </div>
        <div className="item">
          <a href="./about">About</a>
        </div>
      </div>
    </div>
  );
}

export default Heading;
