'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQs from '@/components/FAQs';
import ScrollReveal from '@/components/ScrollReveal';

const FAQsPage = () => {
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
                Frequently Asked Questions
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6 }}>
                Everything you need to know about our ethical financial partnership models.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* FAQ Content */}
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <ScrollReveal variant="slideUp">
              <FAQs />
            </ScrollReveal>
          </Container>
        </Box>

        {/* Additional Help Section */}
        <Box sx={{ bgcolor: 'rgba(13, 36, 77, 0.03)', py: 10, textAlign: 'center' }}>
          <Container maxWidth="md">
            <ScrollReveal variant="slideUp">
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 3, fontWeight: 700 }}>
                Still Have Questions?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
                If you couldn&apos;t find the answer you were looking for, feel free to contact our support team directly.
              </Typography>
              <Box
                component="a"
                href="/contact-us"
                sx={{
                  display: 'inline-block',
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
                Get in Touch
              </Box>
            </ScrollReveal>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default FAQsPage;
