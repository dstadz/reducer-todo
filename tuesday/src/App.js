import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import './App.css';
import { todoReducer, initialState } from './reducers/reducer'


function App() {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleChange = e => {

  }
  
  return (
    <div className="App">
     <form>
       <input
       type='text'
       name='name'
       onChange={handleChange}
       />
     </form>
    </div>
  );
}

export default App;
