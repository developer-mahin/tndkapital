'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
  return (
    <Box id="contact-us" sx={{ py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            Have questions or ready to get started? Our team is here to help you navigate your ethical financial journey.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <Card elevation={0} sx={{ bgcolor: 'rgba(13, 36, 77, 0.03)', borderRadius: 4 }}>
                <CardContent sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      Email Us
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      hello@tndkapital.com
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card elevation={0} sx={{ bgcolor: 'rgba(13, 36, 77, 0.03)', borderRadius: 4 }}>
                <CardContent sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      Call Us
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      +1 (312) 555-0123
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card elevation={0} sx={{ bgcolor: 'rgba(13, 36, 77, 0.03)', borderRadius: 4 }}>
                <CardContent sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                    }}
                  >
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      Our Office
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      TND Kapital LLC, Chicago, IL 60601
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="form"
              sx={{
                p: 4,
                borderRadius: 4,
                border: '1px solid rgba(13, 36, 77, 0.1)',
                bgcolor: 'white',
                boxShadow: '0 10px 30px rgba(13, 36, 77, 0.05)',
              }}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="First Name" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Last Name" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Email Address" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Subject" variant="outlined" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, fontSize: '1.1rem', fontWeight: 700 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
