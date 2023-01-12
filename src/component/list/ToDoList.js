import React from "react";
import "./ToDoList.css";
const ToDoList = (props) => {
  return (
    <div className="list-item-container">
      {props.toDoList
        // .slice(0)
        // .reverse()
        .map((todo, id) => {
          return (
            <div className="list-item">
              <p className="list-items">{todo.inputValue}</p>
              <div className="buttons">
                <button
                  onClick={() => {
                    props.handleEditBtn(id);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    props.handleDeleteBtn(id);
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
