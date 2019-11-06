//import React, { useReducer, useState } from "react";


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
      const next = {
        item:action.payload,
        completed:false,
        id:Date.now()
      }
      return[...state, next]
      //case 'CLEAR_COMPLETED':
      //case 'TOGGLE_COMPLETE :
      default:
        throw new Error("No action matched!");
        
        
      }
      console.log(state)
  return
}

