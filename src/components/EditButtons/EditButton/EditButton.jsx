/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaEdit } from "react-icons/fa";
import styles from "./EditButton.module.scss";

class EditButton extends React.Component {
  return (
    <button type="button" className={styles.editButton}>
      <FaEdit />
    </button>
  );
}

export default EditButton;
