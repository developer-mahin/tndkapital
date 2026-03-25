'use client';

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  IconButton,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs = () => {
  const theme = useTheme();

  const onCaptchaChange = (value: string | null) => {
    console.log('Captcha value:', value);
  };

  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      bgcolor: '#F8F9FA',
      '& fieldset': {
        borderColor: 'transparent',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(13, 36, 77, 0.1)',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiInputLabel-root': {
      color: '#666',
    },
  };

  return (
    <Grid container spacing={6}>
      {/* Left Column - Form */}
      <Grid size={{ xs: 12, md: 7 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
              letterSpacing: 1.5,
              display: 'block',
              mb: 1,
            }}
          >
            SEND US A MESSAGE
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Get in Touch With Us
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            We&apos;re here to listen, guide, and walk beside you as you move toward greater independence
            and opportunity. Reach out anytime — our team is here for you.
          </Typography>
        </Box>

        <Box component="form" noValidate>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>First Name</Typography>
              <TextField fullWidth placeholder="First Name" variant="outlined" sx={textFieldStyle} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>Middle Name</Typography>
              <TextField fullWidth placeholder="Middle Name" variant="outlined" sx={textFieldStyle} />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>Last Name</Typography>
              <TextField fullWidth placeholder="Last Name" variant="outlined" sx={textFieldStyle} />
            </Grid>
            
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>WhatsApp Phone</Typography>
              <TextField 
                fullWidth 
                placeholder="Country Code + Number" 
                variant="outlined" 
                sx={textFieldStyle}
                InputProps={{
                  endAdornment: <WhatsAppIcon sx={{ color: '#25D366', fontSize: 20 }} />
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>Email</Typography>
              <TextField 
                fullWidth 
                placeholder="Email" 
                variant="outlined" 
                sx={textFieldStyle}
                InputProps={{
                  endAdornment: <EmailIcon sx={{ color: '#25D366', fontSize: 20 }} />
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>Subject</Typography>
              <TextField fullWidth placeholder="Subject" variant="outlined" sx={textFieldStyle} />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>Message</Typography>
              <TextField
                fullWidth
                placeholder="Message"
                variant="outlined"
                multiline
                rows={5}
                sx={textFieldStyle}
              />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test Key
                onChange={onCaptchaChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'black',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 8,
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#333',
                  },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Right Column - Contact Card */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 6,
            p: { xs: 4, md: 6 },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'white',
              opacity: 0.8,
              fontWeight: 700,
              letterSpacing: 1,
              mb: 1,
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: '1.5rem', md: '2rem' },
              lineHeight: 1.2,
            }}
          >
            Seamless Communication,<br />
            Global Impact.
          </Typography>

          <Stack spacing={4} sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: '50%',
                  p: 1.5,
                  display: 'flex',
                  color: 'primary.main',
                }}
              >
                <LocationOnIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Head Office
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  TND Kapital<br />
                  P.O. Box 291 Frisco, TX 75034 United States
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: '50%',
                  p: 1.5,
                  display: 'flex',
                  color: 'primary.main',
                }}
              >
                <EmailIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Email Support
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  trust@tndkapital.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: '50%',
                  p: 1.5,
                  display: 'flex',
                  color: 'primary.main',
                }}
              >
                <WhatsAppIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  WhatsApp
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +1 940 334 9255
                </Typography>
              </Box>
            </Box>
          </Stack>

          <Box sx={{ mt: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 1 }}>
                Follow us
              </Typography>
              {[FacebookIcon, InstagramIcon, YouTubeIcon, WhatsAppIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'secondary.main',
                      color: 'primary.main',
                    },
                    width: 40,
                    height: 40,
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
