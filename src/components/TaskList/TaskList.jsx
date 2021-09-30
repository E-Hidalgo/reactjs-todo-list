/* eslint-disable import/no-unresolved */
import React from "react";
import Task from "../Task";
import styles from "./TaskList.module.scss";

// eslint-disable-next-line react/prefer-stateless-function
class TaskList extends React.Component {
  render() {
    const { toDoList, deleteToDoItem, updateToDoItem, markCompletedToDoItem } =
      this.props;
    return (
      <>
        <ul className={styles.taskList} data-testid="todos-list">
          {toDoList.map((item) => (
            <Task
              text={item.text}
              key={item.id}
              done={item.done}
              item={item}
              isEditing={item.isEditing}
              deleteToDoItem={deleteToDoItem}
              updateToDoItem={updateToDoItem}
              markCompletedToDoItem={markCompletedToDoItem}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TaskList;
