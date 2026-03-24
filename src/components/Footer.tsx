'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
  Stack,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 10, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 4 }}>
              <Image
                src="https://tndkapital.com/wp-content/uploads/2025/05/Untitled-design-70.png"
                alt="TND Kapital Logo"
                width={200}
                height={60}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </Box>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 4, lineHeight: 1.8 }}>
              TND Kapital LLC is committed to providing fair, transparent, and interest-free financial solutions that empower individuals and businesses to thrive ethically.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton
                component="a"
                href="https://youtube.com"
                target="_blank"
                sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'secondary.main' } }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'secondary.main' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 4 }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {['Our Products', 'How It Works', 'About Us', 'FAQs', 'Contact Us'].map((item) => (
                <MuiLink
                  key={item}
                  component={Link}
                  href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                  sx={{
                    color: 'white',
                    opacity: 0.8,
                    textDecoration: 'none',
                    '&:hover': { opacity: 1, color: 'secondary.main' },
                    transition: 'all 0.2s',
                  }}
                >
                  {item}
                </MuiLink>
              ))}
              <MuiLink
                component={Link}
                href="/privacy-policy"
                sx={{
                  color: 'white',
                  opacity: 0.8,
                  textDecoration: 'none',
                  '&:hover': { opacity: 1, color: 'secondary.main' },
                }}
              >
                Privacy Policy
              </MuiLink>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 4 }}>
              Contact Info
            </Typography>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'secondary.main', mb: 0.5 }}>
                  Address:
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  TND Kapital LLC<br />
                  International Center, Suite 400<br />
                  Chicago, IL 60601
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'secondary.main', mb: 0.5 }}>
                  Phone:
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +1 (312) 555-0123
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'secondary.main', mb: 0.5 }}>
                  Email:
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  hello@tndkapital.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 4 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
              Subscribe to stay updated on our latest ethical financial solutions and community news.
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Email Address"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.05)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&:hover fieldset': { borderColor: 'secondary.main' },
                    '&.Mui-focused fieldset': { borderColor: 'secondary.main' },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ minWidth: 'auto', px: 3 }}
              >
                Join
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 10,
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} TND Kapital LLC. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
