import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from '../components/nextButton';
import BackButton from '../components/backButton';
import './businessGoals_Strategy_Brand.css';

function BGSB() {
    const navigate = useNavigate();
    return (
        <div className='helloContainer'>
            <form className='form'>
                <h1 className='header'>Goals, Strategys, and Brand</h1>
                <div className='backButtonContainer'>
                    <BackButton onClick={() => navigate('/helloPage')}/>
                </div>
                <div className='nextButtonContainer'>
                    <NextButton onClick={() => navigate('/BGSB')}/>
                </div>
            </form>
        </div>
    );
}

export default BGSB;
