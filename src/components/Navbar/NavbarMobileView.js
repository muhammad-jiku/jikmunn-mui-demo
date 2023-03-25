import React from 'react';
import { IconButton } from '@mui/material';
import { NavbarContainer, NavbarHeader } from '../../styles/navbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './Actions';

const NavbarMobileView = ({ matches }) => {
  return (
    <NavbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <NavbarHeader textAlign={'center'} variant="h4">
        My Bags
      </NavbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </NavbarContainer>
  );
};

export default NavbarMobileView;
