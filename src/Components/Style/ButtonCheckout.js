import React from 'react'
import styled from 'styled-components'

export const ButtonCheckout = styled.button`
  font-family: Roboto;
  border-radius: 10px;
  font-size: 30px;
  padding: 20px 60px;
  background-color: #28B463;
  border: none;
  outline: none;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #E65B3E;
    color: whitesmoke;
  }
  &:disabled {
    color: grey;
    background-color: #ccc;
  }
`