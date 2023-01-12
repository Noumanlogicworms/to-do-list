import React from "react";
import "./ToDoInput.css";
const ToDoInput = (props) => {
  return (
    <div className="add-item">
      <input
        placeholder="Add Item"
        type="text"
        className="input"
        required=""
        value={props.inputValue}
        onChange={(e) => {
          props.setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.handleAddBtn();
        }}
      >
        {props.update ? (
          <>
            <span className="span-mother">
              <span>u</span>
              <span>p</span>
              <span>d</span>
              <span>a</span>
              <span>t</span>
              <span>e</span>
            </span>

            <span className="span-mother2">
              <span>u</span>
              <span>p</span>
              <span>d</span>
              <span>a</span>
              <span>t</span>
              <span>e</span>
            </span>
          </>
        ) : (
          <>
            <span className="span-mother">
              <span>A</span>
              <span>d</span>
              <span>d</span>
            </span>

            <span className="span-mother2">
              <span>A</span>
              <span>d</span>
              <span>d</span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default ToDoInput;
