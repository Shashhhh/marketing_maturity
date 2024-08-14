import React from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from './buttons/nextButton';
import BackButton from './buttons/backButton';
import '../styles/formTemplate.css'
import RadioButtonsGroup from './radioGroup';
import ProgressBar from './progressbar';
function FormTemplate({ headerText, nextPath, backPath, formLabel, options, progress}) {
    const navigate = useNavigate();
    
    return (
        <div className='formContainer'>
            <form className='form'>
                <h1 className='header'>{headerText}</h1>
                <RadioButtonsGroup formLabel={formLabel} options={options} />
                <div className='navButtonContainer'>
                    <div className='backButtonContainer'>
                        <BackButton onClick={() => navigate(backPath)} />
                    </div>
                    <div className='nextButtonContainer'>
                        <NextButton onClick={() => navigate(nextPath)} />
                    </div>
                </div>
            </form>
            <div className='progressBarContainer'>
                <ProgressBar progress={10}/>
            </div>
            
        </div>
    );
}

export default FormTemplate;
