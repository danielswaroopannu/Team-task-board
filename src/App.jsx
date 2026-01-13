import { useState } from "react";
import Home from "./pages/Home";

const App = () => {
  const [tasks, setTasks] = useState([]);
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  function updateTask(updatedTask) {
    const editTask = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTasks(editTask);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200">
      <div className="max-w-5xl mx-auto p-6 bg-slate-50 rounded-xl shadow-sm">
        <Home
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default App;
