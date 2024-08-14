import React from 'react';
import FormTemplate from '../../components/formTemplate';

function ContentDevelopment({ formData, setFormData }) {
    return (
        <FormTemplate 
            headerText={'Content Development'} 
            backPath={'/databaseBuilding'} 
            nextPath={'/barChart'}
            formLabel={"Select Best Match"}
            options={[
                "Neither Siemens campaign content is actively promoted nor is original content created.",
                "Either only Siemens campaign or original content is actively promoted to customers and prospects.",
                "Original content is created in addition to the active promotion of Siemens campaign content. However, no guiding messaging framework is used. Central storage of content is also lacking.",
                "Original content is created in addition to the active promotion of Siemens campaign content. Either dedicated messaging framework is used or central storage of content is available and accurately tagged for use.",
                "Original content is created in addition to the active promotion of Siemens campaign content. Dedicated messaging framework is used. Central storage of content is available and accurately tagged for use."
            ]}
            formData={formData}
            setFormData={setFormData}
        >
        </FormTemplate>
    );
}

export default ContentDevelopment;
