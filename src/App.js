import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // const handleDeleteTask = (index) => {
  //   const updatedTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(updatedTasks);
  // };

  const handleDeleteTask = (index) => {
    // Copiamos el array de tareas
    const updatedTasks = [...tasks];

    // Eliminamos la tarea en el índice especificado
    updatedTasks.splice(index, 1);

    // Actualizamos el estado con la nueva lista de tareas
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    const editedTask = prompt("Edit task:", tasks[index]);
    if (editedTask !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
