import React from "react";
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import MobileNavBar from "./MobileNavebar";
import Me from '../../assets/Images/profile-img.png'
import MobileUnderConstruction from "./MobileUnderConstruction";
import MobileAbout from "./MobileAbout";
// import MobileSkills from "./MobileSkills";
// import MobileWork from "./MobileWork";
// import MobileContact from "./MobileContact";

const MainContainer = styled.div`
    font-family: 'Inter', 'Source Sans Pro', sans-serif;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    overflow-x: hidden;
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const slideUp = keyframes`
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
`;

const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
`;

const HeroSection = styled.section`
    min-height: 100vh;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.body};
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 150px;
        background: linear-gradient(to top, ${props => props.theme.text}15, transparent);
        pointer-events: none;
    }
`;

const ProfileContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;
    animation: ${fadeIn} 1s ease-out;
`;

const ProfileImage = styled(motion.div)`
    width: 280px;
    height: 280px;
    position: relative;
    padding: 25px;
    animation: ${float} 4s ease infinite;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));
        transition: all 0.3s ease;
    }

    &:hover {
        img {
            transform: scale(1.05);
            filter: drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.15));
        }
    }
`;

const IntroText = styled(motion.div)`
    text-align: center;
    padding: 0 1rem;
    max-width: 600px;
    animation: ${slideUp} 1s ease-out 0.3s backwards;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        background: linear-gradient(120deg, ${props => props.theme.text}, ${props => props.theme.text}80);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h3 {
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 1.6;
        color: ${props => props.theme.text}90;
        margin-bottom: 2rem;
    }
`;

const ScrollIndicator = styled(motion.div)`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.7;
    animation: ${fadeIn} 1s ease-out 1s backwards;

    span {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    &::after {
        content: '';
        width: 20px;
        height: 20px;
        border-right: 2px solid ${props => props.theme.text};
        border-bottom: 2px solid ${props => props.theme.text};
        transform: rotate(45deg);
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0) rotate(45deg); }
        50% { transform: translateY(10px) rotate(45deg); }
    }
`;

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    position: relative;
    padding: 4rem 1rem;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};

    &#skills {
        background: ${props => props.theme.body}95;
    }

    &#contact {
        min-height: 80vh;
    }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const MobileLanding = () => {
    return (
        <MainContainer>
            <MobileNavBar />
            
            <HeroSection id="home">
                <ProfileContainer>
                    <ProfileImage
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    >
                        <img src={Me} alt="Profile" />
                    </ProfileImage>

                    <IntroText
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h1>Hi, I'm Shashank</h1>
                        <h3>I’m a Software Developer and grad student at OSU. I love building intuitive UIs with React, Kotlin and solid backends. I enjoy turning ideas into real products and staying updated with new tech. Let’s talk</h3>
                    </IntroText>
                </ProfileContainer>

                <ScrollIndicator
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span>Swipe down</span>
                </ScrollIndicator>
                
            </HeroSection>
            <Section id="about">
                <MobileAbout />
            </Section>
            <Section>
                <MobileUnderConstruction/>
            </Section>

            {/* 
            
            <Section id="skills">
                <MobileSkills />
            </Section>

            <Section id="work">
                <MobileWork />
            </Section>

            <Section id="contact">
                <MobileContact />
            </Section> */}
        </MainContainer>
    )
}

export default MobileLanding;
