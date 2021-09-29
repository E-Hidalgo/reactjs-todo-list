import React from "react";
import CheckButton from "../Buttons/CheckButton";
import EditButton from "../Buttons/EditButton";
import RemoveButton from "../Buttons/RemoveButton";
import "./Task.scss";

// eslint-disable-next-line react/prefer-stateless-function
class Task extends React.Component {
  render() {
    return (
      <li className="task" data-testid="todo-item" key="1">
        <div className="">
          <CheckButton />
        </div>
        <div className="taskControllers">
          <EditButton />
          <RemoveButton />
        </div>
      </li>
    );
  }
}

export default Task;
