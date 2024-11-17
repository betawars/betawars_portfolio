import React from 'react'
import styled, { keyframes } from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;
flex-wrap: wrap;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;
    

`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom:0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
    font-size: 2.5rem;
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    & > *:last-child {
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
        font-size: 2.1rem; 
        font-weight: 300;
        @media (max-width: 1600px) {
        font-size: 1.5rem;
        }
        @media (max-width: 1300px) {
        font-size: 1rem; 
        }
        @media (max-width: 900px) {
        font-size: 0.5rem; 
        }
    }


@media (max-width: 1600px) {
        font-size: 2rem; 
}

@media (max-width: 1300px) {
        font-size: 1.5rem; 
}
@media (max-width: 900px) {
        font-size: 1rem; 
}
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`

const Floating = styled.div`
    position: absolute;
    top: 100%;
    right: 10%;
    width: 80%;
    cursor: pointer;
    animation: ${float} 4s ease infinite;

    img {
        width: 100%;
        height: auto; 
    }
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <Text>
                        <h1>Hi</h1>
                        <h3>I'm Shashank!</h3>
                        <h6>I’m a Software Developer and grad student at OSU. I love building intuitive UIs with React, Kotlin and solid backends. I enjoy turning ideas into real products and staying updated with new tech. Let’s talk!</h6>
                    </Text>
                </motion.div>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
                >
                    <Floating>
                        <img className="pic" src={Me} alt="Profile Pic" />
                    </Floating>
                    
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
