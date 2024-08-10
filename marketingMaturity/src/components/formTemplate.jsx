import React from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from './nextButton';
import BackButton from './backButton';
import '../styles/formTemplate.css'
import RadioButtonsGroup from './radioGroup';
import ProgressBar from './progressbar';
function FormTemplate({ headerText, nextPath, backPath, formLabel, options, progress}) {
    const navigate = useNavigate();

    return (
        <div className='formContainer'>
            <form className='form'>
                <h1 className='header'>{headerText}</h1>
                <div className='backButtonContainer'>
                    <BackButton onClick={() => navigate(backPath)} />
                </div>
                <div className='nextButtonContainer'>
                    <NextButton onClick={() => navigate(nextPath)} />
                </div>
                <RadioButtonsGroup formLabel={formLabel} options={options} />
                <div className='progressBarContainer'>
                <ProgressBar progress={progress}/>
                </div>
            </form>
        </div>
    );
}

export default FormTemplate;
