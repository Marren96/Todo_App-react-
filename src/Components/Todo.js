import React from 'react'


const style = {
    display : 'flex',
    marginLeft : '450px',
    marginBottom : '10px'
}

const styleItem = {
    backgroundColor : 'white',
    //length : '30%'
    listStyle: 'none',
    marginRight : '10px'
}

const styleCheck = {
    backgroundColor : 'cyan',
    //marginRight : '5px',
    outline : 'none',
    border : 'none'
}

const styleTrash = {
    backgroundColor : 'orange',
    outline : 'none',
    border : 'none'
}

const completed = {
    color : 'black',
    opacity : '0.5'
}

const Todo = ({text,todos,todo,setTodos,completed}) =>{

    const deleteHandler = () => {
        setTodos(todos.filter(elem => elem.id !== todo.id))
    }

    const completeHandler = () =>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item , completed : !completed
                }
            }
            return item;
        }))
    }

    return (
        <div className = 'todo-container' style = {style}>
            <li className = {`todo-item ${todo.completed ? {completed} : ''}`} style = {styleItem}>{text}</li>
            <button onClick = {completeHandler} className = 'check-icon' style = {styleCheck}><i class="fa fa-check"></i></button>
            <button onClick = {deleteHandler} className = 'trash-icon' style = {styleTrash}><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>
    )
}
export default Todo;