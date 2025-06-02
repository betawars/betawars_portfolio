import { motion } from "framer-motion";
import React, { useState } from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Facebook, Github, LinkedIn, Twitter, YouTube } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 1;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 10vh;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {

  return (
    <Icons>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            style={{color:"inherit"}}
            target="_blank"
            href={"https://github.com/betawars"}
          >
            <Github
              width={25}
              height={25}
              fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            />
          </a>
        </motion.div>
        
      </motion.div>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.3 }}
          
          whileTap={{ scale: 0.9 }}
        >
          <a
            style={{ color: "inherit" }}
            target="_blank"
            href={"https://www.linkedin.com/in/shashank-betawar-0600b9147"}
          >
            <LinkedIn
              width={25}
              height={25}
              fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            />
          </a>
        </motion.div>
        
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "10vh", 
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
