import { useState } from "react"
/*import TodolistTable from "./components/TodolistTable";*/
import TodolistGrid from "./components/TodolistGrid";


export default function Todolist() {


    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ description: '', date: '' });

    const handleTodoChange = (e) =>
        setTodo({ ...todo, [e.target.name]: e.target.value });

    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
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

            <TodolistGrid todos={todos} deleteTodo={deleteTodo} />

        </>
    )

}
/*<TodolistTable todos={todos} deleteTodo={deleteTodo} />*/

