import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaBell } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, handleEdit, Reminder }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <div
        onDoubleClick={() => onToggle(task.id)}
        className={`task ${task.isDone ? "done" : ""}`}
      >
        <h5>
          {task.text} <FaBell onClick={() => Reminder(task.id)} />
          <FaEdit
             onClick={() => {
             handleEdit(task.id);
            }}
            style={{
              color: "mediumseagreen",
              cursor: "pointer",
            }}
          />
          <AiFillDelete
            onClick={() => onDelete(task.id)}
            style={{
              color: "indianred",
              cursor: "pointer",
            }}
          />{" "}
        </h5>
        <p>{task.day}</p>
      </div>
    </div>
  );
};

export default Task;
