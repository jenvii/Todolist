export default function TodolistTable(props) {
    return (
        <table>
            <tbody>
                <tr><th>Date</th><th>Description</th></tr>
                {props.todos.map((todo, index) =>
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}