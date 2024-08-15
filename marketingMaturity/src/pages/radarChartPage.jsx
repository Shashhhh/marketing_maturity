import React from 'react';
import RadarChart from '../components/radarChart';
import '@styles/chartPage.css'
import { useFormNav } from '../hooks/useFormNav';
import BackButton from '../components/buttons/backButton';
import NextButton from '../components/buttons/nextButton';
import ProgressBar from '../components/progressbar';
const RadarChartPage = ({formData}) => {
    const {handleBack, handleNext} = useFormNav();
    const handleNextClick = () => {
        sessionStorage.setItem('partnerLevel', JSON.stringify(selected))
        handleNext('/improvementPlan');
    };
    const handleBackClick = () => {
        handleBack('/barChart');
    }
return (
    <div className='chartContainer'>
    <h1>Marketing Maturity Assessment</h1>
    <RadarChart formData = {formData}/>
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

export default RadarChartPage;
