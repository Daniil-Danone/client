import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    border:none;
    background: none;
    border: 1px orange solid;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background: orange;
    }
`


const Button = ( {children} ) => {
  return (
    <div>
      <Btn>{ children }</Btn>
    </div>
  )
}

export default Button