import React from "react";
import axios from "axios";

const TaskCard = () => {

  axios
      .get("/api/v1/projects/allProjects")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  return <div></div>;
};

export default TaskCard;
