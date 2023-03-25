import React from 'react';

//  external imports
import SearchIcon from '@mui/icons-material/Search';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

//  internal imports
import Actions from './Actions';
import { useUIContext } from '../../context';
import { MyList, NavbarContainer, NavbarHeader } from '../../styles/navbar';

const NavbarDesktopView = ({ matches }) => {
  const { setShowSearchBox } = useUIContext();
  return (
    <NavbarContainer>
      <NavbarHeader variant="h4">My Bags</NavbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton onClick={() => setShowSearchBox(true)}>
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
