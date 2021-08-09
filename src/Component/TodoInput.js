import React, { useState } from "react";
import { addTodo } from "../redux/action";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

import "../App.css";

function TodoInput() {
  // to change input state use useState hooks
  let [name, setName] = useState();
  // to dispatch an action
  let dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>List Of Programming Languages!</h1>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Add Category"
          />
          <button
            onClick={() => {
              dispatch(
                addTodo({
                  id: uuid(),
                  name: name,
                })
              );
              setName("");
            }}
          >
            <i className="fa fa-plus add-btn" title="Add Category"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
