'use client';

import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, href }) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 4,
        border: '1px solid rgba(13, 36, 77, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 30px rgba(13, 36, 77, 0.08)',
          borderColor: 'secondary.main',
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(210, 170, 81, 0.1)',
            color: 'secondary.main',
            mb: 3,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}>
          {description}
        </Typography>
        <Button
          component={Link}
          href={href}
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: 'secondary.main',
            fontWeight: 700,
            p: 0,
            justifyContent: 'flex-start',
            '&:hover': {
              bgcolor: 'transparent',
              textDecoration: 'underline',
            },
          }}
        >
          Learn more
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
