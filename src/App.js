import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Info from "./components/Info";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task, isDone: false };
    setTasks([...tasks, newTask]);
  };

  // Edit Task
  const editTask = (id, updatedTask) => {
    console.log(`Editing task with id: ${id}`);
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, ...updatedTask } : task
    ));
  };

  const handleEdit = (id) => {
    const updatedText = prompt("Enter new task text");
    const updatedDay = prompt("Enter new task day");
    if (updatedText && updatedDay) {
      const updatedTask = {
        text: updatedText,
        day: updatedDay
      };
      editTask(id, updatedTask);
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    console.log(`Deleting task with id: ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle isDone
  const toggleisDone = (id) => {
    console.log(`Toggling isDone for task with id: ${id}`);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // Reminder
  const Reminder = (id) => {
    console.log(`Toggling reminder for task with id: ${id}`);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        showInfo={() => setShowInfo(!showInfo)}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showInfo && <Info showInfo={Info} />}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <>
          <h3>Active Tasks</h3>
          <Tasks
            tasks={tasks.filter(task => !task.isDone)}
            onDelete={deleteTask}
            onToggle={toggleisDone}
            onEdit={handleEdit}
            onReminder={Reminder}
          />
          <h3>Completed Tasks</h3>
          <Tasks
            tasks={tasks.filter(task => task.isDone)}
            onDelete={deleteTask}
            onToggle={toggleisDone}
            onEdit={handleEdit}
            onReminder={Reminder}
          />
        </>
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
