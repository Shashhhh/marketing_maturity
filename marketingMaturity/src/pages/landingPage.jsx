import React from 'react';
import { useNavigate } from 'react-router-dom';
import BeginButton from '../components/letsBeginButton';
import './landingPage.css';
import Gradient from '../components/shaderGradient';
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
<BeginButton onClick={() => navigate('/hello_page')}/>
</div>
</div>
)
}
