import React, { useState } from "react";
import TodoItemCard from "./TodoItemCard";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      return;
    }
    const task = { id: Date.now(), description: newTask };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">To Do List</h1>
      <form className="flex mb-4" onSubmit={onSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 rounded-l-md border focus:outline-dashed"
          placeholder="Add new task"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <TodoItemCard key={task.id} task={task}  onDelete = {deleteHandler}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
