/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { FaLaughBeam } from "react-icons/fa";
import styles from "./CheckButton.module.scss";

class CheckButton extends React.Component {
    render() {
        const { markCompletedToDoItem, item } = this.props;
        return (
            <button
                type="button"
                className={styles.checkButton}
                data-testid="todo-item-checkbox"
            >
            <FaLaughBeam onClick={() => markCompletedToDoItem(item.id)}/>
            </button>
        );
    }
}

export default CheckButton;