import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <AppBar position="static" style={{ marginBottom: '20px' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          onClick={handleClick}
          style={{ cursor: 'pointer' }} 
        >
          React E-Commerce App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
