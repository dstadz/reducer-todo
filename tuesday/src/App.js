import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoForm'
import { todoReducer, initialState } from './reducers/reducer'


function App() {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleChange = e => {

  }
  
  return (
    <div className="App">
     <TodoForm />
     <TodoList />
    </div>
  );
}

export default App;
