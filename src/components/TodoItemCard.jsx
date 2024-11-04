import React from 'react'

const TodoItemCard = ({task,onDelete}) => {
  return (
    <div>
      <li className='flex items-center justify-between p-2 rounded mb-2 shadow bg-white'>
        <span>{task.description}</span>
        <button  className= "bg-red-500 hover:bg-red-600 rounded py-2 px-4 text-white "  onClick={() => onDelete(task.id)} >Delete</button>

      </li>
    </div>
  )
}

export default TodoItemCard
