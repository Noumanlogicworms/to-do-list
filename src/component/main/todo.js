import React, { useEffect, useState } from "react";
import ToDoList from "../list/ToDoList";
import "../main/todo.css";
import ToDoInput from "../ToDoInput";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState(false);
  const [itemId, setItemId] = useState();

  const handleAddBtn = () => {
    if (inputValue == "") {
      setError(true);
      return;
    }
    if (update == true) {
      let temp = [...toDoList];
      temp[itemId] = { inputValue };
      setToDoList([...temp]);
      setUpdate(false);
      setInputValue("");
    } else {
      let temp = [...toDoList];
      temp.push({ inputValue });
      setToDoList([...temp]);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (inputValue !== "") {
      setError(false);
    }
  }, [inputValue]);

  const handleEditBtn = (id) => {
    setItemId(id);
    setUpdate(true);
    setInputValue(toDoList[id].inputValue);
  };

  const handleDeleteBtn = (id) => {
    let temp = [...toDoList];
    if (id == 0) {
      temp.pop();
      setToDoList([...temp]);
      return;
    }
    temp.splice(id, 1);
    setToDoList([...temp]);
  };

  return (
    <div className="container">
      <h1 className="heading">To-do App</h1>
      <ToDoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddBtn={handleAddBtn}
        update={update}
      />
      {error && <span className="error">Please add some value</span>}
      <div className="divider">
        <hr />
      </div>

      <ToDoList
        toDoList={toDoList}
        handleDeleteBtn={handleDeleteBtn}
        handleEditBtn={handleEditBtn}
      />
    </div>
  );
};

export default Todo;
