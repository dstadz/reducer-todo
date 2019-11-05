import React from 'react'

const Todo = props => {
  console.log('todo')
  return (
    <div
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      <p>{props.todo.item}</p>
			<p>{ props.todo.id}</p>
    </div>
  );
};

export default Todo;