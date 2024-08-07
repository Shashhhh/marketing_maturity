import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/landingPage';
import Demo from './pages/demo';
import './App.css';
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element = {<Landing/>}/>
    <Route path="/demo" element = {<Demo/>}/>
    </Routes>
    </>
  )
}

export default App
