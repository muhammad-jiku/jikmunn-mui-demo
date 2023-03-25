import React from 'react';
import { IconButton } from '@mui/material';
import { NavbarContainer, NavbarHeader } from '../../styles/navbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './Actions';
import { useUIContext } from '../../context';

const NavbarMobileView = ({ matches }) => {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  return (
    <NavbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <NavbarHeader textAlign={'center'} variant="h4">
        My Bags
      </NavbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </NavbarContainer>
  );
};

export default NavbarMobileView;
