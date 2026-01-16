import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'

const pages = ['Home', 'Account', 'Referrals'];

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activePage, setActivePage] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenMenu = (page) => {
    setActivePage(page);
    if (page === "Home") {
      navigate('/home')
    }
    if (page === "Account") {
      navigate('/account')
    }
    if (page === "Referrals") {
      navigate('/referrals')
    }
    handleCloseNavMenu();
  }

  return (
    <AppBar position="sticky" sx={{ 
      borderBottomLeftRadius: '16px', 
      borderBottomRightRadius: '16px', 
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      boxShadow: '0 4px 20px rgba(30, 60, 114, 0.3)'
    }}>
      <Container maxWidth={false} disableGutters>
        <Toolbar disableGutters sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            flexGrow: { xs: 1, md: 0 }
          }}>
            <Box
              component="img"
              sx={{
                height: { xs: 35, sm: 45, md: 55 },
                width: { xs: 35, sm: 45, md: 55 },
                borderRadius: '50%',
                mr: { xs: 1, sm: 1.5, md: 2 },
              }}
              alt="Logo"
              src={logo}
            />
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontFamily: "'Arial', sans-serif",
                fontWeight: 'bold',
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                color: '#ffffff',
                letterSpacing: '0.5px',
              }}
            >
              POLLPAY SURVEY
            </Typography>
          </Box>

          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            flexGrow: 1, 
            justifyContent: 'center',
            gap: 3,
            ml: 4
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleOpenMenu(page)}
                sx={{ 
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  fontFamily: "'Arial', sans-serif",
                  fontWeight: 500,
                  px: { xs: 1.5, sm: 2, md: 2.5 },
                  py: { xs: 0.5, sm: 0.6, md: 0.7 },
                  minWidth: { xs: '70px', sm: '80px', md: '90px' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ 
                color: '#ffffff',
                ml: 'auto'
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(30, 60, 114, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  mt: 1,
                  minWidth: '140px',
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={() => handleOpenMenu(page)}
                  sx={{
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
