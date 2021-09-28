/* eslint-disable prettier/prettier */
import React from "react";
import { FormToDo } from "../FormToDo/FormToDo";
import TaskList from "../TaskList/TaskList";
import TaskFooter from "../TaskFooter/TaskFooter";
import styles from "./ToDo.module.scss";

class ToDoContainer extends React.Component {
  return (
    <section className={styles.listContainer}>
      <FormToDo />
      <TaskList />
      <TaskFooter />
    </section>
  );
}

export default ToDoContainer;