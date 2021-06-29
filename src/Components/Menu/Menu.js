import React from 'react'
import styled from 'styled-components'
import dbMenu from '../DBMenu'
import { ListItem } from './ListItem'
import banner from '../../images/banner.png'

const MenuStyled = styled.main`
  background-color: #111;
  margin-top: 110px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
  padding-left: 60px;
  color: #28B463;
`

const Banner = styled.div`
  width: 100%;
  height: 230px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Menu = ({ setOpenItem }) => {
  return (
    <MenuStyled>
      {/* banner */}
      <Banner />
      <SectionMenu>
        <h2>Бургеры</h2>
        <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
      </SectionMenu>
      <SectionMenu>
        <h2>Закуски / Напитки</h2>
        <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
      </SectionMenu>
    </MenuStyled>

  ) 

}