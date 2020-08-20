import React, { useReducer } from 'react';
import {todoReducer} from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const ToDoApp = () => {

    const [todo] = useReducer(todoReducer, initialState)

    return (
        <div className="container-fluid">
            <h1>ToDo App</h1>

            <div>
                <ul>
                    <li>Hola 1</li>
                    <li>Hola 2</li>
                    <li>Hola 3</li>
                </ul>
            </div>
        </div>
    )
}
