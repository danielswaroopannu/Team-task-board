import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskBoard = ({ tasks, addTask, deleteTask, updateTask }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageSize = 5;

  const totalPages = Math.ceil(filteredTasks.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedTasks = filteredTasks.slice(startIndex, startIndex + pageSize);
  return (
    <section
      className="rounded-xl p-6 
  bg-white/80 backdrop-blur 
  shadow-sm flex flex-col gap-6"
    >
      <TaskForm addTask={addTask} />

      {/* SEARCH */}
      <input
        className="border rounded-lg px-4 py-2
    bg-white
    focus:outline-none focus:ring-2 focus:ring-blue-500
    placeholder:text-gray-400"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* TASK LIST */}
      <TaskList
        tasks={paginatedTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />

      {/* SIMPLE PAGINATION */}
      <div
        className="flex justify-between items-center
  bg-slate-100 rounded-lg p-3"
      >
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default TaskBoard;
