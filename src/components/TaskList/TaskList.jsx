/* eslint-disable import/no-unresolved */
import React from "react";
import Task from "../Task";
import styles from "./TaskList.module.scss";

// eslint-disable-next-line react/prefer-stateless-function
class TaskList extends React.Component {
  render() {
    return (
      <>
        <ul className={styles.taskList} data-testid="todos-list">
          <Task />
        </ul>
      </>
    );
  }
}

export default TaskList;
