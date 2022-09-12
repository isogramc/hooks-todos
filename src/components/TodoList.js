import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { Icon } from '@iconify/react';

export default function TodoList(){
    const {state, dispatch} = useContext(TodoContext)
 return (
     <div className="container mx-auto max-w-md text-center text-white font-mono">
         <ul className="list-reset p-0">
             {state.todos.map(todo => (
                 <li key={todo.id} className="flex items-center bg-green-dark border-black border-2 my-2 py-4">
                     <span
                         onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo})}
                         className={`flex-1 ml-12 cursor-pointer p-1 ${todo.complete && "line-through text-teal-darker"}`}
                     >
                         {todo.text}
                     </span>
                     <button onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo})} className="p-1">
                         <Icon icon="el:file-edit" color="#0050c5" />
                     </button>
                     <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo})} className="p-1"><Icon icon="fluent:delete-24-filled" color="#8b0000" /></button>
                 </li>
             ))}
         </ul>
     </div>
 )
}
