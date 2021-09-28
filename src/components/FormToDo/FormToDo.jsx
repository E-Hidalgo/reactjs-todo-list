/* eslint-disable prettier/prettier */
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import validation from "./validation";
import styles from "./FormToDo.module.scss";

class FormToDo extends React.Component {

  return (
    <form className={styles.form}>
      <input
        data-testid="create-todo-input"
        className="form__addTask"
        name="task"
        type="text"
        placeholder="Add a To-Do"
        value=""
      />
      {errors && <p className={styles.error} data-testid="create-todo-error-message">{errors}</p>}
    </form >
  );
}

export default FormToDo;
