'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Our Products', href: '/our-products' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Us', href: '/about-us' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact Us', href: '/contact-us' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        pt: 4,
      }}
      onClick={handleDrawerToggle}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Image
          src="/logo.png"
          alt="TND Kapital Logo"
          width={250}
          height={120}
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component={Link} href={item.href} sx={{ color: 'white' }}>
            <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500 }} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            component={Link}
            href="/apply-now"
            sx={{ mt: 2 }}
          >
            Get Started!
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'white',
          color: 'text.primary',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 80 }}>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src="https://tndkapital.com/wp-content/uploads/2025/05/Untitled-design-70.png"
                  alt="TND Kapital Logo"
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Link>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {navItems.map((item) => (
                  <Typography
                    key={item.label}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: 'text.primary',
                      textDecoration: 'none',
                      fontWeight: 500,
                      '&:hover': { color: 'secondary.main' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'primary.main',
                    ml: 2,
                    '&:hover': { bgcolor: 'primary.dark' },
                  }}
                  component={Link}
                  href="/apply-now"
                >
                  Get Started!
                </Button>
              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
