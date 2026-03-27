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
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

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

        <ScrollReveal variant="slideRight" distance={20} delay={0.2}>
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
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 6,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(13, 36, 77, 0.3)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </ScrollReveal>
      </Grid>

      {/* Right Column - Contact Card */}
      <Grid size={{ xs: 12, md: 5 }}>
        <ScrollReveal variant="slideLeft" distance={30} delay={0.4}>
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 6,
              p: { xs: 4, md: 6 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(13, 36, 77, 0.2)',
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
              {[
                {
                  icon: <LocationOnIcon fontSize="small" />,
                  title: "Head Office",
                  content: "TND Kapital\nP.O. Box 291 Frisco, TX 75034 United States"
                },
                {
                  icon: <EmailIcon fontSize="small" />,
                  title: "Email Support",
                  content: "trust@tndkapital.com"
                },
                {
                  icon: <WhatsAppIcon fontSize="small" />,
                  title: "WhatsApp",
                  content: "+1 940 334 9255"
                }
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      bgcolor: 'white',
                      borderRadius: '50%',
                      p: 1.5,
                      display: 'flex',
                      color: 'primary.main',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, whiteSpace: 'pre-line' }}>
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            <Box sx={{ mt: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 1 }}>
                  Follow us
                </Typography>
                {[FacebookIcon, InstagramIcon, YouTubeIcon, WhatsAppIcon].map((Icon, i) => (
                  <IconButton
                    key={i}
                    component={motion.button}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      '&:hover': {
                        bgcolor: 'secondary.main',
                        color: 'primary.main',
                      },
                      width: 40,
                      height: 40,
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Box>
        </ScrollReveal>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
