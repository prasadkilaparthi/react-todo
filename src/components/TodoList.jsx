import { useState } from "react";
import TodoItemCard from "./TodoItemCard";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all"); // New state for filtering

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const task = { id: Date.now(), description: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Edit a task description
  const editTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  // Filter tasks based on filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // 'all' filter shows all tasks
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <form onSubmit={handleAddTask} className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 rounded-l-md border focus:outline-none"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      <div className="flex justify-between mb-4">
        <button
          onClick={() => setFilter("all")}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Incomplete
        </button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <TodoItemCard
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggleCompletion={toggleTaskCompletion}
            onEdit={editTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
