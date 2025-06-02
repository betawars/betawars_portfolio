import React, { useState } from 'react'
import styledd, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './Themes';

import { styled } from '@mui/material/styles';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import SkillCards from '../subComponents/SkillCards';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Switch } from '@mui/material';


const color = `<svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="" stroke="none" fill="#040404" fill-rule="evenodd"></path><path id="path1" d="" stroke="none" fill="#080404" fill-rule="evenodd"></path><path id="path2" d="" stroke="none" fill="#080404" fill-rule="evenodd"></path><path id="path3" d="" stroke="none" fill="#080404" fill-rule="evenodd"></path><path id="path4" d="" stroke="none" fill="#080404" fill-rule="evenodd"></path></g></svg>`;
const encodedColorSvg = encodeURIComponent(color);
const backgroundColorImage = `url('data:image/svg+xml;utf8,${encodedColorSvg}')`;

const monochrome = `<svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="" stroke="none" fill="#040404" fill-rule="evenodd"></path><path id="path1" d="" stroke="none" fill="#080404" fill-rule="evenodd"></path><path id="path2" d="" stroke="none" fill="#080404" fill-rule="evenodd"></path><path id="path3" d="" stroke="none" fill="#080404" fill-rule="evenodd"></path><path id="path4" d="" stroke="none" fill="#080404" fill-rule="evenodd"></path></g></svg>`;
const encodedMonochromeSvg = encodeURIComponent(monochrome);
const backgroundMonochromeImage = `url('data:image/svg+xml;utf8,${encodedMonochromeSvg}')`;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
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
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
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
        backgroundImage: backgroundColorImage,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#003892',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));




const Logo = styledd.h4`
display: inline-block;
color: ${darkTheme.text};
cursor: default;
position: fixed;
right: 3rem;
top: 2rem;
z-index: 1;
transform: scale(1);
// transition: transform 0.5s ease-in-out;
// &::after {
//   content: '';
//   position: absolute;
//   height: 2px;
//   left: 0;
//   bottom: 0;
//   width: 0;
//   background: white;
//   transition: width 0.2s;
// }
// &:hover::after {
//   width: 100%;
// }
// &:hover {
//   transform: scale(1.2);
// }
// &:active { 
//   transform: scale(0.8); 
// }
`

const Box = styledd.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styledd(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 75vw;
height: 70vh;
z-index:3;
line-height: 1.5;
backdrop-filter: blur(4px);
margin-right:4vw;
font-family: 'Ubuntu Mono',monospace;
display: flex;

`

const Title = styledd.h2`
padding-left: 2vw;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

&>*:first-child{
margin-right: 1rem;
}
`

const ABOUT = styledd(NavLink)`
color: ${props => props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const Description = styledd.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const WORK = styledd(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 30%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const MySkillsPage = () => {

    const [ iconTheme, setIconTheme ] = useState(false);

    const handleIconSwitch = () => setIconTheme(!iconTheme)
    const innerDivStyle = {
        display: "flex",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

    return (
        <ThemeProvider theme={darkTheme}>

            <WORK to="/work">
                <motion.h2
                    initial={{
                        y: -200,
                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                    }}
                    animate={{
                        y: 0,
                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Work.
                </motion.h2>
            </WORK>

            <ABOUT to="/about">
                <motion.h2
                    initial={{
                        y: -200,
                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                    }}
                    animate={{
                        y: 0,
                        transition: { type: 'spring', duration: 1.5, delay: 1 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    About.
                </motion.h2>
            </ABOUT>

            <Box>

                <LogoComponent theme='dark' />
                <Logo >
                    Switch Icons:
                    <MaterialUISwitch onChange={handleIconSwitch} />
                </Logo>
                <SocialIcons theme='dark' />
                <ParticleComponent theme='light' />
                <Main
                    initial={{ height: 0 }}
                    animate={{ height: '55vh' }}
                    transition={{ type: 'spring', duration: 2, delay: 1 }}
                >

                    <motion.div
                        style={innerDivStyle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        <Title>
                            Click to learn more about them
                        </Title>
                        <SkillCards iconTheme={iconTheme}/>



                    </motion.div>
                    <BigTitle text="SKILLS" top="80%" right="10%" />

                </Main>



            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
