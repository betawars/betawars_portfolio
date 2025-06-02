import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import FadeInWhenVisible from './FadeInWhenVisible';

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

const Content = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
`;

const AboutCard = styled(motion.div)`
    background: rgba(${props => props.theme.textRgba}, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.15);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(${props => props.theme.textRgba}, 0.85);
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

const Highlight = styled.span`
    color: ${props => props.theme.text};
    font-weight: 600;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
`;

const Button = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    background: ${props => props.primary ? props.theme.text : 'transparent'};
    color: ${props => props.primary ? props.theme.body : props.theme.text};
    border: 1px solid ${props => props.theme.text};

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        background: ${props => props.primary ? props.theme.text : props.theme.text}10;
    }

    svg {
        font-size: 1.2rem;
    }
`;

const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
    background: rgba(${props => props.theme.textRgba}, 0.08);
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.15);
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        background: linear-gradient(120deg, rgba(${props => props.theme.textRgba}, 1), rgba(${props => props.theme.textRgba}, 0.8));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        font-size: 0.9rem;
        color: rgba(${props => props.theme.textRgba}, 0.8);
    }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const MobileAbout = () => {
    return (
        <Container id="about">
            <FadeInWhenVisible>
                <Title>About Me</Title>
            </FadeInWhenVisible>
            
            <Content>
                <FadeInWhenVisible delay={0.2}>
                    <AboutCard>
                        <Paragraph>
                            Hi! I am Shashank Sanjay Betawar.
                            <br /> <br />
                            I’m a grad student at OSU and a Software Developer. I specialize in creating user-friendly interfaces and powerful backends.
                            <br /> <br />
                            Outside of coding, I’m passionate about video games, trekking, and reading. I enjoy bringing ideas to life and would love to connect with fellow tech enthusiasts.
                            <br /> <br />
                            Let’s talk tech or chat about universe!
                            <br /> <br />
                            (Psst!. Remember to share your favorite book or video game with me. :))
                        </Paragraph>
                        
                        <ButtonsContainer>
                            <Button 
                                href="https://drive.google.com/file/d/1wWT51ISX4wPTR02YjUqH5qXsih098Oy2/view?usp=sharing" 
                                target="_blank"
                                rel="noopener noreferrer"
                                primary
                            >
                                <FiDownload /> Download Resume
                            </Button>
                        </ButtonsContainer>
                    </AboutCard>
                </FadeInWhenVisible>

                <Stats>
                    <FadeInWhenVisible delay={0.4}>
                        <StatCard>
                            <h3>3+</h3>
                            <p>Years Experience</p>
                        </StatCard>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.5}>
                        <StatCard>
                            <h3>7+</h3>
                            <p>Projects Completed</p>
                        </StatCard>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.6}>
                        <StatCard>
                            <h3>5+</h3>
                            <p>Technologies</p>
                        </StatCard>
                    </FadeInWhenVisible>
                </Stats>

                <FadeInWhenVisible delay={0.7}>
                    <ButtonsContainer>
                        <Button 
                            href="https://github.com/betawars"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiGithub /> GitHub
                        </Button>
                        <Button 
                            href="https://www.linkedin.com/in/shashank-sanjay-betawar-0600b9147/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiLinkedin /> LinkedIn
                        </Button>
                    </ButtonsContainer>
                </FadeInWhenVisible>
            </Content>
        </Container>
    );
};

export default MobileAbout;
