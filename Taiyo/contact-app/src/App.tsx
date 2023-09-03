import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './pages/AllRoutes';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
