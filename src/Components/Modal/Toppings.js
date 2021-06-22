import React from 'react'
import styled from 'styled-components'

const ToppingsWrap = styled.div`

`
const ToppingsLabel = styled.label`
  cursor: pointer;
  display: block;
`
const ToppingsCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`

export const Toppings = ({ toppings, checkToppings }) => {
  return (
    <>
    <h3>Добавки</h3>
    <ToppingsWrap>
      {toppings.map((item, i) => (
        <ToppingsLabel key={i}>
          <ToppingsCheckbox type="checkbox" checked={item.checked} onChange={() => checkToppings(i)}/>
            {item.name}
        </ToppingsLabel>
      ))}
    </ToppingsWrap>
    </>
  )
}