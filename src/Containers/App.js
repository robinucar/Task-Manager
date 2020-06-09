import React from "react";
import "./App.css";
import TaskList from "../Components/TaskList";
import TaskForm from "../Components/TaskForm";
import Header from "../Components/Header";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;
