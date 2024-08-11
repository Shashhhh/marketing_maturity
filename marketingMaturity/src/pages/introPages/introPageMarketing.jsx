import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/introPage.css';
import NextButton from '../../components/buttons/nextButton';
import ProgressBar from '../../components/progressbar';
import { FormControl } from '@mui/material';
import YesNoGroup from '../../components/yesNoRadioGroup';
import BackButton from '../../components/buttons/backButton';
function IntroPageMarketing() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    const [error, setError] = useState(false);

    const handleNextClick = () => {
        if (selected) {
            sessionStorage.setItem('yesNo', JSON.stringify(selected))
            navigate('/BGSB');

        } else {
            setError(true);
        }
    };
    const handleBackClick = () => {
        if (selected) {
            sessionStorage.setItem('yesNo', JSON.stringify(selected))
        }
        navigate('/introPagePartnerLevel');
    }
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
    <div className='introContainer'>
        <FormControl className='form'>
            <h1>
                Do you have a dedicated marketing person on staff?
            </h1>
            <YesNoGroup error={error} selected={selected} setSelected={handleSelect}/>
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
export default IntroPageMarketing;
