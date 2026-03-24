'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is Cost-Plus-Profit (CPP)?',
    answer: 'CPP is an ethical financing model where TND Kapital purchases the equipment or asset you need and sells it to you at a transparent, agreed-upon profit margin. This eliminates traditional interest-based lending.',
  },
  {
    question: 'Is TND Kapital sharia-compliant?',
    answer: 'Yes, our solutions are designed based on ethical and faith-based principles that avoid interest (riba) and emphasize transparency and risk-sharing.',
  },
  {
    question: 'How do I start a Thrive Together Partnership?',
    answer: 'The TTP begins with an evaluation of your business plan. We then partner with you through equity investment, sharing both the risks and the profits of the venture.',
  },
  {
    question: 'Who can join the Group Empowerment Program?',
    answer: 'GEP is designed for cooperatives, investment groups, and community organizations looking to pool resources for collective financial growth and asset acquisition.',
  },
];

const FAQs = () => {
  return (
    <Box id="faqs" sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Find answers to common questions about our ethical business solutions.
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 2,
                '&:before': { display: 'none' },
                border: '1px solid rgba(13, 36, 77, 0.1)',
                borderRadius: '8px !important',
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
                sx={{
                  px: 3,
                  py: 1,
                  '&.Mui-expanded': { bgcolor: 'rgba(210, 170, 81, 0.05)' },
                }}
              >
                <Typography sx={{ fontWeight: 700, color: 'primary.main' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 2, bgcolor: 'rgba(210, 170, 81, 0.02)' }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQs;
