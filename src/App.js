import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import SignInForm from "./components/SignInForm";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const handleEdit = (id) => {
    const updatedText = prompt("Enter new task text");
    const updatedDay = prompt("Enter new task day");
    if (updatedText && updatedDay) {
      const updatedTask = {
        text: updatedText,
        day: updatedDay,
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
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header
            showInfo={() => setShowInfo(!showInfo)}
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          {showAddTask && <AddTask onAdd={addTask} />}
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/tasks" /> : <SignInForm />}
            />
            <Route
              path="/tasks"
              element={
                isAuthenticated ? (
                  <>
                    <h3>Active Tasks:</h3>
                    <Tasks
                      tasks={tasks.filter(task => !task.isDone)}
                      onDelete={deleteTask}
                      onToggle={toggleisDone}
                      onEdit={handleEdit}
                      onReminder={Reminder}
                    />
                    <h3>Completed Tasks:</h3>
                    <Tasks
                      tasks={tasks.filter(task => task.isDone)}
                      onDelete={deleteTask}
                      onToggle={toggleisDone}
                      onEdit={handleEdit}
                      onReminder={Reminder}
                    />
                  </>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
