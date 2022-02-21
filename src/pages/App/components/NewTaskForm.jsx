import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";


const NewTaskForm = () => {
//   const [ todos, setTodos ] = useState([
//     {
//         text: "Test 1",
//         isCompleted: false,
//         isEditing: false
//     },
//     {
//         text: "Test 2",
//         isCompleted: false,
//         isEditing: false
//     },
//     {
//         text: "Test 3",
//         isCompleted: false,
//         isEditing: false
//     }
// ]);
  const addTaskClick = () => {
    let inputValue = document.getElementsByClassName("title")[0].value;

    axios
      .post("/api/v1/projects/create", {name: inputValue})
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

 

  return (
    <div className="newTask">
      <div className="inputForm">
        <form>
        <label className = "prompt">Enter Name of List</label>
        <input type="text" className="title" name="listTitle" placeholder="Title"></input>
        </form>
      </div>
      <Button
          type="submit"
          className="addButton"
          variant = "contained"
          size = "medium"
          onClick={addTaskClick}
          >
          Save New To-Do List
      </Button>
    </div>
  );
};

export default NewTaskForm;
