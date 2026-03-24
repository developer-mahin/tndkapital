'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const products = [
  {
    id: 'cpp',
    title: 'Cost Plus Profit (CPP) Partnership',
    description: 'A transparent, interest-free model for purchasing assets. We buy the item for you and sell it to you at a pre-agreed profit margin, allowing for manageable installment payments without the burden of interest.',
    image: 'https://tndkapital.com/wp-content/uploads/2025/10/3FC51717-F9FA-42DF-80B8-7369B708E479.png',
    features: [
      'Fixed profit margin – no hidden fees.',
      'Ownership transferred upon agreement.',
      'Flexible repayment terms.',
      '100% Sharia compliant.',
    ],
  },
  {
    id: 'ttp',
    title: 'Trust-Based Trade Partnership (TTP)',
    description: 'Empowering businesses through trust and collaboration. We provide the capital for inventory or expansion, and share in the success of the venture based on mutual growth.',
    image: 'https://tndkapital.com/wp-content/uploads/2025/10/F99E81AE-3A54-4297-BD47-738871D29D6E.png',
    features: [
      'Shared risk and reward.',
      'Focus on business growth and sustainability.',
      'Personalized mentorship and support.',
      'No collateral-based interest traps.',
    ],
  },
  {
    id: 'gep',
    title: 'Group Empowerment Program (GEP)',
    description: 'Strength in numbers. This program focuses on community-driven financial support, allowing groups of entrepreneurs to access resources and grow together through mutual accountability.',
    image: 'https://tndkapital.com/wp-content/uploads/2025/10/CF7847D5-43D3-4A82-B16C-5AC6647CDF29.png',
    features: [
      'Inclusive community support.',
      'Lower barriers to entry.',
      'Collective wisdom and networking.',
      'Sustainable community development.',
    ],
  },
];

const OurProducts = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            pt: { xs: 15, md: 20 },
            pb: { xs: 10, md: 15 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <ScrollReveal variant="fade">
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                Our Ethical Products
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6 }}>
                Discover financial solutions that respect your values and empower your future.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* Detailed Products */}
        <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
          <Stack spacing={12}>
            {products.map((product, index) => (
              <ScrollReveal key={product.id} variant={index % 2 === 0 ? 'slideRight' : 'slideLeft'}>
                <Grid
                  container
                  spacing={6}
                  alignItems="center"
                  flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
                >
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: 300, md: 450 },
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(13, 36, 77, 0.15)',
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ px: { md: 4 } }}>
                      <Typography
                        variant="h2"
                        sx={{
                          color: 'primary.main',
                          mb: 3,
                          fontSize: { xs: '1.8rem', md: '2.5rem' },
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}
                      >
                        {product.description}
                      </Typography>
                      <Stack spacing={2} sx={{ mb: 4 }}>
                        {product.features.map((feature, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: 'secondary.main',
                              }}
                            />
                            <Typography variant="body2">{feature}</Typography>
                          </Box>
                        ))}
                      </Stack>
                      <Button
                        component={Link}
                        href="/contact-us"
                        variant="contained"
                        color="secondary"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ py: 1.5, px: 4, fontWeight: 700 }}
                      >
                        Apply Now
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </ScrollReveal>
            ))}
          </Stack>
        </Container>
      </main>
      <Footer />
    </Box>
  );
};

export default OurProducts;
