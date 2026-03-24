'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';

const products = [
  {
    title: 'Faith-Based Solutions For Everyday People',
    description: 'We offer interest-free, ethically structured financial solutions designed to help you grow without the burden of traditional debt.',
    icon: <VolunteerActivismIcon fontSize="large" />,
    href: '#faith-based',
  },
  {
    title: 'Cost-Plus-Profit (CPP)',
    description: 'A transparent model where we purchase the asset you need and sell it to you at a clear, agreed-upon profit margin.',
    icon: <BusinessCenterIcon fontSize="large" />,
    href: '#cpp',
  },
  {
    title: 'Thrive Together Partnership (TTP)',
    description: 'An equity-based model where we partner with your business, sharing both risks and rewards for mutual success.',
    icon: <HandshakeIcon fontSize="large" />,
    href: '#ttp',
  },
  {
    title: 'Group Empowerment Program (GEP)',
    description: 'Tailored solutions for cooperatives and investment groups to pool resources and achieve collective financial growth.',
    icon: <GroupsIcon fontSize="large" />,
    href: '#gep',
  },
];

const Products = () => {
  return (
    <Box id="products" sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Our Products
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Explore our range of ethical and transparent financial solutions tailored to your needs.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
