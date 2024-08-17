import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NextButton from './buttons/nextButton';
import BackButton from './buttons/backButton';
import '../styles/formTemplate.css';
import RadioButtonsGroup from './radioGroup';
import ProgressBar from './progressbar';
import { useFormNav } from '@hooks/useFormNav';

const container = {
    beginning: {},
    final: { 
        transition: { 
            staggerChildren: 0.3
        } 
    },
    exit: { opacity: 0 }
};

const item = {
    beginning: { opacity: 0, y: -20 },
    final: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeOut' 
        }
    }
};

function FormTemplate({ headerText, nextPath, backPath, formLabel, options, formData, setFormData }) {
    const { handleNext, handleBack } = useFormNav();
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
        <motion.div className='formContainer' variants={container} initial="beginning" animate="final" exit="exit">
            <motion.form className='form' variants={item}>
                <motion.h1 className='header' variants={item}>{headerText}</motion.h1>
                <motion.div variants={item}>
                    <RadioButtonsGroup 
                        formLabel={formLabel} 
                        options={options} 
                        selectedValue={formData[headerText] || ''}
                        onValueChange={handleSelectionChange}
                        error={error ? true : undefined}
                    />
                </motion.div>
                <motion.div className='navButtonContainer' variants={item}>
                    <div className='backButtonContainer'>
                        <BackButton onClick={handleBackClick} />
                    </div>
                    <div className='nextButtonContainer'>
                        <NextButton onClick={handleNextClick} />
                    </div>
                </motion.div>
            </motion.form>
        </motion.div>
    );
}

export default FormTemplate;
/*
            <motion.div className="progressBarContainer" variants={item}>
                <ProgressBar />
            </motion.div>
*/