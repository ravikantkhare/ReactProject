
import React from 'react';
    import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";

  import Home from './router/home';
  import About from './router/about';
  import Main from './router/main';
  

 


function App() {
  

  return (
    <>
    
    <Router>
      <Routes>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
