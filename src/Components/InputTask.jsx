import React from 'react'

export default function InputTask({task,handleChange}) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter tas  here"
        className="px-3 h-10 w-2/3 text-1xl border-5 border-zinc-800"
        value={task}
        onChange={handleChange}
      />
    </>
  );
}
