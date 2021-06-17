import React from 'react'
import styled from 'styled-components'
import { ButtonCheckout } from './ButtonCheckout'
import { OrderListItem } from './OrderListItem'


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

export const Order = () => {
  return (
    <>
      <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          <OrderList>
            <OrderListItem></OrderListItem>
            <OrderListItem></OrderListItem>
            <OrderListItem></OrderListItem>
          </OrderList>
        </OrderContent>
        <Total>
          <span>Итого</span>
          <span>5</span>
          <TotalPrice>850р.</TotalPrice>
        </Total>
        <ButtonCheckout style={buttonStyles}>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  )
}