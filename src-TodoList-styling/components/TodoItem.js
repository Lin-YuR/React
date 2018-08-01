import React from 'react'

const TodoItem = ({title, style, onItemClick}) => (
    <li
        onClick={() =>{
            onItemClick()
        }}
        style={style}
        >
        {title}
    </li>
)
export default TodoItem