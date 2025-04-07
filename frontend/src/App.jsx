import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import FishStockList from './inventoryManagement/FishStockList'
import DiseasePrediction from './QualityAssurance/Prediction'
import NavigationBar from './components/Navbar'
//import AuthenticationPage from './Authentication/Authenticate'
import LoginSignup from './Authentication/LoginSignup'
import Register from './Authentication/Register';
const App = () => {
  return (
    <>
    <NavigationBar />
      {/*< FishStockList/>*/}
      <DiseasePrediction />
      {/*<AuthenticationPage />*/}
      <Routes>
        <Route path='LoginSignup' elements={<LoginSignup/>}/>
        <Route path='Register' elements={<Register/>} />
      </Routes>
      
      </>
  );
};

export default App;
