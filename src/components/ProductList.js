import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Cart from './Cart';
import productData from '../data/products.json';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(productData); 
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      <Grid item xs={12} md={9}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    style={{ textAlign: 'center', marginBottom: '10px', height: '60px', overflow: 'hidden' }}
                  >
                    {product.title}
                  </Typography>
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.title}
                    sx={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'contain',
                      marginBottom: '15px',
                    }}
                  />
                  <Typography variant="body1" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ textAlign: 'center', marginTop: '10px', height: '40px', overflow: 'hidden' }}
                  >
                    {product.description.substring(0, 80)}...
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                  <Link to={`/product/${product.id}`} style={{ flex: 1, marginRight: '5px' }}>
                    <Button variant="contained" fullWidth style={{ padding: '10px 0' }}>
                      View Details
                    </Button>
                  </Link>
                  <Button variant="contained" fullWidth color="primary" onClick={() => handleAddToCart(product)} style={{ padding: '10px 0' }}>
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
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

export default ProductList;
