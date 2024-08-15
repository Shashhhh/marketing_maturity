    import React, { useState } from 'react';
    import {Routes, Route, useLocation } from 'react-router-dom';
    import Landing from '@pages/landingPage';
    import BGSB from '@pages/formPages/businessGoals_Strategy_Brand';
    import IntroPageCountry from '@pages/introPages/introPageCountry';
    import IntroPagePartnerLevel from '@pages/introPages/introPagePartnerLevel';
    import IntroPageMarketing from '@pages/introPages/introPageMarketing';
    import CustomerDefinition from '@pages/formPages/customerDefinition';
    import MarketingExecutionPlan from '@pages/formPages/marketingExecutionPlan';
    import MarketingCapacity from '@pages/formPages/marketingCapacity';
    import DatabaseBuilding from '@pages/formPages/databaseBuilding';
    import ContentDevelopment from '@pages/formPages/contentDevelopment';
    import BarChartPage from '@pages/barChartPage';
    import RadarChartPage from '@pages/radarChartPage';
    import {AnimatePresence} from 'framer-motion';
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
            <Route path="/BGSB" element={
            <BGSB
                formData={formData}
                setFormData={setFormData}
            />
            } />
            <Route path="/customerDefinition" element={
            <CustomerDefinition
                formData={formData}
                setFormData={setFormData}
            />
            } />
            <Route path="/marketingExecutionPlan" element={
            <MarketingExecutionPlan
                formData={formData}
                setFormData={setFormData}
            />
            } />
            <Route path="/marketingCapacity" element={
            <MarketingCapacity
                formData={formData}
                setFormData={setFormData}
            />
            } />
            <Route path="/databaseBuilding" element={
            <DatabaseBuilding
                formData={formData}
                setFormData={setFormData}
            />
            } />
            <Route path="/contentDevelopment" element={
            <ContentDevelopment
                formData={formData}
                setFormData={setFormData}
            />
            } />
            <Route path="/barChart" element={<BarChartPage formData={formData} />} />
            <Route path="/radarChart" element={<RadarChartPage formData={formData} />} />
        </Routes>
        </AnimatePresence>

    );
    }

    export default AnimatedRoutes;
