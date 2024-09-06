import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Card, CardContent, Grid, Box } from '@mui/material';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      {/* Header and Total Section */}
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid item>
          <Typography variant="h6">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Total: ${total.toFixed(2)}
          </Typography>
        </Grid>
      </Grid>

      {/* Cart Items */}
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{ width: '100%', objectFit: 'contain', height: '80px' }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="subtitle1">{item.title}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      ${item.price.toFixed(2)}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      sx={{ mt: 1 }}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cart;
