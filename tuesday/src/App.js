import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import './App.css';
import TodoForm from './components/TodoForm'
import { todoReducer, initialState } from './reducers/reducer'


function App() {


  
  return (
    <div className="App">
     <TodoForm />
    </div>
  );
}

export default App;
