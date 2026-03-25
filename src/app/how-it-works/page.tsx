'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Stack, 
  Paper, 
  Avatar, 
  Button,
  useTheme,
  alpha
} from '@mui/material';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

// Icons
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';

const steps = [
  {
    title: 'Submit an Intent Form',
    description: 'Tell us what product, asset, or equipment you need — your journey begins with a simple request.',
    icon: <DescriptionRoundedIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: 'Initial Review & Pre-screening',
    description: 'A TND Kapital field agent will contact you via WhatsApp to verify key details, and determine eligibility for the next step.',
    icon: <FactCheckRoundedIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: 'Full Request & Trade Proposal',
    description: 'If pre-qualified, you\'ll receive a personalized CPP proposal — with clear terms, no interest, and no gimmicks.',
    icon: <LocalShippingRoundedIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: 'Delivery & Repayment',
    description: 'Once finalized, we purchase and deliver the goods. You repay in pre-agreed installments — helping the next person in need.',
    icon: <HandshakeRoundedIcon sx={{ fontSize: 32 }} />,
  },
];

const whyChoose = [
  { icon: <VerifiedUserRoundedIcon />, text: '100% Sharia-compliant' },
  { icon: <GroupsRoundedIcon />, text: 'Built on community values' },
  { icon: <VisibilityRoundedIcon />, text: 'Transparent terms, no interest' },
  { icon: <PsychologyRoundedIcon />, text: 'Personalized guidance' },
];

