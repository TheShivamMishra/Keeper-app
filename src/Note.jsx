import React from "react";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Zoom from "@material-ui/core/Zoom";
import { ZoomIn } from "@material-ui/icons";

function Note(props) {
  function handleClick(event) {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <Zoom in={true}>
        <button style={{ outline: "none" }}  onClick={handleClick}>
          <DeleteSweepIcon />
        </button>
      </Zoom>
    </div>
  );
}

export default Note;
