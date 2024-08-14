import React from 'react';
import FormTemplate from '../../components/formTemplate';

function MarketingExecutionPlan({ formData, setFormData }) {
    return (
        <FormTemplate 
            headerText={'Marketing Execution Plan'} 
            backPath={'/customerDefinition'} 
            nextPath={'/marketingCapacity'}
            formLabel={"Select Best Match"}
            options={[
                "No formal marketing plan defined.",
                "Formal marketing plan in place, lacking goals and other specifics.",
                "Formal marketing plan in place, including specific goals. Missing additional factors. Moderate use of Siemens campaigns.",
                "Formal marketing plan in place, including specific goals, targets, solutions, and marketing activities. Proper tactics selected for market segment. High use of Siemens campaigns.",
                "Formal marketing plan in place with all necessary factors. Reviewed and updated at least quarterly, serving as a guide for the business."
            ]}
            formData={formData}
            setFormData={setFormData}
        >
        </FormTemplate>
    );
}

export default MarketingExecutionPlan;
