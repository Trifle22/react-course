import React from 'react'
import styled from 'styled-components'
import { ButtonCheckout } from './ButtonCheckout'


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

export const ModalItem = ({ openItem, setOpenItem }) => {

  const closeModal = (event) => {
    if (event.target.id === 'overlay') {
      setOpenItem(null)
    }
  }

  if (!openItem) return null; 
  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <ModalWrapper>
          <ModalHeader>
            <p>{openItem.name}</p>
            <p>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
          </ModalHeader>
          <ButtonCheckout>Добавить</ButtonCheckout>
        </ModalWrapper>
      </Modal>
    </Overlay>
  )
}