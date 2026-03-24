'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Paper,
  Alert,
} from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const countries = [
  { value: 'guinea', label: 'Guinea' },
  { value: 'liberia', label: 'Liberia' },
  { value: 'senegal', label: 'Senegal' },
  { value: 'sierra-leone', label: 'Sierra Leone' },
];

const productTypes = [
  { value: 'cpp', label: 'Cost Plus Profit (CPP) Partnership' },
  { value: 'ttp', label: 'Trust-Based Trade Partnership (TTP)' },
  { value: 'gep', label: 'Group Empowerment Program (GEP)' },
];

const ApplyNow = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {/* Header */}
        <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: { xs: 15, md: 20 }, pb: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <ScrollReveal variant="fade">
              <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                Apply Now
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6 }}>
                Apply for an Ethical, Interest-Free Trade Arrangement.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{ py: 10 }}>
          {submitted ? (
            <ScrollReveal variant="fade">
              <Alert severity="success" sx={{ borderRadius: 2, p: 3, fontSize: '1.1rem' }}>
                Thank you for your application! Our team will review your submission and get back to you shortly.
              </Alert>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button variant="outlined" color="primary" href="/" sx={{ borderRadius: 2 }}>
                  Return to Home
                </Button>
              </Box>
            </ScrollReveal>
          ) : (
            <ScrollReveal variant="slideUp">
              <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: 4, border: '1px solid rgba(13, 36, 77, 0.1)', boxShadow: '0 20px 50px rgba(13, 36, 77, 0.05)' }}>
                <Typography variant="h4" sx={{ color: 'primary.main', mb: 4, fontWeight: 700 }}>
                  Personal Information
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={4}>
                    {/* Name Fields */}
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField fullWidth required label="First Name" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField fullWidth label="Middle Name" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField fullWidth required label="Last Name" variant="outlined" />
                    </Grid>

                    {/* Location Fields */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required select label="Select Country" variant="outlined">
                        {countries.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required label="City Name" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth required label="Home Address" variant="outlined" />
                    </Grid>

                    {/* Contact Fields */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required label="WhatsApp Phone Number" placeholder="Country Code + Number" variant="outlined" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required type="email" label="Email Address" variant="outlined" />
                    </Grid>

                    {/* Product Selection */}
                    <Grid size={{ xs: 12 }}>
                      <Typography variant="h4" sx={{ color: 'primary.main', mt: 4, mb: 4, fontWeight: 700 }}>
                        Product Details
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth required select label="Type of Product Requested" variant="outlined">
                        {productTypes.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={4}
                        label="Purpose of the Asset or Goods Requested"
                        placeholder="Please provide details about what you need and how it will help your business."
                        variant="outlined"
                      />
                    </Grid>

                    {/* Confirmation */}
                    <Grid size={{ xs: 12 }}>
                      <FormControlLabel
                        required
                        control={<Checkbox color="secondary" />}
                        label={
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            I confirm that the information provided is accurate and I agree to be contacted by the TND Kapital team.
                          </Typography>
                        }
                      />
                    </Grid>

                    {/* Submit */}
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth
                        sx={{ py: 2, fontSize: '1.2rem', fontWeight: 700, borderRadius: 2, mt: 2 }}
                      >
                        Submit Application
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </ScrollReveal>
          )}
        </Container>
      </main>
      <Footer />
    </Box>
  );
};

export default ApplyNow;
