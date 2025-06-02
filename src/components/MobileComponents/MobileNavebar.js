import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';
import { darkTheme } from "../Themes";

const List = styled.ul`

    display:flex;
    align-items:center;
    justify-content:center;
    

    @media (max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        position:fixed;
        margin:-20px;
        backdrop-filter: ${props => props.clicked ? `blur(3px)` : `none`};
        right: ${props => props.clicked ? `0px` : `-400px`};
        width:200px;
        height:100vh;
        background:black;
        box-shadow: 0 40px 60px rgba(0,0,0,0.1);
        padding: 100px 0 0 10px;
        transition: 0.3s ease-in-out
    }

`

const ListItem = styled.li`
    list-style:none;
    padding:0 20px;
    position:relative;

    @media (max-width:768px){
        margin-bottom:25px;

    }
    

`


const NavBar = styled.nav`

    backdrop-filter: ${props => props.clicked ? `blur(3px)` : `none`};
    padding: 0.5em 0.5em;
    display:flex;
    align-items:center;
    justify-content:space-between;

`

const MobileMode = styled.div`
    display:none;
    @media (max-width:768px){
        display:block
    }
    

`

const Icons = styled.i`
    // color: #006ea9;
    position:fixed;
    right:1em;
    top:1em;
    @media (max-width:768px){
        font-size:24px;
        cursor:pointer;
    }

`

const MobileNavBar = (props) => {

    const [state, changeState] = useState(false);

    const handleClick = () => changeState(!state)

    const LinkStyle = {
        textDdecoration: "none",
        fontSize:"1.3rem",
        fontWeight:600,
        color:"white",
    }

    return (
        <>
            <NavBar id="home">
                <div>
                    <List clicked={state}>
                        <ListItem><Link style={LinkStyle} smooth={true} duration={500} onClick={handleClick} to="about">About.</Link></ListItem>
                        <ListItem><Link style={LinkStyle} smooth={true} duration={500} onClick={handleClick} to="skills">Skills.</Link></ListItem>
                        <ListItem><Link style={LinkStyle} smooth={true} duration={500} onClick={handleClick} to="work">Work.</Link></ListItem>
                        <ListItem><Link style={LinkStyle} smooth={true} duration={500} onClick={handleClick} to="contact">Contact Me.</Link></ListItem>
                    </List>
                </div>
                <MobileMode>
                    <Icons onClick={handleClick} style={{color:props.textColor?darkTheme.text : darkTheme.body}} className={state ? "fas fa-times" : "fas fa-bars"} />
                </MobileMode>
            </NavBar>

        </>
    )

}

export default MobileNavBar