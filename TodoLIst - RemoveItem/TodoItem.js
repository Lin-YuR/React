import React from 'react'

const TodoItem = (props) =>{
    const handleClick = () =>{
        props.onItemClick(props.index)
    }
    return <li onClick={handleClick}>{props.text}</li>
}

export default TodoItem