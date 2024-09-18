import React from 'react'

export default function AddButton({task,addTask,handleChange}) {
  return (
    <>
      <button
        className="bg-black rounded text-white px-3 py-1.5 font-bold"
        onClick={addTask}
      >
        Add Task
      </button>
    </>
  );
}
