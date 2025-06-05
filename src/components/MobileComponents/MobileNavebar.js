import React, { useState } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: transparent;
    padding: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuButton = styled.button`
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 101;
    background: ${props => props.theme.text};
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }

    span {
        width: 100%;
        height: 2px;
        background: ${props => props.theme.body};
        transition: all 0.3s ease;
        transform-origin: 1px;

        &:first-child {
            transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${props => props.isOpen ? '0' : '1'};
            transform: ${props => props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
        }

        &:last-child {
            transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Menu = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    width: 75vw;
    max-width: 300px;
    height: 100vh;
    background: ${props => props.theme.text};
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled(motion.div)`
    margin: 1rem 0;
    width: 100%;
    
    a {
        font-size: 1.5rem;
        color: ${props => props.theme.body};
        text-decoration: none;
        font-weight: 600;
        position: relative;
        display: block;
        padding: 0.5rem 0;
        
        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background: ${props => props.theme.body};
            transition: width 0.3s ease;
        }
        
        &:hover:after {
            width: 100%;
        }
    }
`;

const menuVariants = {
    open: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 24
        }
    },
    closed: {
        x: "100%",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 28
        }
    }
};

const menuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const menuItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Work", id: "work" },
        { name: "Contact", id: "contact" }
    ];

    return (
        <NavContainer>
            <MenuButton isOpen={isOpen} onClick={toggleMenu}>
                <span />
                <span />
                <span />
            </MenuButton>

            <Menu
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.name}
                        variants={menuItemVariants}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                            }}
                        >
                            {item.name}
                        </a>
                    </MenuItem>
                ))}
            </Menu>
        </NavContainer>
    );
};

export default MobileNavBar;