import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
`;

const Container = styled.div`
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
`;

const IconContainer = styled(motion.div)`
    font-size: 5rem;
    margin-bottom: 2rem;
    animation: ${float} 4s ease infinite;
    
    svg {
        fill: ${props => props.theme.text};
    }
`;

const Title = styled(motion.h2)`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, ${props => props.theme.text}, ${props => props.theme.text}80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Description = styled(motion.p)`
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${props => props.theme.text}90;
    max-width: 500px;
    margin: 0 auto;
`;

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const MobileUnderConstruction = () => {
    return (
        <Container
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <IconContainer variants={itemVariants}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
                    <path d="M17.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </IconContainer>
            
            <Title variants={itemVariants}>
                Under Construction
            </Title>
            
            <Description variants={itemVariants}>
                This section is currently being developed!. 
                Check back soon to see what's new!
            </Description>
        </Container>
    );
};

export default MobileUnderConstruction; 