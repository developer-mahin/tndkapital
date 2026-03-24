'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import GroupsIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PublicIcon from '@mui/icons-material/Public';

const AboutUs = () => {
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
                About TND Kapital
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6 }}>
                Building ethical futures through transparency, integrity, and mutual prosperity.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* Narrative Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal variant="slideRight">
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 300, md: 500 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(13, 36, 77, 0.1)',
                  }}
                >
                  <Image
                    src="https://tndkapital.com/wp-content/uploads/2025/10/3FC51717-F9FA-42DF-80B8-7369B708E479.png"
                    alt="About TND Kapital"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </ScrollReveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal variant="slideLeft">
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
                  Our Story
                </Typography>
                <Typography variant="h2" sx={{ color: 'primary.main', mb: 4, mt: 1 }}>
                  Ethical Trade for a Better World
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  TND Kapital was born out of a desire to create a financial ecosystem that prioritizes people over profits and ethics over interest. We believe that trade is a powerful tool for community empowerment and shared success.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Inspired by the principles of Islamic finance and universal ethical standards, we provide solutions that are interest-free, transparent, and focused on real-world assets. Our journey is about more than just numbers; it’s about building lasting legacies and fostering a culture of mutual trust.
                </Typography>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>

        {/* Vision & Mission */}
        <Box sx={{ bgcolor: 'rgba(13, 36, 77, 0.03)', py: { xs: 10, md: 15 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <ScrollReveal variant="zoomIn" delay={0.1}>
                  <Paper elevation={0} sx={{ p: 5, textAlign: 'center', height: '100%', borderRadius: 4 }}>
                    <Box sx={{ color: 'secondary.main', mb: 3 }}><VisibilityIcon fontSize="large" /></Box>
                    <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 700 }}>Our Vision</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      To be the leading global partner for ethical, interest-free financial solutions that empower every entrepreneur to reach their full potential.
                    </Typography>
                  </Paper>
                </ScrollReveal>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <ScrollReveal variant="zoomIn" delay={0.3}>
                  <Paper elevation={0} sx={{ p: 5, textAlign: 'center', height: '100%', borderRadius: 4 }}>
                    <Box sx={{ color: 'secondary.main', mb: 3 }}><GroupsIcon fontSize="large" /></Box>
                    <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 700 }}>Our Mission</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      To provide transparent, accessible, and faith-aligned partnership models that foster community growth and sustainable development.
                    </Typography>
                  </Paper>
                </ScrollReveal>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <ScrollReveal variant="zoomIn" delay={0.5}>
                  <Paper elevation={0} sx={{ p: 5, textAlign: 'center', height: '100%', borderRadius: 4 }}>
                    <Box sx={{ color: 'secondary.main', mb: 3 }}><PublicIcon fontSize="large" /></Box>
                    <Typography variant="h4" sx={{ color: 'primary.main', mb: 2, fontWeight: 700 }}>Global Impact</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      Creating a footprint of ethical excellence across borders, ensuring that prosperity is shared and trade is always conducted with integrity.
                    </Typography>
                  </Paper>
                </ScrollReveal>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default AboutUs;
