import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [status, setStatus] = useState("Todo");
  const [assignee, setAssignee] = useState("");

  function handleAddTask() {
    if (!taskTitle) return;

    addTask({
      id: Date.now(),
      title: taskTitle,
      status,
      assignee,
    });

    setTaskTitle("");
    setAssignee("");
    setStatus("Todo");
  }
  return (
    <div className="border p-4 rounded">
      <h2 className="font-semibold mb-3">Add Task</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          className="border p-2 rounded"
          placeholder="Title"
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
        />
        <select className="border p-2 rounded" value={status} onChange={(e)=>{setStatus(e.target.value)}}>
          <option>Todo</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <input className="border p-2 rounded" placeholder="Assignee" value={assignee} onChange={(e)=>setAssignee(e.target.value)}/>
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TaskForm;
