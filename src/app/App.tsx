import React from 'react';
import { Navbar } from './components/header';
import { Footer } from './components/footer';
import '../css/App.css';
import { ButtonGroup, Button } from '@mui/material';


function App() {
  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  );
}

export default App;
