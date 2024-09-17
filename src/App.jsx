import { useState } from "react";
// import TaskList from './TaskList';
import "./Style.css";
function App() {
  let [task, setTask] = useState("");
  let [list, setList] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTask(e) {
    if(task.length>0){
      setList([...list, { task }]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTask("");
  }
  function deleteTask(){
    
  }
  let displayList = <h2>No task Available</h2>;
  if (list.length > 0) {
    displayList = list.map((e, i) => {
      return (
      <li>
        <div className="flex w-2/2 justify-between items-center">
          <h5 className="font-bold text-lg ">{e.task}</h5>
          <button className="bg-red-500 px-3 py-1.5 rounded m-2 font-semibold text-white" onClick={deleteTask}>Delete</button>
        </div>
      </li>
    );
    });
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-black w-full text-white text-center font-bold text-3xl p-3">
        My Todo List
      </h1>
      <div className="container w-2/3 bg-slate-200 flex justify-center">
        <form onSubmit={handleSubmit} className="flex-col w-1/2">
          <div className="flex w-full p-3 justify-between items-center">
            <input
              type="text"
              placeholder="Enter tas  here"
              className="px-3 h-10 w-2/3 text-1xl border-5 border-zinc-800"
              value={task}
              onChange={handleChange}
            />
            <button
              className="bg-black rounded text-white px-3 py-1.5 font-bold"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>

          <div className="p-4">
            <ul>{displayList}</ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
