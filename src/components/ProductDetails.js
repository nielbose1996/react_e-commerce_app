import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Cart from './Cart';
import productData from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedProduct = productData.find((item) => item.id === parseInt(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      <Grid item xs={12} md={9}>
        <Card style={{ padding: '20px', height: '100%' }}>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
              {product.title}
            </Typography>
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{
                width: '100%',
                height: '300px',
                objectFit: 'contain',
                marginBottom: '20px',
              }}
            />
            <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 'bold' }}>
              ${product.price.toFixed(2)}
            </Typography>
            <Typography variant="body1" color="textSecondary" style={{ marginTop: '20px', textAlign: 'center' }}>
              {product.description}
            </Typography>
          </CardContent>
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button variant="contained" fullWidth color="primary" onClick={handleAddToCart} style={{ padding: '10px 0' }}>
              Add to Cart
            </Button>
          </Box>
        </Card>
      </Grid>

      <Grid
  item
  xs={12}
  md={3}
  sx={{
    display: 'block',
    position: { xs: 'relative', md: 'absolute' }, 
    bottom: { xs: 'auto', md: 'auto' }, 
    right: { xs: '0', md: '20px' }, 
    top: { xs: 'auto', md: '80px' }, 
    width: { xs: '100%', md: 'auto' }, 
    paddingBottom: { xs: '20px', md: '0' }, 
    marginTop: { xs: '50px', md: '0' },
    zIndex: { xs: 1300, md: 'auto' }, 
  }}
>
  <Cart />
</Grid>

    </Grid>
  );
};


export default ProductDetails;
