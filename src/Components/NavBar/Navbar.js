import React, { useContext } from 'react'
import styled from 'styled-components'
import logoImg from '../../images/logo.svg'
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #28B463;
  color: whitesmoke;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LoginButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  background-color: #E65B3E;
  border: none;
  outline: none;
  padding: 10px 20px;
  margin-right: 30px;
  color: whitesmoke;
  border-radius: 15px;
  font-family: Pacifico;
  transition: all 0.4s ease-in-out;

  :hover {
    color: #E65B3E;
    background-color: transparent;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 30px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  span {
    font-size: 16px;
  }
`

const LogOut = styled.span`
font-size: 16px;
font-weight: bold;
max-width: 100%;
cursor: pointer;
`

export const NavBar = () => {
  const {auth: {authentication, logIn, logOut}} = useContext(Context)
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo"></ImgLogo>
        <H1>MrDonald's</H1>
      </Logo>
      {authentication ? 
          <User>
              <img src={authentication.photoURL} alt={authentication.displayName}/>
              <span>{authentication.displayName}</span>
            <LogOut title="выйти" onClick={logOut}>выйти</LogOut>
          </User> : 
          <LoginButton onClick={logIn}>войти</LoginButton>
      }
    </NavBarStyled>
  )
}