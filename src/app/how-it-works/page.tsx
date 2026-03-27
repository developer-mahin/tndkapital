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
        <Box sx={{ position: 'relative', height: { xs: '65vh', md: '75vh' }, minHeight: 500, width: '100%', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src="/images/how-it-works/hero.png"
              alt="Collaboration at TND Kapital"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', transform: 'scale(1.05)' }}
            />
          </Box>
          <Box 
            sx={{ 
              position: 'absolute', 
              inset: 0, 
              bgcolor: alpha(theme.palette.primary.main, 0.7),
              background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.82)} 0%, ${alpha(theme.palette.primary.main, 0.5)} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              px: 3,
              zIndex: 1
            }}
          >
            <Container maxWidth="md">
              <ScrollReveal variant="zoomIn" duration={1.5}>
                <Typography variant="h1" sx={{ color: 'white', mb: 3, fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 800, letterSpacing: '-0.03em' }}>
                  How It Works
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', opacity: 0.9, fontSize: { xs: '1.1rem', md: '1.4rem' }, maxWidth: 850, mx: 'auto', lineHeight: 1.8, fontWeight: 500 }}>
                  From first step to final delivery, our process is built for simplicity, trust, and peace of mind. 
                  No stress. No confusion. Just a clear, values-based path to what matters most.
                </Typography>
                <Box sx={{ mt: 5 }}>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    href="/apply-now"
                    sx={{ 
                      px: 6, 
                      py: 2, 
                      borderRadius: 4, 
                      fontSize: '1.1rem', 
                      fontWeight: 700,
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    Start Your Application
                  </Button>
                </Box>
              </ScrollReveal>
            </Container>
          </Box>
        </Box>

        {/* Process Steps Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 12, md: 18 } }}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <ScrollReveal variant="fade">
              <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                Our 4-Step Process
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 650, mx: 'auto', fontSize: '1.1rem' }}>
                We&apos;ve streamlined our operations to provide you with the most efficient Sharia-compliant trade experience.
              </Typography>
            </ScrollReveal>
          </Box>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <ScrollReveal delay={index * 0.15} variant="slideUp" distance={40}>
                  <Box 
                    sx={{ 
                      textAlign: 'center', 
                      px: 3, 
                      py: 5, 
                      height: '100%',
                      borderRadius: 6,
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        bgcolor: alpha(theme.palette.primary.main, 0.02),
                        transform: 'translateY(-10px)'
                      }
                    }} 
                  >
                    <Box 
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        borderRadius: '24px', 
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                        color: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 4,
                        boxShadow: '0 10px 30px rgba(13, 36, 77, 0.08)',
                        transform: 'rotate(-5deg)',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'rotate(0deg)' }
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2.5, color: 'primary.main', fontSize: '1.25rem', lineHeight: 1.2 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1rem' }}>
                      {step.description}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Offer & Why Choose Section */}
        <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.02), py: { xs: 12, md: 20 }, position: 'relative', overflow: 'hidden' }}>
          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
              {/* Left Side: Offer */}
              <Grid size={{ xs: 12, md: 7 }}>
                <ScrollReveal variant="slideRight" distance={50}>
                  <Typography variant="h2" sx={{ mb: 3, color: 'primary.main', fontWeight: 800, fontSize: { xs: '2.5rem', md: '4rem' }, letterSpacing: '-0.03em' }}>
                    See what we offer
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 8, maxWidth: 650, fontSize: '1.2rem', lineHeight: 1.8 }}>
                    From essential goods for your home to tools that grow your business or your community, 
                    our programs are built around your goals — with absolute clarity and verified purpose.
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {[1, 2, 3].map((num) => (
                      <Grid key={num} size={{ xs: 4 }}>
                        <Box sx={{ 
                          position: 'relative', 
                          height: { xs: 180, md: 320 }, 
                          borderRadius: 6, 
                          overflow: 'hidden', 
                          width: '100%',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                          transition: 'transform 0.5s ease',
                          '&:hover': { transform: 'scale(1.05) translateY(-10px)' }
                        }}>
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
                <ScrollReveal variant="slideLeft" delay={0.3} distance={50}>
                  <Paper 
                    elevation={20}
                    sx={{ 
                      p: { xs: 6, md: 8 }, 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      borderRadius: 8,
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 40px 80px rgba(13, 36, 77, 0.25)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -100,
                        right: -100,
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        bgcolor: alpha('#fff', 0.03),
                        zIndex: 0
                      }
                    }}
                  >
                    <Typography variant="h3" sx={{ mb: 5, fontWeight: 800, fontSize: { xs: '2.2rem', md: '2.8rem' }, lineHeight: 1.1, position: 'relative', zIndex: 1 }}>
                      Why Choose TND Kapital?
                    </Typography>
                    
                    <Stack spacing={4} sx={{ mb: 6, position: 'relative', zIndex: 1 }}>
                      {whyChoose.map((item, index) => (
                        <Stack key={index} direction="row" spacing={3} alignItems="center">
                          <Box sx={{ 
                            color: 'secondary.main', 
                            display: 'flex',
                            p: 1.5,
                            borderRadius: 3,
                            bgcolor: alpha('#fff', 0.08)
                          }}>
                            {item.icon}
                          </Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '1.15rem' }}>{item.text}</Typography>
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
                        borderRadius: 4,
                        px: 5,
                        py: 2,
                        borderColor: alpha('#fff', 0.5),
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'none',
                        position: 'relative',
                        zIndex: 1,
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
        <Container maxWidth="lg" sx={{ py: { xs: 15, md: 25 } }}>
          <Grid container spacing={10} alignItems="center">
            {/* Left Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal variant="slideRight" distance={50}>
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 900, letterSpacing: 4, fontSize: '0.9rem' }}>
                  CLIENT SUCCESS
                </Typography>
                <Typography variant="h2" sx={{ mt: 2, mb: 4, fontWeight: 800, color: 'primary.main', fontSize: { xs: '2.5rem', md: '4rem' }, letterSpacing: '-0.02em' }}>
                  Stories of Impact
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.2rem', lineHeight: 1.8 }}>
                  Real stories from real people — discover how ethical access to essential goods is transforming lives and strengthening communities.
                </Typography>
                
                <Box sx={{ mb: 8, pl: 4, borderLeft: `6px solid ${theme.palette.secondary.main}`, position: 'relative' }}>
                  <Typography variant="h5" sx={{ fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6, color: 'primary.main', fontSize: '1.5rem', opacity: 0.9 }}>
                    &ldquo;Through TND Kapital&apos;s Group Empowerment Program (GEP), we were able to acquire essential tools 
                    and grow our businesses &mdash; without falling into debt.&rdquo;
                  </Typography>
                </Box>

                <Stack direction="row" spacing={3} alignItems="center">
                  <Avatar 
                    src="/images/how-it-works/client.png" 
                    sx={{ width: 80, height: 80, boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: `4px solid ${alpha(theme.palette.primary.main, 0.05)}` }} 
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: 'primary.main', fontSize: '1.25rem' }}>Benko Co-op</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>Fishery Owners</Typography>
                  </Box>
                </Stack>
                
                <Stack direction="row" spacing={1.5} sx={{ mt: 8 }}>
                  {[1, 2, 3].map((i) => (
                    <Box 
                      key={i} 
                      sx={{ 
                        width: i === 1 ? 40 : 12, 
                        height: 12, 
                        borderRadius: 6, 
                        bgcolor: i === 1 ? 'primary.main' : alpha(theme.palette.primary.main, 0.15) 
                      }} 
                    />
                  ))}
                </Stack>
              </ScrollReveal>
            </Grid>

            {/* Right Image & Floating Card */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative' }}>
              <ScrollReveal variant="slideLeft" delay={0.4} distance={60}>
                <Box sx={{ 
                  position: 'relative', 
                  borderRadius: 12, 
                  overflow: 'hidden', 
                  height: { xs: 450, md: 700 }, 
                  width: '100%',
                  boxShadow: '0 50px 100px rgba(13, 36, 77, 0.15)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.2)',
                  }
                }}>
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
                  elevation={24}
                  sx={{
                    position: 'absolute',
                    bottom: 80,
                    right: { xs: 20, md: -40 },
                    p: 5,
                    borderRadius: 8,
                    bgcolor: 'white',
                    maxWidth: 280,
                    textAlign: 'center',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid rgba(13, 36, 77, 0.08)`,
                    zIndex: 2,
                    boxShadow: '0 30px 60px rgba(13, 36, 77, 0.2)'
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main', mb: 1, fontSize: '3rem', letterSpacing: '-0.05em' }}>
                    4.9+
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: 'text.secondary', mb: 3, opacity: 0.8 }}>
                    Community Rating
                  </Typography>
                  <Box 
                    sx={{ 
                      bgcolor: 'secondary.main', 
                      color: 'primary.main', 
                      py: 1, 
                      px: 3, 
                      borderRadius: 100, 
                      fontSize: '0.85rem', 
                      fontWeight: 800,
                      display: 'inline-block',
                      mb: 4,
                      letterSpacing: 1
                    }}
                  >
                    EXCELLENT TRUST
                  </Box>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      bgcolor: 'primary.main', 
                      borderRadius: 4, 
                      textTransform: 'none', 
                      fontWeight: 800,
                      py: 1.5,
                      boxShadow: '0 10px 20px rgba(13, 36, 77, 0.2)',
                      '&:hover': { bgcolor: 'primary.dark' }
                    }}
                  >
                    View All Stories
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
