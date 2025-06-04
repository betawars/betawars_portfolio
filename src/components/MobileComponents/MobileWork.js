import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Work } from "../../data/WorkData";
import { FiExternalLink, FiGithub, FiBriefcase, FiCalendar } from 'react-icons/fi';
import FadeInWhenVisible from "./FadeInWhenVisible";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 1rem;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin: 1rem 0 3rem 0;
    text-align: center;
    position: relative;
    color: ${props => props.theme.text};
    
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

const WorkList = styled(motion.div)`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const WorkItem = styled(motion.div)`
    background: rgba(${props => props.theme.textRgba}, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.15);
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        background: rgba(${props => props.theme.textRgba}, 0.1);
        border-color: rgba(${props => props.theme.textRgba}, 0.3);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(to bottom, ${props => props.theme.text}99, transparent);
    }
`;

const WorkHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    gap: 1rem;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
        font-size: 1.5rem;
        color: ${props => props.theme.body};
        opacity: 0.8;
    }
`;

const Company = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.text};
    margin-bottom: 0.5rem;
    background: linear-gradient(120deg, ${props => props.theme.text}, ${props => props.theme.text}80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.text}E6;
    margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
    background: rgba(${props => props.theme.textRgba}, 0.1);
    color: ${props => props.theme.text};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.2);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(${props => props.theme.textRgba}, 0.2);
        transform: translateY(-2px);
    }
`;

const Links = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.theme.text};
    background: rgba(${props => props.theme.textRgba}, 0.1);
    border: 1px solid rgba(${props => props.theme.textRgba}, 0.3);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(${props => props.theme.textRgba}, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    svg {
        font-size: 1.2rem;
        color: ${props => props.theme.text};
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

const MobileWork = () => {
    return (
        <Container id="work">
            <FadeInWhenVisible>
                <Title>Work Experience</Title>
            </FadeInWhenVisible>
            
            <WorkList>
                {Work.map((work, id) => (
                    <FadeInWhenVisible key={id} delay={id * 0.2}>
                        <WorkItem
                            initial={{ scale: 0.95 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <WorkHeader>
                                <HeaderLeft>
                                    <FiBriefcase />
                                    <div>
                                        <Company>{work.name}</Company>
                                    </div>
                                </HeaderLeft>
                            </WorkHeader>
                            
                            <Description>{work.description}</Description>
                            
                            <TechStack>
                                {work.tags.map((tech, index) => (
                                    <TechTag key={index}>{tech}</TechTag>
                                ))}
                            </TechStack>

                            <Links>
                                {work.knowMore && (
                                    <Link href={work.knowMore} target="_blank" rel="noopener noreferrer">
                                        <FiExternalLink /> Learn More
                                    </Link>
                                )}
                                {work.github && (
                                    <Link href={work.github} target="_blank" rel="noopener noreferrer">
                                        <FiGithub /> View Code
                                    </Link>
                                )}
                            </Links>
                        </WorkItem>
                    </FadeInWhenVisible>
                ))}
            </WorkList>
        </Container>
    );
};

export default MobileWork; 