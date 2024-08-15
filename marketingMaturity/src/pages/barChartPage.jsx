import React from 'react';
import BarChart from '../components/barChart';
import '@styles/chartPage.css'
import { useFormNav } from '../hooks/useFormNav';
import BackButton from '../components/buttons/backButton';
import NextButton from '../components/buttons/nextButton';
import ProgressBar from '../components/progressbar';
const BarChartPage = ({formData}) => {
    const {handleBack, handleNext} = useFormNav();
    const handleNextClick = () => {
        handleNext('/radarChart');
    };
    const handleBackClick = () => {
        handleBack('/contentDevelopment');
    }
return (
    <div className='chartContainer'>
    <h1>Marketing Maturity Assessment</h1>
    <BarChart formData = {formData} />
    <div className='navButtonContainer'>
            <div className="backButtonContainer">
                <BackButton onClick={handleBackClick} />
                </div>
            <div className='nextButtonContainer'>
                <NextButton onClick={handleNextClick} />
            </div>
    </div>
    <div className="progressBarContainer">
                <ProgressBar/>
    </div>
    </div>
);
};

export default BarChartPage;
