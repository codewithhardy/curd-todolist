import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "../App.css";

function TodoList() {
  // To access data from redux store use useSelector
  let todos = useSelector((state) => state);

  return (
    <div className="showItems">
      {todos.map((todo) => {
        return <TodoItem className="eachItem" key={todos.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
