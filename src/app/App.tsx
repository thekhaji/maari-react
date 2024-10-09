import React from 'react';

import '../css/App.css';
import { ButtonGroup, Button } from '@mui/material';

function App() {
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      </ButtonGroup>
  );
}

export default App;
