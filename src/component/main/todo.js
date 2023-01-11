import React, { useEffect, useState } from "react";
import ToDoList from "../list/ToDoList";
import "../main/todo.css";
import ToDoInput from "../ToDoInput";

const Todo = () => {
  const [toDoValue, setToDoValue] = useState("");
  const [allToDo, setallToDo] = useState([]);
  const [error, setError] = useState(false);

  const DeleteToDo = (id) => {
    let temp = [...allToDo];
    if (id == 0) {
      temp.pop();
      setallToDo([...temp]);
      return;
    }
    temp.splice(1, id);
    setallToDo([...temp]);
  };

  const pushValueInTodo = () => {
    if (toDoValue == "") {
      setError(true);
      return;
    }
    let temp = [...allToDo];
    temp.push({ toDoValue });
    setallToDo([...temp]);
    setToDoValue("");
  };

  const editItem = (id) => {
    setToDoValue(allToDo[id].toDoValue);
  };

  useEffect(() => {
    if (toDoValue !== "") {
      setError(false);
    }
  }, [toDoValue]);

  return (
    <div className="container">
      <h1>To-do App</h1>
      <ToDoInput
        toDoValue={toDoValue}
        setToDoValue={setToDoValue}
        pushValueInTodo={pushValueInTodo}
      />
      {error && <span>Please add some value</span>}
      <div className="divider">
        <hr />
      </div>
      <ToDoList allToDo={allToDo} DeleteToDo={DeleteToDo} editItem={editItem} />
    </div>
  );
};

export default Todo;
