import React, { useState } from "react";
import CheckButton from "../EditButtons/CheckButton";
import EditButton from "../EditButtons/EditButton";
import RemoveButton from "../EditButtons/RemoveButton";
import "./Task.scss";

class Task extends React.Component {
  return (
    <li className="task" data-testid="todo-item" key={item.id}>
      <label htmlFor="checkbox" className="">
        <CheckButton />
      </label>
      <div className="taskControllers">
        <EditButton />
        <RemoveButton />
      </div>
    </li>
  );
}

export default Task;
