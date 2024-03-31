import React, { useState } from 'react'
import MapComponent from "./MapComponent";
import Header from './Header'
import TransportForm from "./TransportForm";
import Footer from './Footer';
import Social from './Social';
import './style/App.css'

function App() {
  return (
    <div>
      <Header />
      <TransportForm />
      <Footer />    
    </div>
  );
}

export default App;




