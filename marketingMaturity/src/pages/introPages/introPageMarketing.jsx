import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../styles/introPage.css';
import NextButton from '../../components/buttons/nextButton';
import ProgressBar from '../../components/progressbar';
import { FormControl } from '@mui/material';
import YesNoGroup from '../../components/introComponents/yesNoRadioGroup';
import BackButton from '../../components/buttons/backButton';
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
            duration: 1,
            ease: 'easeOut' 
        }
    }
};

function IntroPageMarketing() {
    const [selected, setSelected] = useState(null);
    const [error, setError] = useState(false);
    const { handleNext, handleBack } = useFormNav();
    
    const handleNextClick = () => {
        if (selected) {
            sessionStorage.setItem('yesNo', JSON.stringify(selected));
            handleNext('/BGSB');
        } else {
            setError(true);
        }
    };

    const handleBackClick = () => {
        if (selected) {
            sessionStorage.setItem('yesNo', JSON.stringify(selected));
        }
        handleBack('/introPagePartnerLevel');
    };

    useEffect(() => {
        const savedYesNo = sessionStorage.getItem('yesNo');
        if (savedYesNo) {
            setSelected(JSON.parse(savedYesNo));
        }
    }, []);

    const handleSelect = (yesNo) => {
        setSelected(yesNo);
        setError(false);
    };

    return (
        <motion.div className='introContainer' variants={container} initial="beginning" animate="final" exit="exit">
            <FormControl className='form'>
                <motion.h1 variants={item}>
                    Do you have a dedicated marketing person on staff?
                </motion.h1>

                <motion.div variants={item}>
                    <YesNoGroup error={error} selected={selected} setSelected={handleSelect} />
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

            <motion.div className="progressBarContainer" variants={item}>
                <ProgressBar />
            </motion.div>
        </motion.div>
    );
}

export default IntroPageMarketing;
