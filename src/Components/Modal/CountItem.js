import React from 'react'
import styled from 'styled-components'

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

`

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  outline: none;
`

const ButtonCount = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  transition: all 0.4s ease-in-out;
  background-color: #28B463;
  border-radius: 10px;

  &:hover {
    background-color: #E65B3E;
  }
`

export const CountItem = ({ count, setCount, onChange }) => {

  return (
    <CountWrapper>
      <span>Количество</span>
      <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
      <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
      <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
    </CountWrapper>
  )
}
