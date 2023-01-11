import React from "react";
import "./ToDoList.css";
const ToDoList = (props) => {
  return (
    <div className="list-item-container">
      {props.allToDo.map((todo, id) => {
        return (
          <div className="list-item">
            <p className="list-items">{todo.toDoValue}</p>
            <div className="buttons">
              <button
                onClick={() => {
                  props.editItem(id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  props.DeleteToDo(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
