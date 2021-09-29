import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import styles from "./Title.module.scss";

// eslint-disable-next-line react/prefer-stateless-function
class Title extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.Header}>
          <h1 className={styles.Title}>T O D O</h1>
          <DarkMode />
        </div>
      </header>
    );
  }
}

export default Title;
