import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MyList, NavbarContainer, NavbarHeader } from '../../styles/navbar';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './Actions';

const NavbarDesktopView = ({ matches }) => {
  return (
    <NavbarContainer>
      <NavbarHeader variant="h4">My Bags</NavbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </NavbarContainer>
  );
};

export default NavbarDesktopView;
