'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const JoinUs = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      <Box
        sx={{
          bgcolor: '#071529',
          borderRadius: { xs: 4, md: 8 },
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 40px 80px rgba(0,0,0,0.2)',
        }}
      >
        <Grid container>
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ p: { xs: 6, md: 10 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '3.2rem' },
                  lineHeight: 1.2,
                  mb: 4,
                }}
              >
                Start Your Journey Toward Financial Freedom with TND Kapital
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: 550,
                  mb: 6,
                }}
              >
                Experience values-based, Sharia-compliant Cost-Plus Purchase plans 
                that empower you, your family, and your future — with dignity, 
                transparency, and trust.
              </Typography>

              <Box>
                <Button
                  variant="contained"
                  component={Link}
                  href="/apply-now"
                  sx={{
                    bgcolor: '#d2aa51',
                    color: 'white',
                    fontWeight: 700,
                    px: 6,
                    py: 1.8,
                    borderRadius: 10,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#b89445',
                    },
                  }}
                >
                  Get Started!
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 300, md: '100%' },
                width: '100%',
              }}
            >
              <Image
                src="https://cdn.antigravity.dev/mahin/hero_meeting_vibe_revised_1774446600564.png"
                alt="Financial Freedom Meeting"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default JoinUs;
