// import Header from "../components/Header";
// import TaskBoard from "../components/TaskBoard";
// import Footer from "../components/Footer";

// const Home = ({ tasks, addTask, deleteTask, updateTask }) => {
//   return (
//     <div className="flex flex-col gap-6">
//       <Header />
//       <TaskBoard
//         tasks={tasks}
//         addTask={addTask}
//         deleteTask={deleteTask}
//         updateTask={updateTask}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import Header from "../components/Header";
import TaskBoard from "../components/TaskBoard";
import Footer from "../components/Footer";

const Home = ({ tasks, addTask, deleteTask, updateTask }) => {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <TaskBoard
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
      <Footer />
    </div>
  );
};

export default Home;
