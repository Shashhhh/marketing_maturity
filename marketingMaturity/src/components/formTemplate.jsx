import React, { useState } from 'react';
import NextButton from './buttons/nextButton';
import BackButton from './buttons/backButton';
import '../styles/formTemplate.css';
import RadioButtonsGroup from './radioGroup';
import ProgressBar from './progressbar';
import { useFormNav } from '@hooks/useFormNav';

function FormTemplate({ headerText, nextPath, backPath, formLabel, options, formData, setFormData }) {
    const {handleNext, handleBack } = useFormNav();
    const [error, setError] = useState(false);

    const handleSelectionChange = (value) => {
        setFormData({
            ...formData,
            [headerText]: value,
        });
    };

    const handleNextClick = () => {
        if (formData[headerText]) {
            handleNext(nextPath);
        } else {
            setError(true);
        }
    };

    const handleBackClick = () => {
        handleBack(backPath);
    };

    return (
        <div className='formContainer'>
            <form className='form'>
                <h1 className='header'>{headerText}</h1>
                <RadioButtonsGroup 
                    formLabel={formLabel} 
                    options={options} 
                    selectedValue={formData[headerText] || ''}
                    onValueChange={handleSelectionChange}
                    error={error ? true : undefined}
                />
                <div className='navButtonContainer'>
                    <div className='backButtonContainer'>
                        <BackButton onClick={handleBackClick} />
                    </div>
                    <div className='nextButtonContainer'>
                        <NextButton onClick={handleNextClick} />
                    </div>
                </div>
            </form>
            <div className='progressBarContainer'>
                <ProgressBar/>
            </div>
        </div>
    );
}

export default FormTemplate;
