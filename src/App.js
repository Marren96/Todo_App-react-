import React, {useState} from 'react'
import Form from './Components/Form'
import Todolist  from './Components/todolist';

const styleApp = {
  textAlign : 'center'
}

function App() {

  const [inputText,setInputText] = useState('')
  const[todos , setTodos] = useState([])

  return (
    <div className="App" style = {styleApp}>
      <h1>Marren's To Do React App.</h1>
      <Form 
      inputText = {inputText}
      setInputText = {setInputText} 
      todos = {todos}
      setTodos = {setTodos}
      />
      <Todolist 
      todos = {todos}
      setTodos = {setTodos}
      />
    </div>
    
  );
}

export default App;
