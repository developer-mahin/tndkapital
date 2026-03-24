'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import ScrollReveal from '@/components/ScrollReveal';

const ContactPage = () => {
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
                Get In Touch
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6 }}>
                Have questions or ready to start your ethical partnership? We&apos;re here to help.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* Contact Form Section */}
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <ScrollReveal variant="slideUp">
              <ContactUs />
            </ScrollReveal>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default ContactPage;
