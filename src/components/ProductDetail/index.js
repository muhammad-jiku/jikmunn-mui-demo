import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Product, ProductImage } from '../../styles/products';
import { Colors } from '../../styles/theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import IncDec from '../ui';

const ProductDetail = ({ open, onClose, product }) => {
  const SlideTransition = (props) => {
    return <Slide direction="down" {...props} />;
  };

  const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(4),
  }));

  const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5,
  }));

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanant"
      open={open}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={'space-between'}
        >
          Product title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper
          display={'flex'}
          flexDirection={matches ? 'column' : 'row'}
        >
          <Product
            sx={{
              mr: 4,
            }}
          >
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle">SKU: 123</Typography>
            <Typography variant="subtitle">Availability: 5 in stock</Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            <Typography variant="body">
              {product.description}
              {product.description}
              {product.description}
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <IncDec />
              <Button variant="contained">Add to Cart</Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box
              sx={{
                mt: 4,
                color: Colors.dove_gray,
              }}
            >
              <FacebookIcon />
              <TwitterIcon sx={{ pl: 2 }} />
              <InstagramIcon sx={{ pl: 2 }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
