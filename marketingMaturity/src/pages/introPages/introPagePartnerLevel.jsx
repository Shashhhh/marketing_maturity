import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/introPage.css';
import NextButton from '../../components/buttons/nextButton';
import BackButton from '../../components/buttons/backButton';
import ProgressBar from '../../components/progressbar';
import PartnerLevelSelect from '../../components/partnerLevelSelect';
import { FormControl } from '@mui/material';

function IntroPagePartnerLevel() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    const [error, setError] = useState(false);

    const handleNextClick = () => {
        if (selected) {
            sessionStorage.setItem('partnerLevel', JSON.stringify(selected))
            navigate('/introPageMarketing');

        } else {
            setError(true);
        }
    };
    const handleBackClick = () => {
        if (selected) {
            sessionStorage.setItem('partnerLevel', JSON.stringify(selected))
        }
        navigate('/introPageCountry');
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
                <ProgressBar progress={10}/>
        </div>
    </div>
);
}

export default IntroPagePartnerLevel;



