'use client';

import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant: 'light' | 'dark';
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, href, variant }) => {
  const isDark = variant === 'dark';

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 4,
        bgcolor: isDark ? '#1a1a1a' : '#fff',
        color: isDark ? '#fff' : '#0D244D',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: isDark ? '#0D244D' : '#0D244D', // Both use blue icon box according to screenshot
            color: '#fff',
            mb: 3,
          }}
        >
          {icon}
        </Box>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 800, 
            mb: 2, 
            fontSize: '1.25rem',
            lineHeight: 1.3
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: isDark ? 'rgba(255,255,255,0.8)' : '#666', 
            mb: 4, 
            flexGrow: 1,
            lineHeight: 1.6
          }}
        >
          {description}
        </Typography>
        <Button
          component={Link}
          href={href}
          sx={{
            bgcolor: '#d2aa51',
            color: 'white',
            fontWeight: 700,
            px: 3,
            py: 1,
            borderRadius: 8,
            fontSize: '0.85rem',
            textTransform: 'none',
            alignSelf: 'flex-start',
            '&:hover': {
              bgcolor: '#b89445',
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
