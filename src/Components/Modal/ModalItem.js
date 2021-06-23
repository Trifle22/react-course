import React from 'react'
import styled from 'styled-components'
import { ButtonCheckout } from '../Style/ButtonCheckout'
import { CountItem } from './CountItem'
import { useCount } from '../Hooks/useCount'
import { totalPriceItems } from '../Functions/secondaryFunction'
import { formatCurrency } from '../Functions/secondaryFunction'
import { Toppings } from './Toppings'
import { Choices } from './Choices'
import { useToppings } from '../Hooks/useToppings'
import { useChoices } from '../Hooks/useChoices'


const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`

const Modal = styled.div`
  background-color: #ffffff;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-family: Pacifico;
  font-size: 30px;
`

const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 200px);
  height: 400px;
  padding-bottom: 20px;
`


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount()
  const toppings = useToppings(openItem)
  const choices = useChoices(openItem)

  const closeModal = (event) => {
    if (event.target.id === 'overlay') {
      setOpenItem(null)
    }
  }


  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice
  }



  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenItem(null)
  }

  const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <ModalWrapper>
          <ModalHeader>
            <p>{openItem.name}</p>
            <p>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
          </ModalHeader>
          <CountItem {...counter}/>
            {openItem.toppings && <Toppings {...toppings}/>}
            {openItem.choices && <Choices {...choices} openItem={openItem}/>}
          <TotalPrice>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPrice>
          <ButtonCheckout onClick={addToOrder} disabled={order.choices && !order.choice}>Добавить</ButtonCheckout>
        </ModalWrapper>
      </Modal>
    </Overlay>
  )
}