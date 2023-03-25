//  external imports
import { Box, IconButton, List, styled, Typography } from '@mui/material';

//  internal imports
import { textPopUpTop } from '../../animation';
import { Colors, DrawerWidth } from '../theme';

export const NavbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
}));

export const NavbarHeader = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '4em',
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
  '&:hover': {
    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  },
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));
