import React from 'react'
import Todo from './Todo'

const todolist = ({todos,setTodos}) =>{
    //console.log(todos)
    return (
        <div className = 'todolist-container'>
            <ul className = 'todolist'>
                {todos.map(todo => (
                    <Todo 
                    text = {todo.text} 
                    key = {todo.id}
                    todos = {todos}
                    todo = {todo}
                    setTodos = {setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default todolist;