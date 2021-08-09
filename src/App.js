import "./App.css";
import TodoInput from "./Component/TodoInput";

import TodoList from "./Component/TodoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div className="App"></div>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
