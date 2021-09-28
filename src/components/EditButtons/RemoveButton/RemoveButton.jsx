/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./RemoveButton.module.scss";

class RemoveButton extends React.Component {
  return (
    <button
      type="button"
      className={styles.removeButton}
      data-testid="todo-item-delete-button"
    >
      <FaTrashAlt onClick={removeHandler} />
    </button>
  );
}

export default RemoveButton;
