import { Container, Stack } from '@mui/material';
import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Products from '../Products';
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
        <Products />
        <Footer />
      </Stack>
    </Container>
  );
};

export default Home;
