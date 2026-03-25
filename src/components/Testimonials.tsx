'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Avatar, Stack, Paper, Button } from '@mui/material';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialData = [
  {
    id: 1,
    tag: 'TESTIMONIAL',
    title: 'What Our Clients Say',
    intro: 'Real stories from real people—see how our ethical business solutions are changing lives with dignity and trust.',
    quote: 'Finally, a partner that aligns with my values. The Cost-Plus purchase plan was clear and fair, and the team guided me every step of the way.',
    author: 'Natulu',
    role: 'Business Owner',
    image: 'https://cdn.antigravity.dev/mahin/hero_trade_logistics_revised_1774446624155.png',
    avatar: 'https://cdn.antigravity.dev/mahin/hero_professional_interaction_1774446395960.png',
  },
  {
    id: 2,
    tag: 'SUCCESS STORY',
    title: 'Growth with Integrity',
    intro: 'Empowering local businesses with capital that respects Sharia principles and fosters sustainable community growth.',
    quote: 'TND Kapital transformed our operations. Their interest-free model allowed us to expand our bakery without the burden of traditional debt.',
    author: 'Ahmed K.',
    role: 'Bakery Manager',
    image: 'https://cdn.antigravity.dev/mahin/hero_bakery_workers_revised_1774446648119.png',
    avatar: 'https://cdn.antigravity.dev/mahin/promise_values_woman_professional_1774451407927.png',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialData.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const current = testimonialData[index];

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Side: Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={3}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: '#0D244D',
                      fontWeight: 700,
                      letterSpacing: 2,
                      fontSize: '0.9rem',
                    }}
                  >
                    {current.tag}
                  </Typography>
                  
                  <Typography
                    variant="h2"
                    sx={{
                      color: '#0D244D',
                      fontWeight: 800,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      lineHeight: 1.1,
                    }}
                  >
                    {current.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {current.intro}
                  </Typography>

                  <Box sx={{ width: '100%', height: '1px', bgcolor: '#eee', my: 2 }} />

                  <Typography
                    variant="h5"
                    sx={{
                      color: '#444',
                      fontWeight: 500,
                      fontSize: '1.25rem',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      position: 'relative',
                      minHeight: '100px',
                    }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={current.avatar}
                      sx={{ width: 60, height: 60, border: '2px solid #0D244D' }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#0D244D', fontSize: '1.1rem' }}>
                        {current.author}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#888' }}>
                        {current.role}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <Stack direction="row" spacing={1} sx={{ pt: 4 }}>
              {testimonialData.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setIndex(i)}
                  sx={{
                    width: i === index ? 30 : 10,
                    height: 6,
                    bgcolor: i === index ? '#0D244D' : '#ddd',
                    borderRadius: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Stack>
          </Grid>

          {/* Right Side: Image and Review Box */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', width: '100%', ml: { md: 4 } }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '1/1.1',
                      borderRadius: 6,
                      overflow: 'hidden',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                    }}
                  >
                    <Image
                      src={current.image}
                      alt={current.author}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                </motion.div>
              </AnimatePresence>

              {/* Floating Review Box (Fixed, doesn't slide) */}
              <Paper
                elevation={10}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: -40,
                  transform: 'translateY(-50%)',
                  width: 220,
                  borderRadius: 4,
                  overflow: 'hidden',
                  display: { xs: 'none', lg: 'block' },
                  zIndex: 2,
                }}
              >
                <Box sx={{ p: 4, textAlign: 'center', bgcolor: 'white' }}>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: '#0D244D', mb: 1 }}>
                    4.8
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0D244D', mb: 2 }}>
                    512 Reviews
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-block',
                      bgcolor: '#0D244D',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    Excellent Score
                  </Box>
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: '#0D244D',
                    color: 'white',
                    borderRadius: 0,
                    py: 1.5,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#0a1d3d' },
                  }}
                >
                  All Reviews
                </Button>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
