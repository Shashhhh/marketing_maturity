import React, { useState, useEffect } from 'react';
import '../../styles/introPage.css';
import NextButton from '../../components/buttons/nextButton';
import BackButton from '../../components/buttons/backButton';
import ProgressBar from '../../components/progressbar';
import PartnerLevelSelect from '../../components/introComponents/partnerLevelSelect';
import { FormControl } from '@mui/material';
import { useFormNav } from '@hooks/useFormNav';
import { backIn } from 'framer-motion';

function IntroPagePartnerLevel() {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState(false);
    const {progress, handleNext, handleBack, navBack} = useFormNav(6);

    const handleNextClick = () => {
        if (selected) {
            sessionStorage.setItem('partnerLevel', JSON.stringify(selected))
            handleNext('/introPageMarketing');

        } else {
            setError(true);
        }
    };
    const handleBackClick = () => {
        if (selected) {
            sessionStorage.setItem('partnerLevel', JSON.stringify(selected))
        }
        handleBack('/introPageCountry');
    }
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
    <div className='introContainer'>
        <FormControl className='form'>
            <h1>
                What partner level are you?
            </h1>

            <PartnerLevelSelect error={error} selected={selected} setSelected={handleSelect}/>
            <div className='navButtonContainer'>
            <div className="backButtonContainer">
                <BackButton onClick={handleBackClick} />
                </div>
            <div className='nextButtonContainer'>
                <NextButton onClick={handleNextClick} />
            </div>
            </div>
            
        
        </FormControl>
        <div className='progressBarContainer'>
                <ProgressBar progress={progress} prevProgress={1} navBack={navBack}/>
        </div>
    </div>
);
}

export default IntroPagePartnerLevel;



