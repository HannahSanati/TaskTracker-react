import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Info from "./components/Info";
// import Card from "./components/card";

// our events are stored in our App.js
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  // State: we use it here bcs we wanna be able to use this whitin another components
  // if we keep it in Tasks.js we could only use that in that specific componenet
  // setTask([...tasks, {}])  add a new object to tasks

  const [showInfo, setShowInfo] = useState(false);

  //Add Task
  const addTask = (task) => {
    // create id by myself
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Edit Task
  const editTask = (id) => {
    setTasks(tasks.map((task) => task.id == id));
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle isDone
  const toggleisDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Reminder
  const Reminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Toggle Reminder
  // const toggleReminder = (id) => {
  // setTasks(
  //   tasks.map((task) =>
  //     task.id === id ? { ...task, reminder: !task.reminder } : task
  //   )
  //   );
  // };

  return (
    <>
      <div className="container">
        <Header
          showInfo={() => setShowInfo(!showInfo)}
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showInfo && <Info showInfo={Info} />}
        {/* && it means if its true then */}
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleisDone}
            onEdit={editTask}
            onReminder={Reminder}
          />
        ) : (
          "No Tasks To Show"
        )}
      </div>
      {/* <Card></Card> */}
    </>
  );
};

export default App;
