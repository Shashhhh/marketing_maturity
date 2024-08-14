import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landingPage';
import BGSB from './pages/formPages/businessGoals_Strategy_Brand';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import './App.css';
import IntroPageCountry from './pages/introPages/introPageCountry';
import IntroPagePartnerLevel from './pages/introPages/introPagePartnerLevel';
import IntroPageMarketing from './pages/introPages/introPageMarketing';
import ChartPage from './pages/chartPage';
import CustomerDefinition from './pages/formPages/customerDefinition';
import MarketingExecutionPlan from './pages/formPages/marketingExecutionPlan';
import MarketingCapacity from './pages/formPages/marketingCapacity';
import DatabaseBuilding from './pages/formPages/databaseBuilding';
import ContentDevelopment from './pages/formPages/contentDevelopment';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#099',
    },
    secondary: orange,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  const [formData, setFormData] = useState({});
  return (
    <ThemeProvider theme={theme}>
      <Routes>
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
        <Route path="/results" element={<ChartPage formData={formData} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
