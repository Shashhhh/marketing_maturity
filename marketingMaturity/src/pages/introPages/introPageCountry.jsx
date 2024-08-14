import React, { useState, useEffect } from 'react';
import '@styles/introPage.css';
import CountrySelect from '../../components/introComponents/countrySelect';
import NextButton from '../../components/buttons/nextButton';
import ProgressBar from '../../components/progressbar';
import PillButton from '../../components/buttons/pillButton';
import { FormControl } from '@mui/material';
import { useFormNav } from '@hooks/useFormNav';
function IntroPageCountry() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryError, setCountryError] = useState(false);
    const {handleNext } = useFormNav();
    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setShowOverlay(true);
        }

        const savedCountry = sessionStorage.getItem('selectedCountry');
        if (savedCountry) {
            setSelectedCountry(JSON.parse(savedCountry));
        }
    }, []);

    const handleOverlay = () => {
        setShowOverlay(false);
        sessionStorage.setItem('hasVisited', 'true');
    };

    const handleNextClick = () => {
        if (selectedCountry) {
            sessionStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
            handleNext('/introPagePartnerLevel');
        } else {
            setCountryError(true);
        }
    }

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setCountryError(false);
    };

    return (
        <div className='introContainer'>
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
                <h1>
                    What country are you located in?
                </h1>

                <CountrySelect setSelectedCountry={handleCountrySelect} selectedCountry={selectedCountry} error={countryError} />

                <div className='nextButtonContainer'>
                    <NextButton onClick={handleNextClick} />
                </div>

            </FormControl>

            <div className="progressBarContainer">
                <ProgressBar/>
            </div>
        </div>
    );
}

export default IntroPageCountry;
