/* eslint-disable import/no-unresolved */
import React from "react";
import styles from "./TaskFooter.module.scss";

class TaskFooter extends React.Component {
  return (
    <>
      <footer data-testid="app-footer">
        <ul className={styles.taskFooter}>
          <li> Items left</li>
          <li>
            <button type="button" value="all">
              All
            </button>
          </li>
          <li>
            <button type="button" value="active">
              Active
            </button>
          </li>
          <li>
            <button type="button" value="complete">
              Complete
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="clear-completed-todos"
            >
              Clear Complete
            </button>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default TaskFooter;
