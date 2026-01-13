import { useState } from "react";

const TaskCard = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [assignee, setAssignee] = useState(task.assignee);

  function getStatusStyle(status) {
    switch (status) {
      case "Todo":
        return "bg-yellow-100 text-yellow-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Done":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  function handleSave() {
    if (!task) return;
    updateTask({
      ...task,
      title,
      status,
      assignee,
    });
    setIsEditing(false);
  }
  return (
    <div
      className="rounded-lg p-4 flex justify-between items-center
  bg-white hover:bg-slate-50
  border border-slate-200
  shadow-sm hover:shadow-md
  transition-all"
    >
      {/* LEFT */}
      <div className="flex flex-col gap-2">
        {isEditing ? (
          <>
            <input
              className="border p-1 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <select
              className="border p-1 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            <input
              className="border p-1 rounded"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder="Assignee"
            />
          </>
        ) : (
          <>
            <h3 className="font-medium">{task.title}</h3>
            <p className="text-sm text-gray-500">
              Assigned to: {task.assignee}
            </p>
          </>
        )}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {!isEditing && (
          <span
            className={`text-xs px-2 py-1 rounded ${getStatusStyle(
              task.status
            )}`}
          >
            {task.status}
          </span>
        )}

        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-sm text-green-600 hover:text-green-800 font-medium"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="text-sm text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
