import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css'
import Landing from './pages/landingPage';

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element = {<Landing/>}/>
    </Routes>
    </>
  )
}

export default App
