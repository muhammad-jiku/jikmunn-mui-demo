import React from 'react';
import { Box, IconButton, Slide, styled, TextField } from '@mui/material';
import { Colors } from '../../styles/theme';
import { useUIContext } from '../../context';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBox = () => {
  const { showSearchBox, setShowSearchBox } = useUIContext();

  const SearchBoxContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: Colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
    opacity: 0.9,
  }));

  const SearchField = styled(TextField)(({ theme }) => ({
    '.MuiInputLabel-root': {
      color: Colors.secondary,
    },
    '.MuiInput-root': {
      fontSize: '1rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
      color: Colors.secondary,
    },
    '.MuiInput-root::before': {
      borderBottom: `1px solid ${Colors.secondary}`,
    },
    padding: '0 0 0 40px',
  }));

  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="search..."
        />
        <IconButton>
          <SearchIcon
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            color="secondary"
          />
        </IconButton>
        <IconButton
          onClick={() => setShowSearchBox(false)}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon sx={{ fontSize: '4rem' }} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
};

export default SearchBox;
