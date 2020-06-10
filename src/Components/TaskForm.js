import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../Context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("00:00");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title, time);
      setTitle("");
      setTime("00:00");
    } else {
      editTask(title, time, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setTime(editTask.time);
    } else {
      setTitle("");
      setTime("00:00");
    }
  }, [editItem]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={title}
          type="text"
          className="task-input"
          placeholder="Add Task..."
          required
        />

        <input
          onChange={handleTimeChange}
          value={time}
          className="task-input"
          placeholder="Add Task..."
          type="time"
          id="appt"
          min="00:00"
          max="23:59"
          required
        />

        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            {editItem ? "Edit Task" : "Add Task"}
          </button>
          <button className="btn clear-btn" onClick={clearList}>
            Clear Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
