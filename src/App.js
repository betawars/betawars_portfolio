import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive';

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { useEffect } from "react";
import MobileProvider from "./components/MobileComponents/MobileProvider";

function App() {
  const location = useLocation();
  useEffect(() => emailjs.init("qF0ZSkp-SRC-nsEEh"), []);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        {!isMobile ? (
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/skills" element={<MySkillsPage />} />
              <Route path="*" element={<Main click={true} />} />
            </Routes>
          </AnimatePresence>
        ) : (
          <MobileProvider />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
