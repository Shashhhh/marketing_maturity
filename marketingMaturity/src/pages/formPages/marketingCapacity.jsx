import React from 'react';
import FormTemplate from '../../components/formTemplate';

function MarketingCapacity({ formData, setFormData }) {
    return (
        <FormTemplate 
            headerText={'Marketing Capacity'} 
            backPath={'/marketingExecutionPlan'} 
            nextPath={'/databaseBuilding'}
            formLabel={"Select Best Match"}
            options={[
                "No dedicated or flexible marketing personnel.",
                "Marketing activities conducted sporadically by flexible or part-time personnel.",
                "Dedicated marketing personnel, achieving Siemens Marketing Rep certification.",
                "Dedicated marketing personnel, achieving Siemens Marketing Rep certification. Sufficient functional coverage to support strategy (e.g., Telemarketing, Telequalification).",
                "Dedicated marketing personnel, achieving Siemens Marketing Rep certification. Sufficient functional coverage to support strategy (e.g., Telemarketing, Telequalification). Onboarding and process documentation available."
            ]}
            formData={formData}
            setFormData={setFormData}
        >
        </FormTemplate>
    );
}

export default MarketingCapacity;
