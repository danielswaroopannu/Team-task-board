import TaskCard from "./TaskCard";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="flex flex-col gap-4">
      {tasks.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p className="text-sm">No tasks found</p>
        </div>
      )}

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
