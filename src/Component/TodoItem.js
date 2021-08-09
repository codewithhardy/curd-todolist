import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/action";
import "../App.css";

function TodoItem({ todo }) {
  // to change input state by after edit
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  //Edit the item
  //  get the id and name of the data which user clicked to edit
  //  set the toggle mode to change the submit button into edit button
  // now update the value of the setInput with the new updated value edit
  // to pass the current element id to new state variable for referance

  return (
    <div>
      <div className="">
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          className=" "
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (editable) {
              setName(todo.name);
            }
            setEditable(!editable);
          }}
        >
          {/* ternary operator  */}
          {editable ? "Update" : "Edit"}
        </button>
        <button className="" onClick={() => dispatch(deleteTodo(todo.id))}>
          <i class="far fa-window-close"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
