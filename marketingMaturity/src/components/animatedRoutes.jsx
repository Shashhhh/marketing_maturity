import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from '@pages/landingPage';
import IntroPageCountry from '@pages/introPages/introPageCountry';
import IntroPagePartnerLevel from '@pages/introPages/introPagePartnerLevel';
import IntroPageMarketing from '@pages/introPages/introPageMarketing';
import BarChartPage from '@pages/barChartPage';
import RadarChartPage from '@pages/radarChartPage';
import { BGSB, CustomerDefinition, MarketingExecutionPlan, MarketingCapacity, DatabaseBuilding, ContentDevelopment, CampaignExecution, OutboundMarketing, InboundMarketing, LeadManagement, ReportingAnalysis } from '@pages/formPages';

function AnimatedRoutes() {
    const [formData, setFormData] = useState({});
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing />} />
                <Route path="/introPageCountry" element={<IntroPageCountry />} />
                <Route path="/introPagePartnerLevel" element={<IntroPagePartnerLevel />} />
                <Route path="/introPageMarketing" element={<IntroPageMarketing />} />
                
                <Route path="/BGSB" element={<BGSB formData={formData} setFormData={setFormData} />} />
                <Route path="/customerDefinition" element={<CustomerDefinition formData={formData} setFormData={setFormData} />} />
                <Route path="/marketingExecution" element={<MarketingExecutionPlan formData={formData} setFormData={setFormData} />} />
                <Route path="/marketingCapacity" element={<MarketingCapacity formData={formData} setFormData={setFormData} />} />
                <Route path="/databaseBuilding" element={<DatabaseBuilding formData={formData} setFormData={setFormData} />} />
                <Route path="/contentDevelopment" element={<ContentDevelopment formData={formData} setFormData={setFormData} />} />
                <Route path="/campaignExecution" element={<CampaignExecution formData={formData} setFormData={setFormData} />} />
                <Route path="/outboundMarketing" element={<OutboundMarketing formData={formData} setFormData={setFormData} />} />
                <Route path="/inboundMarketing" element={<InboundMarketing formData={formData} setFormData={setFormData} />} />
                <Route path="/leadManagement" element={<LeadManagement formData={formData} setFormData={setFormData} />} />
                <Route path="/reportingAnalysis" element={<ReportingAnalysis formData={formData} setFormData={setFormData} />} />
                
                <Route path="/barChart" element={<BarChartPage formData={formData} />} />
                <Route path="/radarChart" element={<RadarChartPage formData={formData} />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
