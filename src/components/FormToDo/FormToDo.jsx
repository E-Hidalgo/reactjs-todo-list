/* eslint-disable prettier/prettier */
import React from "react";
import styles from "./FormToDo.module.scss";

// eslint-disable-next-line react/prefer-stateless-function
class FormToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className={styles.form}>
        <input
          data-testid="create-todo-input"
          className="form__addTask"
          name="task"
          type="text"
          placeholder="Add a To-Do"
        />
      </form>
    );
  }
}

export default FormToDo;
