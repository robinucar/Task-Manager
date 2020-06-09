import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";

const Task = (props) => {
  const { task } = props;
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <span className="time">{task.time}</span>
      <span>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>

        <span className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </span>
      </span>
    </li>
  );
};

export default Task;
