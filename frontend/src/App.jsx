import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/Navbar';
import DiseasePrediction from './QualityAssurance/Prediction';
import LoginSignup from './Authentication/LoginSignup';
import Register from './Authentication/Register';

const App = () => {
  return (
    <>
      <NavigationBar />
      <DiseasePrediction />
      <Routes>
        
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
