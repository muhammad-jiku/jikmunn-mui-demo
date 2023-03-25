import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import NavbarMobileView from './NavbarMobileView';
import NavbarDesktopView from './NavbarDesktopView';

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {matches ? (
        <NavbarMobileView matches={matches} />
      ) : (
        <NavbarDesktopView matches={matches} />
      )}
    </>
  );
};

export default Navbar;
