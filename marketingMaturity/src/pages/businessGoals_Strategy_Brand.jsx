import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/businessGoals_Strategy_Brand.css';
import FormTemplate from '../components/formTemplate';

function BGSB() {
    const navigate = useNavigate();
    return (
        <FormTemplate 
            headerText={'Goals, Strategies, and Brand'} 
            backPath={'/helloPage'} 
            nextPath={'/temp'}  
            formLabel="Select Best Match"
            options={[
                'No business goals or strategy defined. No discernable brand identity. No brand standards or governance.',
                'Some definition of business goals, strategy, and brand. Minimum levels of brand standards or governance.',
                'Formal business goals, strategy, and brand identity all clearly defined, but with minimal alignment to one another. Brand standards enforced sporadically.',
                'Formal business goals, strategy, and brand identity all clearly defined and aligned. Brand standards enforced with reasonable consistency.',
                'Formal business goals, strategy, and brand identity all clearly defined and aligned. Brand is recognized by the market. Brand standards deeply enforced.'
            ]}
            progress={10}
        >
        </FormTemplate>
    );
}

export default BGSB;
