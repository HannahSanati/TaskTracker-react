import React, { useEffect, useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [done, setDone] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setShowError(true);
      return;
    }
    onAdd({ text, day, reminder, done });

    setText("");
    setDay("");
    setReminder(false);
    setDone(false);
  };

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
          className="form-control"
        />
        {showError && <p className="error-msg">Please add a Task...👆</p>}
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add  day and time"
          className="form-control"
        />
      </div>
      <div className="form-control-check">
        <label>Set Reminder</label>
        <input 
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input 
      type="submit" 
      value="Save Task" 
      className="btn btn-block" />
    </form>
  );
};

export default AddTask;
