import React from 'react';
import FormTemplate from '../../components/formTemplate';

function DatabaseBuilding({ formData, setFormData }) {
    return (
        <FormTemplate 
            headerText={'Database Building'} 
            backPath={'/marketingCapacity'} 
            nextPath={'/contentDevelopment'}
            formLabel={"Select Best Match"}
            options={[
                "Data is insufficient both in quantity and quality. No central database maintained.",
                "Volume of data reasonable. However, quality of data decreases usability. Central database maintained.",
                "Sufficient volume and quality of data. Maintained centrally. No advanced fields available to enable advanced segmentation. No dedicated approach to contact cleansing and augmentation.",
                "Sufficient volume and quality of data. Maintained centrally. Advanced fields are available to enable advanced segmentation. No dedicated approach to contact cleansing and augmentation.",
                "Sufficient volume and quality of data. Maintained centrally. Advanced fields are available to enable advanced segmentation. A dedicated approach is employed to obtain and clean data on a recurring basis."
            ]}
            formData={formData}
            setFormData={setFormData}
        >
        </FormTemplate>
    );
}

export default DatabaseBuilding;
