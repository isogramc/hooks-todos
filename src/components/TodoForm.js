import React, {useState, useContext, useRef, useEffect} from "react";
import { TodoContext } from "../TodoContext";

export default function AddTodo(){
    const [todo, setTodo] = useState("");
    const { state: {currentTodo = {}}, dispatch } = useContext(TodoContext);
    const todoInput = useRef()

    useEffect(() => {
        todoInput.current.focus()
        if(currentTodo.text){
            setTodo(currentTodo.text)
        }
    }, [currentTodo.id])

    const handleSubmit = event => {
        event.preventDefault()
        if(currentTodo.text){
            dispatch({type: "UPDATE_TODO", payload: todo})
        } else {
            dispatch({type: "ADD_TODO", payload: todo})
        }
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <span className="justify-center p-2"> Add Todo: </span>
            <input
                type="text"
                className="border-black border-solid border-2"
                onChange={event => setTodo(event.target.value)}
                value={todo}
                ref={todoInput}
            />
        </form>
    )
}
