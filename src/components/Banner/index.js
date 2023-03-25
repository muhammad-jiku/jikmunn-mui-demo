import React from 'react';

//  external import
import { Typography } from '@mui/material';

//  internal imports
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from '../../styles/banner';
import banner from '../../assets/banner/banner.png';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src={`${banner}`} />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>

        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
