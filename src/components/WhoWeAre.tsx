'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const WhoWeAre = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Side: Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 350, md: 550 },
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="https://api.tndk.app/public/uploads/images/images_1776398186664.png"
                alt="Empowering Communities"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          {/* Right Side: Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography
                variant="overline"
                sx={{
                  color: '#0D244D',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
              >
                WHO WE ARE
              </Typography>
              
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.8rem' },
                  fontWeight: 800,
                  color: '#0D244D',
                  lineHeight: 1.2,
                }}
              >
                Empowering Communities Through Fair & Ethical Trade Solutions
              </Typography>

              <Box sx={{ borderLeft: '4px solid #0D244D', pl: 3, my: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: '#555',
                    lineHeight: 1.6,
                  }}
                >
                  We offer interest-free, structured purchase plans in clear transparent terms, and unwavering support for your goals.
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: 1.8,
                }}
              >
                TND Kapital is a values-driven enterprise rooted in sharia-principles,
                helping individuals, families, and communities access essential goods 
                and tools through clear, cost-plus sales agreements.
              </Typography>

              <Box sx={{ pt: 2 }}>
                <Button
                  variant="contained"
                  component={Link}
                  href="/about"
                  sx={{
                    bgcolor: '#d2aa51',
                    color: 'white',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: 8,
                    fontSize: '1rem',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#b89445',
                    },
                  }}
                >
                  Discover more
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
