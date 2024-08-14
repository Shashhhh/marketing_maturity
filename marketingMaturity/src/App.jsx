import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/landingPage';
import BGSB from './pages/formPages/businessGoals_Strategy_Brand';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import './App.css';
import IntroPageCountry from './pages/introPages/introPageCountry';
import IntroPagePartnerLevel from './pages/introPages/introPagePartnerLevel';
import IntroPageMarketing from './pages/introPages/introPageMarketing';
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
})
[formData, setFormData] = useState({});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
    <Route path="/" element = {<Landing/>}/>
    <Route path="/introPageCountry" element = {<IntroPageCountry/>}/>
    <Route path="/introPagePartnerLevel" element = {<IntroPagePartnerLevel/>}/>
    <Route path="/introPageMarketing" element = {<IntroPageMarketing/>}/>
    <Route path="/BGSB" element = {<BGSB/>}/>
    </Routes>
    </ThemeProvider>
  )
}

export default App
