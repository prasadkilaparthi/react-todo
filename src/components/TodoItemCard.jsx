import { useState } from "react";

function TodoItemCard({ task, onDelete, onToggleCompletion, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onEdit(task.id, newDescription); // Save changes when editing is toggled off
    }
  };

  return (
    <li
      className={`flex items-center justify-between p-2 rounded mb-2 shadow ${
        task.completed ? "bg-green-200" : "bg-white"
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="flex-1 px-2 py-1 border rounded"
        />
      ) : (
        <span
          className={`${task.completed ? "line-through text-gray-500" : ""}`}
        >
          {task.description}
        </span>
      )}

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          className="form-checkbox"
        />
        <button
          onClick={handleEdit}
          className="text-blue-500 hover:text-blue-700"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItemCard;
