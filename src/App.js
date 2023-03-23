import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Button
        variant="contained"
        color="success"
        sx={{
          mt: '2rem',
        }}
      >
        Hello
      </Button>
    </div>
  );
}

export default App;
