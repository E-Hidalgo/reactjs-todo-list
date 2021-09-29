/* eslint-disable prettier/prettier */
import React from "react";
import FormToDo from "../FormToDo";
import TaskList from "../TaskList";
import TaskFooter from "../TaskFooter";
import styles from "./ToDo.module.scss";

// eslint-disable-next-line react/prefer-stateless-function
class ToDoContainer extends React.Component {
  render() {
    return (
      <section className={styles.listContainer}>
        <FormToDo />
        <TaskFooter />
        <TaskList />
      </section>
    );
  }
}

export default ToDoContainer;