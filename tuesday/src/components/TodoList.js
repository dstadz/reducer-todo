import React, { useReducer } from "react";
import Todo from './Todo'
import {todoReducer, initialState} from '../reducers/reducer'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  console.log(todos)
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
      
    </div>
  );
};

export default TodoList;