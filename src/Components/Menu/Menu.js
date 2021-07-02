import React from 'react'
import styled from 'styled-components'
import { ListItem } from './ListItem'
import banner from '../../images/banner.png'
import ClipLoader from "react-spinners/ClipLoader";

const PreLoaderWrap = styled.div`
  background-color: #111;
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

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

export const Menu = ({ dbMenu }) => {
  return (
    <MenuStyled>
      <Banner />
      {dbMenu ? 
                <>
                <SectionMenu>
                <h2>Бургеры</h2>
                <ListItem itemList={dbMenu.burger} />
                </SectionMenu>
                <SectionMenu>
                <h2>Закуски / Напитки</h2>
                <ListItem itemList={dbMenu.other} />
                </SectionMenu>
              </> : <PreLoaderWrap><ClipLoader color={"#E65B3E"} size={300}/></PreLoaderWrap>}
    </MenuStyled>

  ) 

}