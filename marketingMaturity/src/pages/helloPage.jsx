import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/helloPage.css';
import pillButton from '../components/pillButton';
import CountrySelect from '../components/countrySelect';
import YesNoGroup from '../components/yesNoRadioGroup';
import PartnerLevelSelect from '../components/partnerLevelSelect';
import NextButton from '../components/nextButton';
import ProgressBar from '../components/progressbar';
import PillButton from '../components/pillButton';
import { FormControl } from '@mui/material';

function HelloPage() {
    const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState(false);
    const [partnerLevelValid, setPartnerLevelValid] = useState(true);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setShowOverlay(true);
        }
    }, []);

    const handleOverlay = () => {
        setShowOverlay(false);
        sessionStorage.setItem('hasVisited', 'true');
    };

    const handleNextClick = () => {
        if (partnerLevelValid) {
            navigate('/BGSB');
        }
    };

    return (
        <div className='helloContainer'>
            {showOverlay && (
                <dialog className="welcomeDialog" open>
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
                </dialog>
            )}
            <FormControl className={`form ${showOverlay ? 'blurred disabled' : ''}`}>
                <h1 className='header'>Hello!</h1>
                <p className='instructions'>
                Please fill out the following fields with accurate information to help us better understand your marketing performance. All fields are required.
                </p>
                <CountrySelect />
                <PartnerLevelSelect setError={setPartnerLevelValid} />
                <YesNoGroup />
                <div className='nextButtonContainer'>
                    <NextButton onClick={handleNextClick} />
                </div>
                <div className='progressBarContainer'>
                    <ProgressBar progress={1}/>
                </div>
            </FormControl>
        </div>
    );
}


export default HelloPage;
