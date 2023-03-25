import { Container, Stack } from '@mui/material';
import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
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
        <Banner />
        <Footer />
      </Stack>
    </Container>
  );
};

export default Home;
