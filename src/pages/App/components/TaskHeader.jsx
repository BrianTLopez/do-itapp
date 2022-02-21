import React, { useState } from "react";
import CreateNewPopover from "./CreateNewPopover";

const TaskHeader = () => {
  const [openPopoverMenu, setPopover] = useState(false);
  

  const openPopover = (e) => {
    setPopover(!openPopoverMenu);
  };

  return (
    <div className="Task-header">
      <div className="date">
        <h2>To-Do Lists</h2>
      </div>
      <div className="button-group">
        <button onClick={openPopover}>Add New To-Do list</button>
      </div>

      {openPopoverMenu ? (
        <CreateNewPopover handlePopover={openPopover} />
      ) : null}
    </div>
  );
};

export default TaskHeader;
