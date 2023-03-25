import React from 'react';

//  external imports
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from '@mui/material';
import { lighten } from 'polished';
import CloseIcon from '@mui/icons-material/Close';

//  internal imports
import { Colors } from '../../styles/theme';
import { useUIContext } from '../../context';
import { DrawerCloseButton } from '../../styles/navbar';

const AppDrawer = () => {
  const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;

  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: '2.5rem',
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
};

export default AppDrawer;
