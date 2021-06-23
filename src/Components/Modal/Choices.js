import React from 'react'
import styled from 'styled-components'

const ChoiceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const ChoiceRadio = styled.input`
  cursor: pointer;
  display: block;
`
const ChoiceLabel = styled.label`
  cursor: pointer;
  margin-right: 5px;
  display: flex;
  align-items: center;
`
export const Choices = ({ openItem, choice,  changeChoices }) => {
  return (
    <>
    <h3>Выберите:</h3>
    <ChoiceWrap>
      {openItem.choices.map((item, i) => (
        <ChoiceLabel key={i}>
          <ChoiceRadio type="radio"  name={item} checked={choice === item} onChange={changeChoices} value={item}/>
            {item}
        </ChoiceLabel>
      ))}
    </ChoiceWrap>
    </>
  )
}