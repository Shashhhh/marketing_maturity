import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '@styles/introPage.css';
import NextButton from '@components/buttons/nextButton';
import BackButton from '@components/buttons/backButton';
import ProgressBar from '@components/progressbar';
import PartnerLevelSelect from '@components/introComponents/partnerLevelSelect';
import { FormControl } from '@mui/material';
import { useFormNav } from '@hooks/useFormNav';

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

function IntroPagePartnerLevel() {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState(false);
    const { handleNext, handleBack } = useFormNav();

    const handleNextClick = () => {
        if (selected) {
            sessionStorage.setItem('partnerLevel', JSON.stringify(selected));
            handleNext('/introPageMarketing');
        } else {
            setError(true);
        }
    };

    const handleBackClick = () => {
        if (selected) {
            sessionStorage.setItem('partnerLevel', JSON.stringify(selected));
        }
        handleBack('/introPageCountry');
    };

    useEffect(() => {
        const savedPartnerLevel = sessionStorage.getItem('partnerLevel');
        if (savedPartnerLevel) {
            setSelected(JSON.parse(savedPartnerLevel));
        }
    }, []);

    const handleSelect = (partnerLevel) => {
        setSelected(partnerLevel);
        setError(false);
    };

    return (
        <motion.div className='introContainer' variants={container} initial="beginning" animate="final" exit="exit">
            <FormControl className='form'>
                <motion.h1 variants={item}>
                    What partner level are you?
                </motion.h1>

                <motion.div variants={item}>
                    <PartnerLevelSelect error={error} selected={selected} setSelected={handleSelect} />
                </motion.div>

                <motion.div className='navButtonContainer' variants={item}>
                    <div className="backButtonContainer">
                        <BackButton onClick={handleBackClick} />
                    </div>
                    <div className='nextButtonContainer'>
                        <NextButton onClick={handleNextClick} />
                    </div>
                </motion.div>
            </FormControl>

        </motion.div>
    );
}

export default IntroPagePartnerLevel;
/*
            <motion.div className="progressBarContainer" variants={item}>
                <ProgressBar />
            </motion.div>
*/