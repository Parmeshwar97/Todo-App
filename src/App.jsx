import "./Style.css";
import { useState } from "react";
import DisplayList from "./Components/DisplayList";
import AddButton from "./Components/AddButton";
import InputTask from "./Components/InputTask";
function App() {
  let [task, setTask] = useState("");
  let [list, setList] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTask() {
    if (task.length > 0) {
      setList([...list, { task }]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTask("");
  }
  function deleteTask(key) {
    let cpyList = [...list];
    cpyList.splice(key, 1);
    setList(cpyList);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-black w-full text-white text-center font-bold text-3xl p-3">
        My Todo List
      </h1>
      <div className="m-8 rounded pt-5 w-1/3 bg-slate-200 flex justify-center">
        <form onSubmit={handleSubmit} className="flex-col w-4/5">
          <div className="flex w-full p-3 justify-between items-center">
            <InputTask task={task} handleChange={handleChange} />
            <AddButton task={task} addTask={addTask} />
          </div>
          <div className="p-4">
            <ul>
              {list.length > 0 ? (
                <DisplayList list={list} deleteTask={deleteTask} />
              ) : (
                <h2>No task Available</h2>
              )}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
