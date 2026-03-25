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
  Alert,
  InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const countries = [
  { value: 'all', label: 'Guinea, Liberia, Senegal, Sierra Leone' },
  { value: 'guinea', label: 'Guinea' },
  { value: 'liberia', label: 'Liberia' },
  { value: 'senegal', label: 'Senegal' },
  { value: 'sierra-leone', label: 'Sierra Leone' },
];

const productTypes = [
  { value: 'cpp', label: 'Cost Plus Profit (CPP) - Household' },
  { value: 'ttp', label: 'Trust-Based Trade Partnership (TTP)' },
  { value: 'gep', label: 'Group Empowerment Program (GEP)' },
];

const inputStyles = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#F7F8FA',
    borderRadius: '4px',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid rgba(13, 36, 77, 0.1)',
    },
    '& input::placeholder': {
      color: '#A0AEC0',
      opacity: 1,
    },
    '& .MuiSelect-select': {
      color: '#A0AEC0',
    }
  },
};

const ApplyNow = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    country: 'all',
    cityName: '',
    homeAddress: '',
    phone: '',
    email: '',
    productType: 'cpp',
    purpose: '',
    confirmed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Container maxWidth="md" sx={{ py: 20, flexGrow: 1, textAlign: 'center' }}>
          <ScrollReveal variant="fade">
            <Alert severity="success" sx={{ borderRadius: 2, p: 3, fontSize: '1.1rem', mb: 4 }}>
              Thank you for your application! Our team will review your submission and reach out to you shortly.
            </Alert>
            <Button variant="contained" color="primary" href="/" sx={{ borderRadius: 2 }}>
              Return to Home
            </Button>
          </ScrollReveal>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'white' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 15, md: 20 }, pb: 10 }}>
          <ScrollReveal variant="fade">
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 3, 
                fontSize: { xs: '2.5rem', md: '3.5rem' }, 
                color: 'primary.main',
                fontWeight: 700 
              }}
            >
              Apply for an Ethical, Interest-Free Trade Arrangement
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 8, 
                maxWidth: '900px', 
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}
            >
              Fill out the form below to request a Sharia-guided trade opportunity with TND Kapital. Once submitted, our team will review it and reach out to guide you through the next steps. Your information is safe with us, and will be used only to process your request.
            </Typography>
          </ScrollReveal>

          <ScrollReveal variant="slideUp">
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                {/* Name Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Name <span style={{ color: '#E53E3E' }}>*</span>
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        placeholder="First Name *"
                        required
                        sx={inputStyles}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        placeholder="Middle Name"
                        sx={inputStyles}
                        value={formData.middleName}
                        onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        placeholder="Last Name *"
                        required
                        sx={inputStyles}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                {/* Country Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Select Country <span style={{ color: '#E53E3E' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    select
                    required
                    sx={inputStyles}
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* City Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    City Name <span style={{ color: '#E53E3E' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Type City Name"
                    required
                    sx={inputStyles}
                    value={formData.cityName}
                    onChange={(e) => setFormData({ ...formData, cityName: e.target.value })}
                  />
                </Grid>

                {/* Address Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Home Address <span style={{ color: '#E53E3E' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Type Home Address"
                    required
                    sx={inputStyles}
                    value={formData.homeAddress}
                    onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
                  />
                </Grid>

                {/* Phone Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    WhatsApp Phone Number <span style={{ color: '#E53E3E' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Country Code + Number"
                    required
                    sx={inputStyles}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </Grid>

                {/* Email Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Your Email Address <span style={{ color: '#E53E3E' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Type Your Email Address"
                    required
                    type="email"
                    sx={inputStyles}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon sx={{ color: '#4FD1C5' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Product Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Type of Product Requested <span style={{ color: '#E53E3E' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    select
                    required
                    sx={inputStyles}
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  >
                    {productTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Purpose Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Describe in detail the Purpose of the Asset of Goods <span style={{ color: '#E53E3E' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    required
                    sx={inputStyles}
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  />
                </Grid>

                {/* Checkbox Section */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                    Checkboxes
                  </Typography>
                  <FormControlLabel
                    control={
                      <Checkbox 
                        required
                        checked={formData.confirmed}
                        onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                        sx={{ 
                          color: '#CBD5E0',
                          '&.Mui-checked': {
                            color: 'primary.main',
                          },
                        }} 
                      />
                    }
                    label={
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        I confirm that the information provided is accurate and agree to be contacted by TND Kapital
                      </Typography>
                    }
                  />
                </Grid>

                {/* Submit Button */}
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: '#0D244D',
                      color: 'white',
                      py: 1.5,
                      px: 5,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: '#081A3A',
                      },
                      mt: 2
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </ScrollReveal>
        </Container>
      </main>
      <Footer />
    </Box>
  );
};

export default ApplyNow;

