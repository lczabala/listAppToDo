import React, { useReducer, useEffect } from 'react';
import {todoReducer} from './todoReducer';
import { useForms } from '../hooks/useForms';

export const ToDoApp = () => {

    const init = () =>{
        return JSON.parse(localStorage.getItem('todo')) || [];
    }

    const [todo, dispatch] = useReducer(todoReducer, [], init);

    //Tras llamar al useForm, re recibe el valor del input y la función para tomar el cambio del input
    const [{taskDescription}, handleOnChange, reset] = useForms({
        //Name que se colocó al input
        taskDescription: ''
    })

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (taskDescription.trim().length <= 1) {
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            desc: taskDescription,
            done: false
        }

        //En el action se define el tipo de acción a realizar, en base a esto, en el reducer se evalúa ese tipo para realizar la actualización de estado
        //En el action se envia tambien el nuevo dato (objeto) que se va a enviar al reducer para la actualización del estado
        const action = {
            type: 'add',
            payload: newTask
        }

        //El dispatch nos permite disparar la acción al reducer
        dispatch(action);

        reset();
    }

    const handleClickDelete = (id) =>{
        
        const action = {
            type: 'delete',
            payload: id
        }
       
        dispatch(action);
    }

    return (
        <div className="container-fluid text-center">
            <h1>ToDo App</h1>
            <div className="container addTask col-6">
                <h5>Add ToDo</h5>
                <div className="row justify-content-center">                    
                    <div className="flex"> 
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">                        
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Task name"                                     
                                    name= "taskDescription"
                                    value= {taskDescription}
                                    onChange= {handleOnChange}
                                />
                                <button type="submit" className="btn btn-primary ml-4 btn-sm">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="row justify-content-center">
                <ul className="list-group col-6 padding-0">
                    {
                        todo.map((todo, i) => (
                            <li
                                key={todo.id}
                                className="list-group-item flex"
                            >
                                <p>{i + 1} - {todo.desc}</p>
                                <button 
                                    className="btn btn-danger ml-4 btn-sm"
                                    onClick={()=> handleClickDelete(todo.id)}
                                >Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
