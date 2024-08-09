import React from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from './nextButton';
import BackButton from './backButton';

function FormTemplate({ headerText, nextPath, backPath }) {
    const navigate = useNavigate();

    return (
        <div className='helloContainer'>
            <form className='form'>
                <h1 className='header'>{headerText}</h1>
                <div className='backButtonContainer'>
                    <BackButton onClick={() => navigate(backPath)} />
                </div>
                <div className='nextButtonContainer'>
                    <NextButton onClick={() => navigate(nextPath)} />
                </div>
            </form>
        </div>
    );
}

export default FormTemplate;
