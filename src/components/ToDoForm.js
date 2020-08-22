import React from 'react'
import { useForms } from '../hooks/useForms'

export const ToDoForm = ({handleAddNewTask}) => {
    //Tras llamar al useForm, re recibe el valor del input y la función para tomar el cambio del input
    const [{taskDescription}, handleOnChange, reset] = useForms({
        //Name que se colocó al input
        taskDescription: ''
    })

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
        handleAddNewTask(newTask);        
        reset();
    }

    return (
        <div className="container addTask col-6">
            <h5>Add Task</h5>
            <div className="row justify-content-center">
                <div className="flex">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Task name"
                                name="taskDescription"
                                value={taskDescription}
                                onChange={handleOnChange}
                            />
                            <button type="submit" className="btn btn-primary ml-4 btn-sm">Add Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
