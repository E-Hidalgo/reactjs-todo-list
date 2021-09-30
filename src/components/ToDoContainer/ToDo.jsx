/* eslint-disable react/no-unused-state */
/* eslint-disable prettier/prettier */
import React from "react";
import { v4 as uuidv4 } from 'uuid'
import FormToDo from "../FormToDo";
import TaskList from "../TaskList";
import TaskFooter from "../TaskFooter";
import styles from "./ToDo.module.scss";

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      toDoList: [],
      toDoItem: {
        id: "",
        text: "",
        done: "",
        isEditing: ""
      }
    }
  }

  // GET INPUT VALUE OF TODO ITEM
  handleChangeInput = (e) => {
    this.setState({
      toDoItem: {
        id: uuidv4(),
        text: e.target.value,
        done: false,
        isEditing: false
      }
    })
  }

  // ADD TODO ITEM TO LIST
  addToDoItem = (e) => {
    e.preventDefault();
    const { toDoItem, toDoList } = this.state;
    const newItem = toDoItem;
    if(newItem.text!==""){
      const newList = [...toDoList, newItem];
      this.setState({
        toDoList: newList,
        toDoItem: {
          text: "",
          id: "",
          done: "",
          isEditing: ""
        }
      })
    }
  }

  // DELETE TODO ITEM
  deleteToDoItem = (keyId) => {
    const { toDoList } = this.state;
    const filteredList = toDoList.filter((item) => item.id !== keyId);
    this.setState({
      toDoList: filteredList
    })
  }

  // UPDATE TODO ITEM
  updateToDoItem = (newText, keyId) => {
    const { toDoList } = this.state; 
    toDoList.forEach((item) => {
      if(item.id === keyId) {
        item.text = newText; // eslint-disable-line no-param-reassign
      }
    })
    this.setState({
      toDoList: toDoList
    })
  }

  render() {
    const { toDoList, toDoItem } = this.state;
    return (
      <section className={styles.listContainer}>
        <FormToDo handleChangeInput={this.handleChangeInput} addToDoItem={this.addToDoItem} toDoItem={toDoItem}/>
        <TaskFooter />
        <TaskList toDoList={toDoList} deleteToDoItem={this.deleteToDoItem} updateToDoItem={this.updateToDoItem}/>
      </section>
    );
  }
}

export default ToDoContainer;