import React from "react";

export const todos = {
    todos: [
        {id: 1, text: "Buy apples", complete: false},
        {id: 2, text: "Jogging", complete: false},
        {id: 3, text: "Make budget", complete: false},
        {id: 4, text: "Call Luna", complete: true}
    ],
    currentTodo: {}
}

export const TodoContext = React.createContext(todos)
