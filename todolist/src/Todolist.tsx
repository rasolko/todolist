import React from 'react';
import {TodolistsObjectType} from './App';

type TodolistPropsType = {
    title: string
    filter: string
}
export const Todolist: React.FC<TodolistPropsType> = (props) => {
    return (
        <div>
            <h3>
                {props.title}
                <button>x</button>
            </h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox"/>
                    <span>task 1</span>
                    <button>x</button>
                </li>
                <li>
                    <input type="checkbox"/>
                    <span>task 2</span>
                    <button>x</button>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};