import React, { useReducer, useState } from "react";


export const initialState = [
  {
    item:'finish app',
    completed:false,
    id: Date.now
  },{
    item:'save the world',
    completed:false,
    id: Date.now
  },{
    item:'go to shool',
    completed:false,
    id: Date.now
  }
]

export const todoReducer = (state, action) => {
  return
}

