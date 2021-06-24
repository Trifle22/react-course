import React from 'react'
import styled from 'styled-components'
import trashImage from '../../images/trash.svg'
import { totalPriceItems } from '../Functions/secondaryFunction'
import { formatCurrency } from '../Functions/secondaryFunction'


const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
  flex-wrap: wrap;
`

const ItemName = styled.span`
  flex-grow: 1;
  text-align: left;
`

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  background-image: url(${trashImage});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`

const OrderItemToppings = styled.ul`
  display: block;
  width: 100%;
  text-align: left;
  list-style: square;
  margin-left: 30px;
`
const OrderItemTopping = styled.li`
  font-size: 16px;
`

const getCheckedToppings = toppings => {
  const values = [...Object.values(toppings)].filter(item => item.checked)
  const result = []
  values.map(item => result.push(item.name))
  return result
}

export const OrderListItem = ({ order, index, deleteItem }) => {
  return (
    <OrderItemStyled >
    <ItemName>{order.name} {order.choice}</ItemName>
    <span>{order.count}</span>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <TrashButton onClick={() => deleteItem(index)}/>
    <OrderItemToppings>
      {getCheckedToppings(order.topping).map(item => <OrderItemTopping>{item}</OrderItemTopping>)}
    </OrderItemToppings>
  </OrderItemStyled>
  )
}