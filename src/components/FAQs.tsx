'use client';

import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is TND Kapital about?',
    answer: 'TND Kapital is a mission-driven company inspired by Islamic ethics and committed to community development. We provide practical, interest-free solutions that support everyday goals — helping people grow with confidence, fairness, and integrity.',
  },
  {
    question: 'Are you truly sharia-compliant?',
    answer: 'Yes, our solutions are designed based on ethical and faith-based principles that avoid interest (riba) and emphasize transparency and risk-sharing. We provide trade-based solutions that honor faith, family, and community.',
  },
  {
    question: 'Do I need to be muslim to work with TND Kapital?',
    answer: 'No. At TND Kapital, we serve everyone with dignity and fairness — regardless of religion. Whether Muslim or non-Muslim, if your request meets our criteria and supports ethical business or trade, you\'re welcome.',
  },
  {
    question: 'What partnership models do you offer?',
    answer: 'We offer several ethical models including Cost-Plus-Profit (Murabaha) for asset acquisition, Thrive Together Partnerships (Musharaka) for equity investment, and the Group Empowerment Program (GEP) for collective growth.',
  },
  {
    question: 'How does TND Kapital work with local communities?',
    answer: 'We believe in community-driven growth. Through our Group Empowerment Program and transparent trade models, we help local entrepreneurs and families access the tools they need to achieve self-reliance without the burden of interest.',
  },
  {
    question: 'How does TND Kapital sustain itself?',
    answer: 'Unlike traditional lenders that earn from interest, TND Kapital sustains itself through transparent, agreed-upon profit margins in trade-based transactions and through risk-and-profit sharing in equity partnerships.',
  },
  {
    question: 'What does "Sharia-compliant" mean?',
    answer: 'In the context of finance, Sharia-compliant means operating without interest (riba), avoiding uncertainty (gharar) or gambling (maysir), and ensuring all investments are ethical and socially responsible.',
  },
  {
    question: 'What does "TND" stand for?',
    answer: 'TND represents our core commitment to Trust, Nurturing, and Dignity — the pillars upon which we build our partnerships and serve our community.',
  },
  {
    question: 'Is TND Kapital a bank or a lender?',
    answer: 'TND Kapital is not a bank or a traditional lender. We are a value-driven trade and investment company. We don\'t "lend money" for interest; we "partner in trade" for a shared profit or a transparent margin.',
  },
  {
    question: 'What makes TND Kapital different?',
    answer: 'Our difference lies in our interest-free, trade-based approach. We focus on the actual asset or business goal rather than just the financial transaction, walking with our partners toward genuine economic empowerment.',
  },
];

const FAQs = () => {
  return (
    <Box id="faqs" sx={{ width: '100%' }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          {faqs.slice(0, 5).map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 2,
                '&:before': { display: 'none' },
                border: '1px solid rgba(13, 36, 77, 0.1)',
                borderRadius: '12px !important',
                overflow: 'hidden',
                bgcolor: 'white',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
                sx={{
                  px: 3,
                  py: 1.5,
                  '&.Mui-expanded': { bgcolor: 'rgba(210, 170, 81, 0.05)' },
                }}
              >
                <Typography sx={{ fontWeight: 700, color: '#0C2752', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, bgcolor: 'white' }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          {faqs.slice(5).map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 2,
                '&:before': { display: 'none' },
                border: '1px solid rgba(13, 36, 77, 0.1)',
                borderRadius: '12px !important',
                overflow: 'hidden',
                bgcolor: 'white',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
                sx={{
                  px: 3,
                  py: 1.5,
                  '&.Mui-expanded': { bgcolor: 'rgba(210, 170, 81, 0.05)' },
                }}
              >
                <Typography sx={{ fontWeight: 700, color: '#0C2752', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, bgcolor: 'white' }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQs;
