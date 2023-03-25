import React from 'react';

//  external imports
import { Box, Container, Stack, Typography } from '@mui/material';

//  internal imports
import UIProvider from '../../context';
import {
  AppDrawer,
  Banner,
  Footer,
  Navbar,
  Products,
  Promotions,
  SearchBox,
} from '..';

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
