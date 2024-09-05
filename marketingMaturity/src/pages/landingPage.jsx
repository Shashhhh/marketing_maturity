import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/landingPage.css';
import Gradient from '../components/shaderGradient';
import BasicButton from '../components/buttons/basicButton';
import { motion } from 'framer-motion';
import transition from '@components/transition';
const container = {
    beginning: {},
    final: { 
        transition: { 
            staggerChildren: 0.3
        } 
    },
    exit: { opacity: 0 }
};

const item = {
    beginning: { opacity: 0, y: -20 },
    final: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut' 
        }
    }
};

function Landing() {
    const navigate = useNavigate();

    return (
        <motion.div 
            className='container' 
            variants={container}
            initial="beginning"
            animate="final"
            exit="exit"
        >
            <Gradient/>
            <motion.div variants={item} className='textContainer'>
                <h1 className='welcomeHeader'>
                    Welcome to the Siemens Marketing Maturity Assessment
                </h1>
                <p className='helperText'>
                    Please answer the questions in the accompanying tabs, reflecting your current marketing practices.
                </p>
            </motion.div>
            <motion.div 
                className='beginButtonContainer' 
                variants={item}
            >
                <BasicButton onClick={() => navigate('/introPageCountry')}>
                    LET'S BEGIN
                </BasicButton>
            </motion.div>
        </motion.div>
    );
}
export default transition(Landing);