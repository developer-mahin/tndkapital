'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Step, StepLabel, Stepper, Stack, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const steps = [
  {
    title: 'Submit Intent Form',
    description: 'Begin your journey by filling out our simple intent form. Share your business goals and the specific assets or partnership you are looking for.',
    icon: <AssignmentIcon fontSize="large" />,
  },
  {
    title: 'Initial Review & Pre-screening',
    description: 'Our team of ethical finance experts will review your submission to ensure it aligns with our values and partnership criteria.',
    icon: <SearchIcon fontSize="large" />,
  },
  {
    title: 'Full Request & Trade Proposal',
    description: 'We work closely with you to finalize the trade details, agreed profit margins, and repayment terms in a clear, transparent contract.',
    icon: <HandshakeIcon fontSize="large" />,
  },
  {
    title: 'Delivery & Success',
    description: 'Upon agreement, we execute the trade, deliver the assets, or provide the capital, and start our journey of mutual growth.',
    icon: <LocalShippingIcon fontSize="large" />,
  },
];

const HowItWorks = () => {
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
                How It Works
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6 }}>
                A simple, transparent four-step process to ethical financial partnership.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* Process Steps */}
        <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }}>
                <ScrollReveal delay={index * 0.2} variant="zoomIn">
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      border: '1px solid rgba(13, 36, 77, 0.1)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        borderColor: 'secondary.main',
                        boxShadow: '0 15px 40px rgba(13, 36, 77, 0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'rgba(210, 170, 81, 0.1)',
                        color: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 4,
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        mb: 2,
                        minHeight: { md: 64 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      {step.description}
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        fontSize: '2rem',
                        fontWeight: 900,
                        color: 'rgba(13, 36, 77, 0.05)',
                        userSelect: 'none',
                      }}
                    >
                      0{index + 1}
                    </Box>
                  </Paper>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Call to Action */}
        <Box sx={{ bgcolor: 'rgba(13, 36, 77, 0.03)', py: 10, textAlign: 'center' }}>
          <Container maxWidth="md">
            <ScrollReveal variant="slideUp">
              <Typography variant="h3" sx={{ color: 'primary.main', mb: 4, fontWeight: 700 }}>
                Ready to Start Your Journey?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.2rem' }}>
                Join hundreds of entrepreneurs who have chosen a more ethical way to grow their business.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Paper
                  component="a"
                  href="/contact-us"
                  sx={{
                    px: 6,
                    py: 2,
                    bgcolor: 'secondary.main',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: 2,
                    fontWeight: 700,
                    transition: 'opacity 0.2s',
                    '&:hover': { opacity: 0.9 },
                  }}
                >
                  Contact Us Now
                </Paper>
              </Stack>
            </ScrollReveal>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default HowItWorks;
