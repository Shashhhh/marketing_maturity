import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/helloPage.css';
import BasicRoundButton from '../components/basicRoundButton';
import CountrySelect from '../components/countrySelect';
import YesNoGroup from '../components/yesNoRadioGroup';
import PartnerLevelSelect from '../components/partnerLevelSelect';
import NextButton from '../components/nextButton';

function HelloPage() {
    const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState(true);

    const handleOverlay = () => {
        setShowOverlay(false);
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
                            <BasicRoundButton onClick={handleOverlay}>Start Survey</BasicRoundButton>
                        </div>
                    </form>
                </dialog>
            )}
            <form className={`form ${showOverlay ? 'blurred' : ''}`}>
                <h1 className='header'>Hello!</h1>
                <p className='instructions'>
                    Please fill out the following fields with accurate information to help us better understand your marketing performance. All fields are required.
                </p>
                <CountrySelect />
                <PartnerLevelSelect />
                <YesNoGroup />
                <div className='nextButtonContainer'>
                    <NextButton onClick={() => navigate('/BGSB')} />
                </div>
            </form>
        </div>
    );
}

export default HelloPage;
