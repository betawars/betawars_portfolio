import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cards } from '../../data/WorkData';
import FadeInWhenVisible from './FadeInWhenVisible';
import { styled as muiStyled } from '@mui/material/styles';
import { Switch } from '@mui/material';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 4rem 1rem;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    
    &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -15px;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: ${props => props.theme.text};
        border-radius: 2px;
    }
`;

const SwitchContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin: -1rem 0 2rem;
    color: ${props => props.theme.text};
`;

const MaterialUISwitch = muiStyled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICA8cGF0aCBkPSJNNDg0IDAgNDEyIDAgMzUyIDYwIE0xMjggMzY4TDQ0IDQ0OEw2NCA1MTJMMTQ0IDQ2OE0xMjggMzY4TDQ0IDQ0OEw2NCA1MTJMMTQ0IDQ2OCIvPgo8L3N2Zz4=",
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const SkillsGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
`;

const SkillCard = styled(motion.a)`
    background: ${props => props.theme.text}05;
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.theme.text}15;
    border-radius: 16px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        background: ${props => props.theme.text}10;
        border-color: ${props => props.theme.text}30;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        transition: all 0.3s ease;
    }

    &:hover img {
        transform: scale(1.1);
    }
`;

const SkillName = styled.span`
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.text};
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const MobileSkills = () => {
    const [iconTheme, setIconTheme] = useState(false);
    const handleIconSwitch = () => setIconTheme(!iconTheme);

    return (
        <Container id="skills">
            <FadeInWhenVisible>
                <Title>Skills & Technologies</Title>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible>
                <SwitchContainer
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        Switch Icons:
                    </motion.span>
                    <MaterialUISwitch 
                        onChange={handleIconSwitch}
                        checked={iconTheme}
                    />
                </SwitchContainer>
            </FadeInWhenVisible>
            
            <SkillsGrid>
                {cards.map((card, index) => (
                    <FadeInWhenVisible key={index} delay={index * 0.1}>
                        <SkillCard
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            as={motion.a}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.img 
                                key={iconTheme ? card.img1 : card.img}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                src={iconTheme ? card.img1 : card.img} 
                                alt={card.content}
                                loading="lazy"
                            />
                            <SkillName>{card.content}</SkillName>
                        </SkillCard>
                    </FadeInWhenVisible>
                ))}
            </SkillsGrid>
        </Container>
    );
};

export default MobileSkills; 