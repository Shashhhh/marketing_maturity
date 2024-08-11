import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/landingPage.css';
import Gradient from '../components/shaderGradient';
import BasicButton from '../components/buttons/basicButton';
export default function Landing(){
const navigate = useNavigate()
return (
<div className='container'>
    <Gradient/>
    <div>
    <h1 className='welcomeHeader'>
        Welcome to the Siemens Marketing Maturity Assessment
    </h1>
    <p className='helperText'>
        Please answer the questions in the accompany tabs, reflecting your current marketing practices.
    </p>
</div>
<div className='beginButtonContainer'>
<BasicButton onClick={() => navigate('/introPageCountry')}>
    Let's Begin
</BasicButton>
</div>
</div>
)
}
