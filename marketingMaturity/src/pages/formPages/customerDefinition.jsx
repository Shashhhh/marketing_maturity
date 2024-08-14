import React from 'react';
import FormTemplate from '../../components/formTemplate';

function CustomerDefiniton({formData, setFormData}) {
    return (
        <FormTemplate 
            headerText={'Customer Definition'} 
            backPath={'/BGSB'} 
            nextPath={'/marketingExecutionPlan'}  
            formLabel={"Select Best Match"}
            options={[
                "No formal definition of target market, persona, buyer's journey or customer lifecycle",
                'Formal definition of target market alone.',
                "Formal definition of target market and persona.",
                "Formal definition of target market and persona, buyer's journey",
                "Formal definition of target market and persona, buyer's journey and customer lifecycle"
            ]}
            formData={formData}
            setFormData={setFormData}
        >
        </FormTemplate>
    );
}

export default CustomerDefiniton;