const HowItWorks = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'white' }}>
      <Navbar />
      
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box sx={{ position: 'relative', height: { xs: '60vh', md: '70vh' }, minHeight: 400, width: '100%', overflow: 'hidden' }}>
          <Image
            src="/images/how-it-works/hero.png"
            alt="Collaboration at TND Kapital"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              inset: 0, 
              bgcolor: alpha(theme.palette.primary.main, 0.6),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              px: 3
            }}
          >
            <Container maxWidth="md">
              <ScrollReveal variant="fade">
                <Typography variant="h1" sx={{ color: 'white', mb: 3, fontSize: { xs: '2.5rem', md: '4.5rem' } }}>
                  How It Works
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', opacity: 0.9, fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}>
                  From first step to final delivery, our process is built for simplicity, trust, and peace of mind. 
                  No stress. No confusion. Just a clear, values-based path to what matters most.
                </Typography>
              </ScrollReveal>
            </Container>
          </Box>
        </Box>

        {/* Process Steps Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <ScrollReveal delay={index * 0.1} variant="slideUp">
                  <Box sx={{ textAlign: 'center', px: 2 }}>
                    <Box 
                      sx={{ 
                        width: 64, 
                        height: 64, 
                        borderRadius: '50%', 
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main', fontSize: '1.1rem' }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {step.description}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Offer & Why Choose Section */}
        <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.02), py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="flex-start">
              {/* Left Side: Offer */}
              <Grid size={{ xs: 12, md: 7 }}>
                <ScrollReveal variant="slideRight">
                  <Typography variant="h2" sx={{ mb: 3, color: 'primary.main', fontWeight: 800 }}>
                    See what we offer
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, maxWidth: 600 }}>
                    From essential goods for your home to tools that grow your business or your community, 
                    our programs are built around your goals — with clarity and purpose.
                  </Typography>
                  
                  <Grid container spacing={2}>
                    {[1, 2, 3].map((num) => (
                      <Grid key={num} size={{ xs: 4 }}>
                        <Box sx={{ position: 'relative', height: { xs: 150, md: 250 }, borderRadius: 4, overflow: 'hidden', width: '100%' }}>
                          <Image
                            src={`/images/how-it-works/offer-${num}.png`}
                            alt={`Offer ${num}`}
                            fill
                            sizes="(max-width: 768px) 33vw, 25vw"
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </ScrollReveal>
              </Grid>

              {/* Right Side: Why Choose Card */}
              <Grid size={{ xs: 12, md: 5 }}>
                <ScrollReveal variant="slideLeft" delay={0.2}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: { xs: 4, md: 6 }, 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      borderRadius: 6,
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                      Why Choose TND Kapital?
                    </Typography>
                    
                    <Stack spacing={3} sx={{ mb: 5 }}>
                      {whyChoose.map((item, index) => (
                        <Stack key={index} direction="row" spacing={2} alignItems="center">
                          <Box sx={{ color: 'secondary.main', display: 'flex' }}>
                            {item.icon}
                          </Box>
                          <Typography sx={{ fontWeight: 500 }}>{item.text}</Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button 
                      variant="outlined" 
                      color="inherit"
                      endIcon={<ArrowForwardRoundedIcon />}
                      href="/contact-us"
                      sx={{ 
                        alignSelf: 'flex-start',
                        borderRadius: 100,
                        px: 4,
                        py: 1.5,
                        borderColor: alpha('#fff', 0.5),
                        '&:hover': { borderColor: 'white', bgcolor: alpha('#fff', 0.1) }
                      }}
                    >
                      Have Questions?
                    </Button>
                  </Paper>
                </ScrollReveal>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Testimonial Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
          <Grid container spacing={8} alignItems="center">
            {/* Left Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal variant="slideRight">
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 900, letterSpacing: 2 }}>
                  TESTIMONIAL
                </Typography>
                <Typography variant="h2" sx={{ mt: 1, mb: 3, fontWeight: 800, color: 'primary.main' }}>
                  What Our Clients Say
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
                  Real stories from real people — discover how ethical access to essential goods is changing lives.
                </Typography>
                
                <Box sx={{ mb: 6, pl: 3, borderLeft: `4px solid ${theme.palette.secondary.main}` }}>
                  <Typography variant="h6" sx={{ fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6, color: 'primary.main', opacity: 0.9 }}>
                    &ldquo;Through TND Kapital&apos;s Group Empowerment Program (GEP), we were able to acquire essential tools 
                    and grow our businesses &mdash; without falling into debt.&rdquo;
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar 
                    src="/images/how-it-works/client.png" 
                    sx={{ width: 64, height: 64, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: 'primary.main' }}>Benko Co-op</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Fishery Owners</Typography>
                  </Box>
                </Stack>
                
                <Stack direction="row" spacing={1} sx={{ mt: 6 }}>
                  {[1, 2, 3].map((i) => (
                    <Box 
                      key={i} 
                      sx={{ 
                        width: i === 1 ? 24 : 8, 
                        height: 8, 
                        borderRadius: 4, 
                        bgcolor: i === 1 ? 'primary.main' : alpha(theme.palette.primary.main, 0.2) 
                      }} 
                    />
                  ))}
                </Stack>
              </ScrollReveal>
            </Grid>

            {/* Right Image & Floating Card */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative' }}>
              <ScrollReveal variant="slideLeft" delay={0.3}>
                <Box sx={{ position: 'relative', borderRadius: 10, overflow: 'hidden', height: { xs: 400, md: 600 }, width: '100%' }}>
                  <Image
                    src="/images/how-it-works/testimonial-bg.png"
                    alt="Family sharing a meal"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                
                {/* Floating Review Card */}
                <Paper
                  elevation={10}
                  sx={{
                    position: 'absolute',
                    bottom: 60,
                    right: { xs: 20, md: -20 },
                    p: 4,
                    borderRadius: 4,
                    bgcolor: 'white',
                    maxWidth: 240,
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.05)}`,
                    zIndex: 2
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
                    4.7+
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', mb: 2 }}>
                    471 Reviews
                  </Typography>
                  <Box 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      py: 0.5, 
                      px: 2, 
                      borderRadius: 100, 
                      fontSize: '0.75rem', 
                      fontWeight: 700,
                      display: 'inline-block',
                      mb: 2
                    }}
                  >
                    Excellent Score
                  </Box>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    size="small"
                    sx={{ bgcolor: 'primary.main', borderRadius: 2, textTransform: 'none', fontWeight: 700 }}
                  >
                    All Reviews
                  </Button>
                </Paper>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>
      </main>
      
      <Footer />
    </Box>
  );
};

export default HowItWorks;
