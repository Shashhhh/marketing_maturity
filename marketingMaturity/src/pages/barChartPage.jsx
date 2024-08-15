import React from 'react';
import { motion } from 'framer-motion';
import BarChart from '../components/barChart';
import '@styles/chartPage.css';
import { useFormNav } from '../hooks/useFormNav';
import BackButton from '../components/buttons/backButton';
import NextButton from '../components/buttons/nextButton';
import ProgressBar from '../components/progressbar';

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
            duration: 1,
            ease: 'easeOut' 
        }
    }
};

const BarChartPage = ({ formData }) => {
    const { handleBack, handleNext } = useFormNav();

    const handleNextClick = () => {
        handleNext('/radarChart');
    };

    const handleBackClick = () => {
        handleBack('/contentDevelopment');
    };

    return (
        <motion.div className='chartContainer' variants={container} initial="beginning" animate="final" exit="exit">
            <motion.h1 variants={item}>Marketing Maturity Assessment</motion.h1>
            <motion.div variants={item}>
                <BarChart formData={formData} />
            </motion.div>
            <motion.div className='navButtonContainer' variants={item}>
                <div className="backButtonContainer">
                    <BackButton onClick={handleBackClick} />
                </div>
                <div className='nextButtonContainer'>
                    <NextButton onClick={handleNextClick} />
                </div>
            </motion.div>
            <motion.div className="progressBarContainer" variants={item}>
                <ProgressBar />
            </motion.div>
        </motion.div>
    );
};

export default BarChartPage;
