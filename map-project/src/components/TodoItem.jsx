import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import axios from 'axios';


const Container = styled.div`
    width: calc(100% - 40px);
    padding: 20px;
    border: 2px orange solid;
    border-radius: 15px;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TodoItem = ({ title, description}) => {
  // const url = 'http://127.0.0.1:8000/api/v1/todo/'
  
  function checkTodo() {
    // const todo = {
    //   title: title,
    //   description: description,
    //   is_Done: true
    // };
    console.log('ok');
  }
  return (
    <Container>
        <div>
            <h2>{ title }</h2>
            <p>{ description }</p>
        </div>
        <Button onClick={() => {}}>Выполнено</Button>
    </Container>
  )
}

export default TodoItem
