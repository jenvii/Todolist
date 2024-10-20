import { useState } from "react"
import TodolistGrid from "./components/TodolistGrid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from "@mui/x-date-pickers";
import Stack from '@mui/material/Stack';


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
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField
                    label="Description"
                    variant="standard"
                    name="description"
                    value={todo.description}
                    onChange={handleTodoChange} />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='Date'
                        format='DD.MM.YY'
                        value={todo.date}
                        onChange={value => setTodo({ ...todo, date: value })}
                    />
                </LocalizationProvider>

                <Button
                    variant="contained"
                    onClick={addTodo}>
                    Add
                </Button>
            </Stack>

            <TodolistGrid todos={todos} deleteTodo={deleteTodo} />

        </>
    )

}

