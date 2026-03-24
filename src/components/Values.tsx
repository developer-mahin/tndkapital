'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import Image from 'next/image';

const values = [
  {
    title: 'Interest-Free Purchase Plans',
    description: 'We believe in a world where you can own what you need without being trapped in interest-based debt.',
    image: 'https://tndkapital.com/wp-content/uploads/2025/10/3FC51717-F9FA-42DF-80B8-7369B708E479.png',
  },
  {
    title: 'Transparency & Integrity',
    description: 'Our contracts are clear, simple, and free from hidden fees. We win only when you win.',
    image: 'https://tndkapital.com/wp-content/uploads/2025/10/F99E81AE-3A54-4297-BD47-738871D29D6E.png',
  },
  {
    title: 'Personalized Support',
    description: 'We take the time to understand your unique needs and provide solutions that truly fit.',
    image: 'https://tndkapital.com/wp-content/uploads/2025/10/CF7847D5-43D3-4A82-B16C-5AC6647CDF29.png',
  },
];

const Values = () => {
  return (
    <Box id="values" sx={{ py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Rooted in Values. Built for People.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            We are more than a business solutions company. We are a community of like-minded individuals dedicated to ethical trade and mutual prosperity.
          </Typography>
        </Box>

        <Stack spacing={12}>
          {values.map((value, index) => (
            <Grid
              container
              key={value.title}
              spacing={6}
              alignItems="center"
              flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(13, 36, 77, 0.1)',
                  }}
                >
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ maxWidth: 500, mx: index % 2 === 0 ? 'auto' : 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'primary.main',
                      mb: 3,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                      fontWeight: 700,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Values;
