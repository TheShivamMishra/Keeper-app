import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom"

function InsertComp(props) {
  const [isExpanded,setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  function additem(event) {
    if (note.title !== "" && note.content !== "") {
      props.onAdd(note);
      note.title = "";
      note.content = "";
    }
    event.preventDefault();
  }

  return (
    <div className="form">
      <form>
        {isExpanded && (
          <input
            name="title"
            placeholder="Enter Title"
            onChange={handleChange}
            value={note.title}
            type="text"
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          onClick = {()=>{
              setExpanded(true);
          }}
          rows= {isExpanded?3:1}
          value={note.content}
          onChange={handleChange}
          type="text"
        />
        <Zoom in={isExpanded}>
          <Fab onClick={additem}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InsertComp;
