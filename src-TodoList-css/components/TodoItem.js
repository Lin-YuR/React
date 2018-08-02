import React from 'react'

const TodoItem = ({title, onItemClick, isCompleted}) => (
    <li
        className={isCompleted ? 
            "list-group-item list-group-item-danger" :
            "list-group-item list-group-item-success"}
    >
        <input 
            type="checkbox"
            defaultChecked={isCompleted}
            onClick={onItemClick}
        />
        {' '}
        {title}
    </li>
)
export default TodoItem