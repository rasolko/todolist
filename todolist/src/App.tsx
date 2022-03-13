import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from './Todolist';

export type TodolistsObjectType = {
  id: string
  title: string
  filter: string
}
function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let [todolists, setTodolists] = useState<Array<TodolistsObjectType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]);
    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Bread', isDone: true}
        ]
    });


    return (
        <div className="App">
          {todolists.map( el => {
            return <Todolist filter={el.filter} title={el.title}/>
          })}
        </div>
    );
}

export default App;
