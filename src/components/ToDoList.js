import React from 'react'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({todo, handleCompleted, handleClickDelete}) => {
    return (
        <>
            <ul className="list-group col-6 padding-0">
                {
                    todo.map((todo, i) => (
                        <ToDoListItem 
                            key = {todo.id} 
                            todo = {todo} 
                            i = {i} 
                            handleCompleted = {handleCompleted} 
                            handleClickDelete = {handleClickDelete}
                        /> 
                    ))
                }
            </ul>
        </>
    )
}
