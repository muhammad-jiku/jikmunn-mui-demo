import { Container, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../Navbar';

const Home = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        background: '#fff',
      }}
    >
      <Stack>
        <Navbar />
      </Stack>
    </Container>
  );
};

export default Home;
