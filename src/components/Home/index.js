import { Container, Stack } from '@mui/material';
import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Promotions from '../Promotions';

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
        <Promotions />
        <Footer />
      </Stack>
    </Container>
  );
};

export default Home;
