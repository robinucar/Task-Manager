import React, { useContext } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import "../Containers/App.css";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">Not Task...</div>
      )}
    </div>
  );
};

export default TaskList;
