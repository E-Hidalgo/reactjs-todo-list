/* eslint-disable import/no-unresolved */
import React from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.scss";

class TaskList extends React.Component{
  return (
    <>
      <ul className={styles.taskList} data-testid="todos-list">
        <Task />
      </ul>
    </> 
  );
}

export default TaskList;


