function DisplayList({ list, deleteTask }) {
  return (
    <>
      {list.map((e, i) => {
        let key = i;
        return (
          <li key={i}>
            <div className="flex w-2/2 justify-between items-center">
              <h5 className="font-semibold text-lg ">{e.task}</h5>
              <button
                className="bg-red-500 px-3 py-1.5 rounded m-2 font-semibold text-white"
                onClick={() => {
                  deleteTask(key);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default DisplayList;
