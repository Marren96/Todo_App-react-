import React from 'react'

let styleForm = {
    marginLeft: '450px',
    display :'flex'
}

let stylesInput = {
  width: '30%',
  outline: 'none',
  border: 'none',
  backgroundColor: 'aquamarine',
  marginRight : '10px',
  marginBottom : '5px',
  boxShadow : '2px 2px rgb(0,0,0,2.5)',
  height : '30px',
  borderRadius : '5px',

  fontSize : '22px',
  fontWeight : 'bolder',
  color : 'green'
}

let styleButton = {
    backgroundColor : 'black',
    color : 'white',
    outline : 'none',
    border : 'none',
    boxShadow : '2px 2px rgb(50,50,70,5.5)',
    borderRadius : '100%',
    height : '40px',
    width : '40px',
    marginRight: '20px'
}
const styleDiv = {
    color: 'black',
    backgroundColor :'cyan',
    fontSize : '20px', 
    //length : '90px',
    outline : 'none',
    border : 'none',
    marginTop : '7px',
    borderRadius : '5px'
}

const Form = ({setInputText,setTodos,todos,inputText}) =>{

    const inputTextHandler = e =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodosHandler = e =>{
        e.preventDefault();
        setTodos([
            ...todos,{
                text : inputText,completed : false , id : Math.floor(Math.random()*100)
            }
        ])
        setInputText('');
    }


    return(
        <form className = 'form-input' style = {styleForm}>
            <input
                type = 'text'
                placeholder = 'Enter your to do...'
                className = 'Todo-input'
                style = {stylesInput}
                onChange = {inputTextHandler}
                value = {inputText}
            />
            <button onClick = {submitTodosHandler} className = 'todo-button' type = 'submit' style = {styleButton}>+</button>

            <div className='select' >
                <select name = 'todos' className = 'todo-list' style = {styleDiv}>
                    <option value = 'all'>all</option>
                    <option value = 'completed'>completed</option>
                    <option value = 'incomplete'>Incomplete</option>
                </select>
            </div>
        </form>
       
    )
}
 export default Form;