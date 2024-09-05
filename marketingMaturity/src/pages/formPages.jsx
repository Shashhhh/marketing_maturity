import React, { useState } from 'react';
import FormTemplate from '@components/formTemplate';

// Section for Business Goals, Strategy, and Brand
export function BGSB({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Business Goals, Strategy, and Brand'}
            backPath={'/introPageMarketing'}
            nextPath={'/customerDefinition'}
            formLabel={"Select Best Match"}
            options={[
                'No business goals or strategy defined. No discernable brand identity. No brand standards or governance.',
                'Some definition of business goals, strategy, and brand. Minimum levels of brand standards or governance.',
                'Formal business goals, strategy, and brand identity all clearly defined, but with minimal alignment to one another. Brand standards enforced sporadically.',
                'Formal business goals, strategy, and brand identity all clearly defined and aligned. Brand standards enforced with reasonable consistency.',
                'Formal business goals, strategy, and brand identity all clearly defined and aligned. Brand is recognized by the market. Brand standards deeply enforced.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Customer Definition
export function CustomerDefinition({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Customer Definition'}
            backPath={'/businessGoals'}
            nextPath={'/marketingExecution'}
            formLabel={"Select Best Match"}
            options={[
                'No formal definition of target market, persona, buyer\'s journey or customer lifecycle.',
                'Formal definition of target market alone.',
                'Formal definition of target market and persona.',
                'Formal definition of target market and persona, buyer’s journey.',
                'Formal definition of target market and persona, buyer\'s journey and customer lifecycle.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Marketing Execution Plan
export function MarketingExecutionPlan({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Marketing Execution Plan'}
            backPath={'/customerDefinition'}
            nextPath={'/marketingCapacity'}
            formLabel={"Select Best Match"}
            options={[
                'No formal marketing plan defined.',
                'Formal marketing plan in place, lacking goals and other specifics.',
                'Formal marketing plan in place, including specific goals. Missing additional factors. Moderate use of Siemens campaigns.',
                'Formal marketing plan in place, including specific goals, targets, solutions, and marketing activities. Proper tactics selected for market segment. High use of Siemens campaigns.',
                'Formal marketing plan in place with all necessary factors. Reviewed and updated at least quarterly, serving as a guide for the business.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Marketing Capacity
export function MarketingCapacity({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Marketing Capacity'}
            backPath={'/marketingExecution'}
            nextPath={'/databaseBuilding'}
            formLabel={"Select Best Match"}
            options={[
                'No dedicated or flexible marketing personnel.',
                'Marketing activities conducted sporadically by flexible or part-time personnel.',
                'Dedicated marketing personnel, achieving Siemens Marketing Rep certification.',
                'Dedicated marketing personnel, achieving Siemens Marketing Rep certification. Sufficient functional coverage to support strategy (ex. Telemarketing, Telequalification).',
                'Dedicated marketing personnel, achieving Siemens Marketing Rep certification. Sufficient functional coverage to support strategy (ex. Telemarketing, Telequalification). Onboarding and process documentation available.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Database Building
export function DatabaseBuilding({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Database Building'}
            backPath={'/marketingCapacity'}
            nextPath={'/contentDevelopment'}
            formLabel={"Select Best Match"}
            options={[
                'Data is insufficient both in quantity and quality. No central database maintained.',
                'Volume of data reasonable. However, quality of data decreases usability. Central database maintained.',
                'Sufficient volume and quality of data. Maintained centrally. No advanced fields available to enable advanced segmentation. No dedicated approach to contact cleansing and augmentation.',
                'Sufficient volume and quality of data. Maintained centrally. Advanced fields are available to enable advanced segmentation. No dedicated approach to contact cleansing and augmentation.',
                'Sufficient volume and quality of data. Maintained centrally. Advanced fields are available to enable advanced segmentation. A dedicated approach is employed to obtain and clean data on recurring basis.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Content Development
export function ContentDevelopment({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Content Development'}
            backPath={'/databaseBuilding'}
            nextPath={'/campaignExecution'}
            formLabel={"Select Best Match"}
            options={[
                'Neither Siemens campaign content is actively promoted nor is original content created.',
                'Either only Siemens campaign or original content is actively promoted to customers and prospects.',
                'Original content is created in addition to the active promotion of Siemens campaign content. However, no guiding messaging framework is used. Central storage of content is also lacking.',
                'Original content is created in addition to the active promotion of Siemens campaign content. Either dedicated messaging framework is used or central storage of content is available and accurately tagged for use.',
                'Original content is created in addition to the active promotion of Siemens campaign content. Dedicated messaging framework is used. Central storage of content is available and accurately tagged for use.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Campaign Execution
export function CampaignExecution({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Campaign Execution'}
            backPath={'/contentDevelopment'}
            nextPath={'/outboundMarketing'}
            formLabel={"Select Best Match"}
            options={[
                'Minimal levels of marketing activity (0-2 multi-channel campaign activities executed per year). Sales is generally unaware or unsupportive of marketing efforts.',
                'Moderate levels of marketing activity (3-5 multi-channel campaign activities per year). Sales is generally unaware or unsupportive of marketing efforts.',
                'Moderate levels of marketing activity (5-8 multi-channel campaign activities per year). Sales is generally aware but unsupportive of marketing efforts.',
                'Moderate levels of marketing activity (9-12 multi-channel campaign activities per year). Sales is aware and supportive of marketing efforts.',
                'Moderate levels of marketing activity (12+ multi-channel campaign activities per year). Sales is aware, properly enabled, and measured on their support of marketing efforts.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Outbound Marketing
export function OutboundMarketing({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Outbound Marketing'}
            backPath={'/campaignExecution'}
            nextPath={'/inboundMarketing'}
            formLabel={"Select Best Match"}
            options={[
                'Minimal levels of marketing activity, utilizing tactics ill-chosen for intended market or buyer\'s journey / customer lifecycle phase. No testing of different tactics to see which performs best.',
                'Moderate levels of marketing activity, utilizing tactics ill-chosen for intended market or buyer\'s journey / customer lifecycle phase. No testing of different tactics to see which performs best.',
                'Moderate levels of marketing activity, utilizing tactics well-suited to intended market and buyer\'s journey / customer lifecycle phase. Some testing of different tactics to see which performs best.',
                'Moderate levels of marketing activity, utilizing the most efficient and effective tactics, deeply aligned to intended market and buyer\'s journey / customer lifecycle phase. Selecting proven tactics using data from testing.',
                'Maximum levels of marketing activity, utilizing the most efficient and effective tactics, deeply aligned to intended market and buyer\'s journey / customer lifecycle phase. Selecting proven tactics using data from testing.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Inbound Marketing
export function InboundMarketing({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Inbound Marketing'}
            nextPath={'/leadManagement'}
            backPath={'/outboundMarketing'}
            formLabel={"Select Best Match"}
            options={[
                'Siemens content is not actively promoted nor is original content created by the partner on a regular basis.',
                'Only Siemens content is promoted via web, with no original content created by the partner on a regular basis.',
                'Original content is created and promoted in addition to Siemens content. Active presence on social media or investments in SEO.',
                'Original content is created and promoted in addition to Siemens content. Active presence on social media. Investments in SEO. Discernable position as thought leaders.',
                'Original content is created and promoted in addition to Siemens content. Active presence on social media. Investments in SEO. Discernable position as thought leaders. Referral program in place to source leads.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}
// Section for Lead Management
export function LeadManagement({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Lead Management'}
            backPath={'/inboundMarketing'}
            nextPath={'/reportingAnalysis'}
            formLabel={"Select Best Match"}
            options={[
                'No defined lead management process in place.',
                'Some Lead Management process in place, able to define general process from Inquiry to Revenue.',
                'Lead management process in place with general understanding of expectations between marketing and sales regarding lead processing, follow-up and CRM system updates.',
                'Lead management process in place with measurable and enforced agreements between sales and marketing regarding lead processing, follow-up and CRM system updates.',
                'Lead management process in place with measurable and enforced agreements between sales and marketing, and well defined Lead Nurturing process to nurture and retarget inquires.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}

// Section for Reporting & Analysis
export function ReportingAnalysis({ formData, setFormData }) {
    return (
        <FormTemplate
            headerText={'Reporting & Analysis'}
            nextPath={'/barChart'}
            backPath={'/leadManagement'}
            formLabel={"Select Best Match"}
            options={[
                'No goal setting or reporting and analytics in place.',
                'Low usage of KPIs to measure overall marketing performance. Sporadic reviews at executive level. Marketing is not a significant driver of new business.',
                'Defined KPIs to measure overall marketing performance. Periodic reviews at executive level. Marketing is a moderate driver of new business.',
                'Defined KPIs to measure overall marketing performance. Standard reviews at multiple levels. Marketing is a moderate driver of new business. General awareness of the marketing activities contributing to success.',
                'Defined KPIs to measure overall marketing performance. Standard reviews at multiple levels. Marketing is a significant driver of new business. Knowledge of successful marketing campaigns, tactics, as well as ROI.'
            ]}
            formData={formData}
            setFormData={setFormData}
        />
    );
}
