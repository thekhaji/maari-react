import React from 'react';
import Navbar from './components/header';
import { Footer } from './components/footer';

import { ButtonGroup, Button } from '@mui/material';
import '../css/App.css';
import '../css/navbar.css'

function App() {
  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  );
}

export default App;
