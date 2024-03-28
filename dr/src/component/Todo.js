import React, { useState } from "react";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
  };

  const deleteTask = (taskName) => {
    const newTaskList = taskList.filter((task) => task !== taskName);
    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <div classname="addtask">
        <input type="text" placeholder="Enter Task" onChange={handleChange} />
        <buttom onClick={addTask} className="addButton">
          {" "}
          Add Tast
        </buttom>
      </div>
      <div className="showlist"></div>
      <ul>
        {taskList.map((task, index) => {
          return (
            <div>
              <h1>{task}</h1><button onClick={() => deleteTask(task)}> Remove </button>
              
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
