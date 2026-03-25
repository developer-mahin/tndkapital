'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    image: 'https://cdn.antigravity.dev/mahin/hero_meeting_vibe_revised_1774446600564.png',
  },
  {
    image: 'https://cdn.antigravity.dev/mahin/hero_professional_interaction_1774446395960.png',
  },
  {
    image: 'https://cdn.antigravity.dev/mahin/hero_trade_logistics_revised_1774446624155.png',
  },
  {
    image: 'https://cdn.antigravity.dev/mahin/hero_bakery_workers_revised_1774446648119.png',
  },
  {
    image: 'https://cdn.antigravity.dev/mahin/hero_family_prosperity_revised_1774446667666.png',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        bgcolor: '#000',
      }}
    >
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 6, ease: 'linear' }}
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, rgba(13, 36, 77, 0.8), rgba(13, 36, 77, 0.4), transparent)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <Container maxWidth="lg" sx={{ height: '100%', position: 'relative', zIndex: 2 }}>
        <Stack
          justifyContent="center"
          sx={{ height: '100%', maxWidth: 800 }}
          spacing={2}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: '#d2aa51',
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: '1rem',
                textTransform: 'uppercase',
              }}
            >
              TND KAPITAL
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Empowering Lives Through Ethical Business Solutions
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontSize: { xs: '1.1rem', md: '1.4rem' },
                fontWeight: 400,
                mb: 4,
                opacity: 0.9,
              }}
            >
              Fair & Transparent- For Everyday People
            </Typography>
            <Button
              variant="contained"
              component={Link}
              href="/apply-now"
              sx={{
                bgcolor: '#d2aa51',
                color: 'white',
                fontWeight: 700,
                px: 5,
                py: 2,
                borderRadius: 8,
                fontSize: '1.1rem',
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(210, 170, 81, 0.4)',
                '&:hover': {
                  bgcolor: '#b89445',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              Get Started!
            </Button>
          </motion.div>
        </Stack>
      </Container>
      
      {/* Slide Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.5,
          zIndex: 3,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: currentSlide === index ? '#d2aa51' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              '&:hover': {
                bgcolor: '#d2aa51',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Hero;


