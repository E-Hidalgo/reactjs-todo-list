/* eslint-disable import/no-unresolved */
import React from "react";
import styles from "./TaskNav.module.scss";
class TaskNav extends React.Component {

  return (
    <>
      <nav data-testid="app-footer">
        <ul className={styles.taskNav}>
          <li>Items left</li>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
          <li>
          <button
            type="button"
            data-testid="clear-completed-todos"
          >
            Clear Complete
          </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TaskNav;