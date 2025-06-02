import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import { NavLink } from 'react-router-dom'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
cursor: pointer;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 1;
transform: scale(1);
transition: transform 0.5s ease-in-out;
&::after {
  content: '';
  position: absolute;
  height: 5px;
  left: 0;
  bottom: 0;
  width: 0;
  background: white;
  transition: width 0.2s;
}
&:hover::after {
  width: 100%;
}
&:hover {
  transform: scale(1.2);
}
&:active { 
  transform: scale(0.8); 
}
`


const LogoComponent = (props) => {
    return (
      <NavLink to="/">
        <Logo color={props.theme}>
          SSB
        </Logo>
      </NavLink>    
    )
}

export default LogoComponent
