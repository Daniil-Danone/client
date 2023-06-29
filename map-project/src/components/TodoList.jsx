import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const url = 'http://127.0.0.1:8000/api/v1/todo';

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                console.log(response.data);
                setTodos(response.data);
            })
    }, []);

    return (
        <>
        {todos.map(todo =>
            <TodoItem title={ todo.title } description={ todo.description } key={ todo.id }/>
        )}
        </>
    )
}

export default TodoList
