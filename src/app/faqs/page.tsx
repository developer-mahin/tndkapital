'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQs from '@/components/FAQs';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';

const FAQsPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'white', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: '40vh', md: '50vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
              },
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="FAQs Hero Background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal variant="fade">
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '3rem', md: '5rem' }, 
                  fontWeight: 700,
                  textShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}
              >
                FAQs
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* Title Section */}
        <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <ScrollReveal variant="slideUp">
              <Typography
                variant="h2"
                sx={{
                  color: '#0C2752', // primary.main
                  mb: 3,
                  fontSize: { xs: '2.2rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  fontWeight: 700,
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.8
                }}
              >
                Explore answers to some of the most common questions about TND Kapital and our sharia-compliant trade solutions.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* FAQ Grid Content */}
        <Box sx={{ pb: { xs: 8, md: 15 } }}>
          <Container maxWidth="lg">
            <ScrollReveal variant="slideUp">
              <FAQs />
            </ScrollReveal>
          </Container>
        </Box>

        {/* Custom CTA Banner */}
        <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 18 } }}>
          <ScrollReveal variant="zoomIn">
            <Paper
              elevation={0}
              sx={{
                bgcolor: '#06142e',
                borderRadius: '24px',
                overflow: 'hidden',
                color: 'white',
              }}
            >
              <Grid container>
                <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 10 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      mb: 2, 
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      lineHeight: 1.1
                    }}
                  >
                    Empower Your Future Today
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      fontSize: '1rem', 
                      opacity: 0.9,
                      maxWidth: '500px'
                    }}
                  >
                    Start your journey toward ethical, interest-free financial freedom with TND Kapital.
                  </Typography>
                  <Box>
                    <Button 
                      variant="contained" 
                      sx={{ 
                        bgcolor: 'white', 
                        color: '#0C2752', 
                        px: 4, 
                        py: 1.5,
                        borderRadius: '30px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'none',
                        '&:hover': {
                          bgcolor: '#f5f5f5'
                        }
                      }}
                    >
                      Get Started!
                    </Button>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative', height: { xs: '250px', md: 'auto' }, minHeight: { md: '500px' } }}>
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="Empower Your Future"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '100%', 
                      background: 'linear-gradient(to right, #06142e 0%, transparent 20%)',
                      display: { xs: 'none', md: 'block' }
                    }} 
                  />
                </Grid>
              </Grid>
            </Paper>
          </ScrollReveal>
        </Container>
      </main>
      <Footer />
    </Box>
  );
};

export default FAQsPage;
