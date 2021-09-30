/* eslint-disable import/no-unresolved */
import React from "react";
import styles from "./TaskFooter.module.scss";

// eslint-disable-next-line react/prefer-stateless-function
class TaskFooter extends React.Component {
  render() {
    const { itemLeftCounter, deleteCompletedTask } = this.props;
    return (
      <footer data-testid="app-footer">
        <ul className={styles.taskFooter}>
          <li>{itemLeftCounter()} Items left</li>
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
              onClick={deleteCompletedTask}
            >
              Clear Complete
            </button>
          </li>
        </ul>
      </footer>
    );
  }
}

export default TaskFooter;
