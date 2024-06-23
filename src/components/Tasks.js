import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onEdit, onReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
          onToggle={onToggle} 
          handleEdit={onEdit} 
          Reminder={onReminder} 
        />
      ))}
    </>
  );
};

export default Tasks;
