import React from "react";
import "./ToDoInput.css";
const ToDoInput = (props) => {
  return (
    <div className="add-item">
      <input
        placeholder="Add Item"
        type="text"
        class="input"
        required=""
        value={props.toDoValue}
        onChange={(e) => {
          props.setToDoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.pushValueInTodo();
        }}
      >
        <span class="span-mother">
          <span>A</span>
          <span>d</span>
          <span>d</span>
        </span>
        <span class="span-mother2">
          <span>A</span>
          <span>d</span>
          <span>d</span>
        </span>
      </button>
    </div>
  );
};

export default ToDoInput;
