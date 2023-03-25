import React from 'react';

//  external imports
import { Box, Container, Stack, Typography } from '@mui/material';

//  internal imports
import {
  AppDrawerCompo,
  BannerCompo,
  FooterCompo,
  NavbarCompo,
  ProductsCompo,
  PromotionsCompo,
  SearchBoxCompo,
} from '..';
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
          <NavbarCompo />
          <BannerCompo />
          <PromotionsCompo />
          <SearchBoxCompo />
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              p: 4,
            }}
          >
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <ProductsCompo />
          <FooterCompo />
          <AppDrawerCompo />
        </UIProvider>
      </Stack>
    </Container>
  );
};

export default Home;
