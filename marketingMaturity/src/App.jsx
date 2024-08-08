import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/landingPage';
import HelloPage from './pages/helloPage';
import './App.css';
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element = {<Landing/>}/>
    <Route path="/hello_page" element = {<HelloPage/>}/>
    </Routes>
    </>
  )
}

export default App
