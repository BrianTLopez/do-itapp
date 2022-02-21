import React from "react";
import PropTypes from "prop-types";
import NewTaskForm from "./NewTaskForm";

const CreateNewPopover = ({ handlePopover }) => {
  const handleClose = (e) => {
    if (e.target.className === "popover") {
      handlePopover();
    }
  };
  return (
    <div className="popover" onClick={(e) => handleClose(e)}>
      <NewTaskForm />
    </div>
  );
};

CreateNewPopover.propTypes = {
  handlePopover: PropTypes.func,
};

export default CreateNewPopover;
