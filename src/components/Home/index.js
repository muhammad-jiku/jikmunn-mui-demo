import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import Banner from '../Banner';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Products from '../Products';
import Promotions from '../Promotions';
import UIProvider from '../../context';

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
        <UIProvider>
          <Navbar />
          <Banner />
          <Promotions />
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              p: 4,
            }}
          >
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
        </UIProvider>
      </Stack>
    </Container>
  );
};

export default Home;
