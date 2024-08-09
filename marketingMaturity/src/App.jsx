import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/landingPage';
import HelloPage from './pages/helloPage';
import BGSB from './pages/businessGoals_Strategy_Brand';
import { ThemeProvider, createTheme } from '@mui/material';
import { teal, orange } from '@mui/material/colors';
import './App.css';
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: teal,
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
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
    <Route path="/" element = {<Landing/>}/>
    <Route path="/helloPage" element = {<HelloPage/>}/>
    <Route path="/BGSB" element = {<BGSB/>}/>
    </Routes>
    </ThemeProvider>



  )
}

export default App
