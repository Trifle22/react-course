import React from 'react'
import styled from 'styled-components'
import { ButtonCheckout } from '../Style/ButtonCheckout'
import { OrderListItem } from './OrderListItem'
import { totalPriceItems } from '../Functions/secondaryFunction'
import { formatCurrency } from '../Functions/secondaryFunction'


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

export const Order = ({ orders }) => {

  const total = orders.reduce((result, order) => 
    totalPriceItems(order) + result , 0)
  return (
    <>
      <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          {orders.length ? 
          <OrderList>
            {orders.map(order => <OrderListItem order={order}/>)}
          </OrderList> : <EmptyList>Список заказов пуст</EmptyList>}
        </OrderContent>
        <Total>
          <span>Итого</span>
          <span>5</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout style={buttonStyles}>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  )
}