import React, { useReducer, useState } from "react";


export const initialState = [
  {
    item:'finish app',
    completed:false,
    id: 1
  },{
    item:'save the world',
    completed:false,
    id: 2
  },{
    item:'go to school',
    completed:false,
    id: 3
  }
]
const todos = [...initialState]
export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return{...todos}
    //case 'CLEAR_COMPLETED':
    //case 'TOGGLE_COMPLETE :

  }
  return
}

