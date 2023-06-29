import React, { useState } from 'react'
import Button from '../UI/Button';
import axios from 'axios';


const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const url = 'http://127.0.0.1:8000/api/v1/todo';

    function createTodo (event) {
        const todo = {
            title: title,
            description: description,
            // is_Done: false
        };

        axios
            .post(url, todo)
            .then(response => {
                console.log(response);
            })
    }

  return (
    <form onSubmit={createTodo}>
        <div>
            <input placeholder='Заголовок' value={ title } onChange={(event) => setTitle(event.target.value)}/>
            <input placeholder='Описание' value={ description } onChange={(event) => setDescription(event.target.value)}/>
        </div>
        <Button>Создать Todo</Button>
    </form>
  )
}

export default Form
