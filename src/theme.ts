'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D244D', // Navy Blue
    },
    secondary: {
      main: '#D2AA51', // Gold
    },
    text: {
      primary: '#0B2735', // Dark Teal / Navy
      secondary: '#666666',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9F9F9',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
        containedPrimary: {
          backgroundColor: '#0D244D',
          '&:hover': {
            backgroundColor: '#0A1B3A',
          },
        },
        containedSecondary: {
          backgroundColor: '#D2AA51',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#B89546',
          },
        },
      },
    },
  },
});

export default theme;
