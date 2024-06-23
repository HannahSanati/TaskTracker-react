import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onEdit, onReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
          onReminder={onReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
