import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 10px;
  color: white;
  z-index: 1;
  font-size: 30px;
  transition: all 0.5s ease-in-out;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    opacity: 50%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 42px -6px #E65B3E;
    &:after {
      opacity: 0;
    }
    transform: scale(1.09)
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
      {itemList.map(item => (
        <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
          <p>{item.name}</p>
          <p>{item.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
        </Item>
      ))}
  </List>
)