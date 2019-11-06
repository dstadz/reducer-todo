import React, { useState, useReducer } from "react";
import Todo from './Todo'

import {todoReducer, initialState} from '../reducers/reducer'


const TodoForm = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  const [newTodo, setNewTodo] = useState('')


  const handleChange = e => {
    setNewTodo(e.target.value);
  };

 
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type:'ADD_TODO', payload:newTodo})
    setNewTodo('')
  }


  return(
    <div>
      <div className="todo-list">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
      <form>
        <input 
          type="text" 
          name="todo"
          id="todo" 
          value={ newTodo } 
          onChange={ handleChange } 
        />
        <button onClick={ handleSubmit }>Add Todo</button>
      </form>
    </div>
  )
}


export default TodoForm
