"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";

const faqs = [
  {
    question: "What is TND Kapital about?",
    answer:
      "TND Kapital is a values-driven community development partner that helps individuals and small businesses acquire what they need through ethical, sharia-compliant business partnerships.",
  },
  {
    question: "Are you truly sharia-compliant?",
    answer:
      "Absolutely! Our products and services are fully vetted and approved by an independent Sharia Supervisory Board (SSB). We also do our due diligence with our partners to make sure we offer ethically-sourced products that prioritize dignity and transparency at every level.",
  },
  {
    question: "Do I need to be muslim to work with TND Kapital?",
    answer:
      "Absolutely not! While our approach follows Islamic ethical principles, faith is not a requirement. We work with everyone — Muslim or non-Muslim. Our programs are open to individuals, families, and small businesses seeking fair and ethical ways to acquire essential goods or grow their trade. As long as the activity or item aligns with Sharia principles, we’re happy to partner with you. Your religion does not matter. Your word does!",
  },
  {
    question: "What partnership models do you offer?",
    answer:
      "• Cost Plus Profit (CPP) for Individuals – For home and family items such as stoves, TVs, mini solar kits, water tanks, etc.\n\n• Cost Plus Profit (CPP) for Business – For productive tools like sewing machines, freezers, solar panels, merchandise, etc.\n\n• Thrive Together Partnership (TTP) – Partnership where both sides share effort and results fairly.\n\n• Group Empowerment Program (GEP) – Collective arrangements that support trusted community groups.\n",
  },
  {
    question: "How does TND Kapital work with local communities?",
    answer:
      "We combine digital tools with a strong local presence to stay close to the people we serve. Our trained representatives live and work within the communities, helping families and entrepreneurs understand our process, make informed choices, and succeed responsibly. Beyond trade support, we invest in training, job creation, and community education — because real progress happens when growth is shared.",
  },
  {
    question: "How does TND Kapital sustain itself?",
    answer:
      "Through transparent, pre-agreed margins on trade transactions — never through interest or hidden fees. Our contracts are written in plain simple language. No complicated jargons, no gimmicks. What you see is what you get.",
  },
  {
    question: 'What does "Sharia-compliant" mean?',
    answer:
      "In short it means our approach is guided by values rooted in fairness, transparency, and shared benefit. In practice, we avoid interest-based transactions and focus on trade, partnership, and real economic activity backed by real goods. Every arrangement promotes honesty, mutual respect, and community well-being — ensuring that progress benefits everyone involved..",
  },
  {
    question: 'What does "TND" stand for?',
    answer:
      "We often ask our clients and partners what “TND” means to them — and the answers are as inspiring as the people we serve. Over the years we’ve heard hundreds of heartfelt interpretations, such as Trust. Nobility. Dignity, Trustworthy & Dedicated, The Nurturing Difference, Today’s Noble Deed, True North Discovery, Tomorrow’s New Dawn, etc.  Each one reflects a shared belief in growth, trust, and purpose. The official placeholder is Trust & Nurtured Development. What does it mean to you?.",
  },
  {
    question: "Is TND Kapital a bank or a lender?",
    answer:
      "No. We are not a bank or financial institution. We do not issue loans or credit. We engage in trade-based transactions where we purchase goods or assets on your behalf, and resell them to you at a fair, pre-agreed profit, repayable overtime in installments. No interest ever.",
  },
  {
    question: "What makes TND Kapital different?",
    answer:
      "We do NOT lend cash or liquidity, and we don’t deal with loans or interest. Every transaction is backed by tangible assets or goods, and every arrangement is based on mutual understanding, clear terms, and shared trust. Trust is our currency..",
  },
];

const FAQs = () => {
  return (
    <Box id="faqs" sx={{ width: "100%" }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          {faqs.slice(0, 5).map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 2,
                "&:before": { display: "none" },
                border: "1px solid rgba(13, 36, 77, 0.1)",
                borderRadius: "12px !important",
                overflow: "hidden",
                bgcolor: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "secondary.main" }} />}
                sx={{
                  px: 3,
                  py: 1.5,
                  "&.Mui-expanded": { bgcolor: "rgba(210, 170, 81, 0.05)" },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0C2752",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, bgcolor: "white" }}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
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
                "&:before": { display: "none" },
                border: "1px solid rgba(13, 36, 77, 0.1)",
                borderRadius: "12px !important",
                overflow: "hidden",
                bgcolor: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "secondary.main" }} />}
                sx={{
                  px: 3,
                  py: 1.5,
                  "&.Mui-expanded": { bgcolor: "rgba(210, 170, 81, 0.05)" },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#0C2752",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, bgcolor: "white" }}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
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
