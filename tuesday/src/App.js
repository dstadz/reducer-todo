import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import './App.css';

const initialState = [
  {
    item:'finish app',
    completed:false
  },{
    item:'save the world',
    completed:false,
  },{
    item:'go to shool',
    completed:false
  }
]

function App() {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  
  return (
    <div className="App">
     <form>
       <input
       type='text'
       name='name'
       onChange={handleChange}
       value={todo}
       />
     </form>
    </div>
  );
}

export default App;
