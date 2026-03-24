'use client';

import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Link from 'next/link';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '85vh' },
        minHeight: 500,
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(rgba(13, 36, 77, 0.7), rgba(13, 36, 77, 0.7)), url("https://tndkapital.com/wp-content/uploads/2025/10/IMG_3503.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ maxWidth: 800 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              lineHeight: 1.1,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Empowering Lives Through Ethical Business Solutions
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              opacity: 0.9,
              maxWidth: 600,
            }}
          >
            Fair & Transparent- For Everyday People
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              href="/apply-now"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                boxShadow: '0 4px 15px rgba(210, 170, 81, 0.4)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(210, 170, 81, 0.6)',
                },
                transition: 'all 0.3s',
              }}
            >
              Get Started!
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
