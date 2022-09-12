import React, {useContext, useReducer} from "react";
import {TodoContext} from "./TodoContext";
import todosReducer from "./reducer";

export default function Todos(){
    const initialState = useContext(TodoContext)
    //const [state, dispatch] = useReducer(todosReducer, initialState)
    return (
        <TodoContext.Provider value={initialState}>
            <div className="bg-teal text-white border rounded m-1 p-5">

            </div>
        </TodoContext.Provider>
    );
}
