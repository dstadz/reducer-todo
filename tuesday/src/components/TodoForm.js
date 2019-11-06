import React, { useState, useReducer } from "react";
import {todoReducer, initialState} from '../reducers/reducer'


const TodoForm = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  const [newTodo, setNewTodo] = useState('')

  console.log(newTodo)

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const AddTodo = () => {
    console.log('addtodos')
    dispatch({type:'ADD_TODO', payload:todos})
  }
  const handleSubmit = e => {
    e.preventDefault()
    AddTodo(newTodo)
    this.setState({ newTodo:''})
  }


  return(
    <form onSubmit={ handleSubmit } >
      <input 
        type="text" 
        name="todo"
        id="todo" 
        value={ newTodo } 
        onChange={ handleChange } 
      />
        <button onClick={AddTodo}>Add Todo</button>
    </form>
  )
}


export default TodoForm
