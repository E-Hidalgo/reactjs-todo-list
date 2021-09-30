/* eslint-disable prettier/prettier */
import React from "react";
import styles from "./FormToDo.module.scss";

// eslint-disable-next-line react/prefer-stateless-function
class FormToDo extends React.Component {
  render() {
    const { handleChangeInput, addToDoItem, toDoItem } = this.props;
    return (
      <form className={styles.form} onSubmit={addToDoItem}>
        <input
          data-testid="create-todo-input"
          className="form__addTask"
          name="task"
          type="text"
          placeholder="Add a To-Do"
          onChange={handleChangeInput}
          value={toDoItem.text}
        />
      </form>
    );
  }
}

export default FormToDo;
