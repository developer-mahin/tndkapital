'use client';

import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';

const Promise = () => {
  return (
    <Box id="about-us" sx={{ py: { xs: 10, md: 15 }, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="md">
        <Stack spacing={4} sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              color: 'secondary.main',
            }}
          >
            Our Promise
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 500,
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            At TND Kapital, we promise to stay true to our roots. Our solutions are built on the foundations of ethics, transparency, and community. Whether you are an individual looking for a fair purchase plan or a business seeking a growth partner, we are committed to your success without compromising our values.
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: 'secondary.main',
              mx: 'auto',
              borderRadius: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              opacity: 0.8,
              fontStyle: 'italic',
            }}
          >
            &quot;Ethical finance isn&apos;t just a choice; it&apos;s our foundation.&quot;
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Promise;
