import React, { useReducer, useEffect } from 'react';
import {ToDoList} from './ToDoList';
import {todoReducer} from './todoReducer';
import { ToDoForm } from './ToDoForm';

export const ToDoApp = () => {

    const init = () =>{
        return JSON.parse(localStorage.getItem('todo')) || [];
    }

    const [todo, dispatch] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);    

    const handleClickDelete = (id) =>{   
        //En el action se define el tipo de acción a realizar, en base a esto, en el reducer se evalúa ese tipo para realizar la actualización de estado
        //En el action se envia tambien el nuevo dato (objeto) que se va a enviar al reducer para la actualización del estado     
        const action = {
            type: 'delete',
            payload: id
        } 
        //El dispatch nos permite disparar la acción al reducer      
        dispatch(action);
    }

    const handleCompleted = (id) =>{
        dispatch({
            type: 'completed',
            payload: id
        });
    }

    //Nos permite agregar una nueva tarea a la lista. Recibe los dayos de la nueva tarea desde el componente que posee el formulario
    const handleAddNewTask = (newTask) =>{
        dispatch({
            type: 'add',
            payload: newTask
        })
    }

    return (
        <div className="container-fluid text-center">
            <h1>ToDo App</h1>
            <ToDoForm handleAddNewTask = {handleAddNewTask} />
            
            <div className="row justify-content-center">
                <ToDoList todo = {todo} handleClickDelete = {handleClickDelete} handleCompleted = {handleCompleted}/>
            </div>
        </div>
    )
}
