import React from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext({
   todo: [
    {
        id: 1,
        todo: "final",
        completed: false
    }
   ],
   addTodo: (id) => {},
   updateTodo: (id, todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: (id) => {}
}) 

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
  return useContext(TodoContext);
}