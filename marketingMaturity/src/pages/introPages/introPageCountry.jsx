import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '@styles/introPage.css';
import CountrySelect from '../../components/introComponents/countrySelect';
import NextButton from '../../components/buttons/nextButton';
import ProgressBar from '../../components/progressbar';
import PillButton from '../../components/buttons/pillButton';
import { FormControl } from '@mui/material';
import { useFormNav } from '@hooks/useFormNav';
import BackButton from '../../components/buttons/backButton';
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

const overlayAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

function IntroPageCountry() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryError, setCountryError] = useState(false);
    const { handleNext, handleBack } = useFormNav();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setShowOverlay(true);
        } else {
            setAnimate(true);
        }
        const savedCountry = sessionStorage.getItem('selectedCountry');
        if (savedCountry) {
            setSelectedCountry(JSON.parse(savedCountry));
        }
    }, []);

    const handleOverlay = () => {
        setShowOverlay(false);
        sessionStorage.setItem('hasVisited', 'true');
        setAnimate(true);
    };

    const handleNextClick = () => {
        if (selectedCountry) {
            sessionStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
            handleNext('/introPagePartnerLevel');
        } else {
            setCountryError(true);
        }
    }  
    const handleBackClick = () => {
        if (selectedCountry) {
            sessionStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
        }
        handleBack('/');
    }

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setCountryError(false);
    };

    return (
        <motion.div 
            className='introContainer' 
            variants={container} 
            initial="beginning" 
            animate={animate ? "final" : "beginning"}
            exit="exit"
        >
            {showOverlay && (
                <motion.dialog 
                    className="welcomeDialog" 
                    open 
                    variants={overlayAnimation} 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit"
                >
                    <span style={{ fontWeight: 'bold' }}>
                        Survey Disclaimer
                    </span>
                    <p>
                        Thank you for taking the time to participate in our survey. We want to assure you that your responses will be used exclusively for general analytical purposes. No personal information that could identify you individually will be collected. Your privacy is important to us, and we are committed to maintaining the confidentiality of your responses.
                    </p>
                    <form method="dialog">
                        <div className="dialogButtonContainer">
                            <PillButton onClick={handleOverlay}>Start Survey</PillButton>
                        </div>
                    </form>
                </motion.dialog>
            )}
            <FormControl className={`form ${showOverlay ? 'blurred disabled' : ''}`}>
                <motion.h1 variants={item}>
                What country are you located in?
                </motion.h1>
                <motion.div variants={item}>
                    <CountrySelect setSelectedCountry={handleCountrySelect} selectedCountry={selectedCountry} error={countryError} />
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

export default IntroPageCountry;
