import React, {useContext, useReducer} from "react";
import {TodoContext} from "./TodoContext";
import todosReducer from "./reducer";
import TodoList from "./components/TodoList";
import AddTodo from "./components/TodoForm";

export default function Todos(){
    const initialState = useContext(TodoContext)
    const [state, dispatch] = useReducer(todosReducer, initialState)
    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing to Do!'
    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <div className="container mx-auto max-w-md text-center text-black font-mono mt-5">
                <h1>{title}</h1>
            </div>
            <AddTodo/>
            <TodoList />
        </TodoContext.Provider>
    );
}
