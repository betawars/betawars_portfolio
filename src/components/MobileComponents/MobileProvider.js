import React from "react";
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion'
import GlobalStyle from "../../globalStyles";
import MobileLanding from "./MobileLanding";
import { lightTheme } from "../Themes";
const MobileGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Inter', 'Source Sans Pro', sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    :root {
        --body-rgb: ${props => props.theme.bodyRgba};
        --text-rgb: ${props => props.theme.textRgba};
    }
`;

const MainContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    margin: 0;
    padding: 0;
    
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    * {
        transition: all 0.3s ease;
    }
`;

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
width: 100%;
position: relative;
display: flex;
justify-content:center;
align-items:center
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
    }


@media (max-width: 1600px) {
        font-size: 2rem; 
}

@media (max-width: 1300px) {
        font-size: 1.5rem; 
}
`

const MobileProvider = (props) => {
    return (
        // <Box
        // initial={{height:0}}
        // animate={{height: '55vh'}}
        // transition={{ type: 'spring', duration:2, delay:1 }}
        // >
        //     <SubBox>
        //         <motion.div
        //             initial={{ opacity: 0 }}
        //             animate={{ opacity: 1 }}
        //             transition={{ duration: 1, delay: 2 }}
        //         >
        //             <Text>
        //                 <h6>Mobile view development in progress!</h6>
        //                 <h6>Switch to desktop mode for better experience.</h6>
        //             </Text>
        //         </motion.div>
        //     </SubBox>
        // </Box>
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <MobileGlobalStyle />
            <MainContainer>
                <AnimatePresence mode='wait'>
                    <MobileLanding />
                </AnimatePresence>
            </MainContainer>
        </ThemeProvider>
    )
}

export default MobileProvider
