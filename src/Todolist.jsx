import { useState } from "react"
import TodolistTable from "./components/TodolistTable";

export default function Todolist() {


    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '', date: '' });

    const handleTodoChange = (e) =>
        setTodo({ ...todo, [e.target.name]: e.target.value });

    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (todo, index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);
    }

    return (
        <>
            <h1>Todo list</h1>
            <input
                type="text"
                name="description"
                value={todo.description}
                onChange={handleTodoChange}
            />
            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleTodoChange} />
            <button
                onClick={addTodo}>
                Add
            </button>

            <TodolistTable todos={todos} deleteTodo={deleteTodo} />

        </>
    )

}

