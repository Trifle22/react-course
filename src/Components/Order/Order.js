import React from 'react'
import styled from 'styled-components'
import { ButtonCheckout } from '../Style/ButtonCheckout'
import { OrderListItem } from './OrderListItem'
import { totalPriceItems } from '../Functions/secondaryFunction'
import { formatCurrency } from '../Functions/secondaryFunction'
import { projection } from '../Functions/secondaryFunction'


const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  background-color: whitesmoke;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 10px -1px 8px 0px rgba(255, 255, 255, 0.25);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const OrderTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
`

const OrderContent = styled.div`
  flex-grow: 1;
  justify-content: space-around;
`

const OrderList = styled.ul`

`

const Total = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  & span:first-child {
    flex-grow: 1;
    text-align: left;
  }
`
const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`

const buttonStyles = {
  marginBottom: "50px"
}

const EmptyList = styled.div`
  text-align: center;
`

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), 
            arr => arr.length ? arr : 'no toppings'],
  choice: ['choice', item => item ? item : 'no choices']
}

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase }) => {
  const dataBase = firebaseDatabase()
  const total = orders.reduce((result, order) => 
    totalPriceItems(order) + result , 0)

  const totalCounter = orders.reduce((result, order) => 
    order.count + result , 0)

  const deleteItem = index => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
  }

  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData))
    dataBase.ref('orders').push().set({
      clientName: authentication.displayName,
      email: authentication.email,
      order: newOrder
    })
    setOrders([])
  }


  return (
    <>
      <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          {orders.length ? 
          <OrderList>
            {orders.map((order, index) => 
            <OrderListItem
              key={index}
              order={order}
              deleteItem={deleteItem} 
              index={index}
              setOpenItem={setOpenItem}/>)}
          </OrderList> : <EmptyList>Список заказов пуст</EmptyList>}
        </OrderContent>
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout style={buttonStyles} onClick={() => {
          if (authentication) {
            sendOrder()
          } else {
            logIn()
          }
        }
        }>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  )
}