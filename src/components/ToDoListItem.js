import React from 'react'

export const ToDoListItem = ({todo, i, handleCompleted, handleClickDelete}) => {
    return (
        <>
            <li
                key={todo.id}
                className={`list-group-item flex ${todo.done && ' done'}`}
            >
                <p
                    className=""
                    onClick={() => handleCompleted(todo.id)}
                >{i + 1} - {todo.desc}</p>
                <button
                    className="btn btn-danger ml-4 btn-sm"
                    onClick={() => handleClickDelete(todo.id)}
                >Delete</button>
            </li>
        </>
    )
}
