import React from 'react';

//  external imports
import { useMediaQuery, useTheme } from '@mui/material';

//  internal imports
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
