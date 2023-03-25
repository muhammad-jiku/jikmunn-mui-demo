import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import Banner from '../Banner';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Products from '../Products';
import Promotions from '../Promotions';
import UIProvider from '../../context';
import AppDrawer from '../Drawer';
import SearchBox from '../Search';

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
          <SearchBox />
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
          <AppDrawer />
        </UIProvider>
      </Stack>
    </Container>
  );
};

export default Home;
