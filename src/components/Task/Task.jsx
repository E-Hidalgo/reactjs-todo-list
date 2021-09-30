import React from "react";
import CheckButton from "../Buttons/CheckButton";
import RemoveButton from "../Buttons/RemoveButton";
import "./Task.scss";

// eslint-disable-next-line react/prefer-stateless-function
class Task extends React.Component {
  render() {
    const {
      text,
      deleteToDoItem,
      item,
      updateToDoItem,
      markCompletedToDoItem,
    } = this.props;
    return (
      <li className="task" data-testid="todo-item" key={item.id}>
        <div className="">
          <CheckButton
            markCompletedToDoItem={markCompletedToDoItem}
            item={item}
          />
          <input
            value={text}
            id={item.id}
            onChange={(e) => updateToDoItem(e.target.value, item.id)}
            className={`title ${item.done ? "done" : ""}`}
          />
        </div>
        <div className="taskControllers">
          <RemoveButton deleteToDoItem={deleteToDoItem} item={item} />
        </div>
      </li>
    );
  }
}

export default Task;
