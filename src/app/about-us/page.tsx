"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <Image
              src="/images/eid-portrait-and-smile-of-family-at-table-in-dining-room-of-home-together-for-muslim-celebration-.jpg" // Placeholder: Coworking/People
              alt="Our Story Background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
          <Container maxWidth="md">
            <ScrollReveal variant="fade" duration={1.2}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "5rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  opacity: 0.95,
                }}
              >
                Empowering Lives with Innovative Business Solutions. Your
                Partner in Community Development.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* Narrative Section - Building Ethical Futures */}
        <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal variant="slideRight" distance={30}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 400, md: 600 },
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image
                    src="/images/31B0866C-D742-4CBD-81B8-AD48A2237A62-2048x1367.jpeg" // Placeholder: Handshake/Trust
                    alt="Building Ethical Futures"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </ScrollReveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal variant="slideLeft" distance={30} delay={0.2}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    letterSpacing: 2,
                    fontSize: "0.9rem",
                    mb: 2,
                    display: "block",
                  }}
                >
                  WHAT WE DO
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    mb: 3,
                    fontWeight: 700,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.1,
                  }}
                >
                  Building Ethical Futures, Together
                </Typography>
                <Box
                  sx={{
                    pl: 3,
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                    mb: 4,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: "italic",
                      fontSize: "1.25rem",
                      color: "text.secondary",
                      lineHeight: 1.5,
                    }}
                  >
                    &quot;We don&apos;t just support aspirations — we stand with
                    those who pursue them.&quot; — TND Kapital.
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 5,
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  TND Kapital is a mission-driven company inspired by Islamic
                  ethics and committed to community development. We provide
                  practical, interest-free solutions that support everyday goals
                  — helping people grow with confidence, fairness, and
                  integrity.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#0C2752",
                    color: "white",
                    px: 5,
                    py: 1.5,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    transition:
                      "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    "&:hover": {
                      bgcolor: "#081a38",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(12, 39, 82, 0.3)",
                    },
                  }}
                >
                  Discover more
                </Button>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>

        {/* Trusted Grid Section */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "white" }}>
          <Container maxWidth="lg">
            <ScrollReveal variant="fadeUp">
              <Typography
                variant="h3"
                textAlign="center"
                sx={{
                  color: "#0C2752",
                  mb: 8,
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Trusted, Transparent, and Innovative.
              </Typography>
            </ScrollReveal>

            <ScrollReveal staggerChildren={0.2}>
              <Grid container spacing={4}>
                {[
                  {
                    title: "Rooted in Values. Built for People.",
                    description:
                      "TND Kapital was founded on the bold belief that everyone deserves dignified access to tools that can improve their lives — without interest, exploitation, or pressure. We're not a bank. We're not a traditional lender. We're a value-driven company offering trade-based solutions that honor faith, family, and community.\n\nWhat began as a personal mission is now evolving into a movement of empowerment — one home, one business, one community at a time.",
                  },
                  {
                    title: "Inclusive By Design.",
                    description:
                      "At TND Kapital, we serve everyone with dignity and fairness — regardless of religion.\n\nWhether Muslim or non-Muslim, if your request meets our criteria and supports ethical, halal business or trade, you're welcome.\n\nWe believe values matter more than labels — and dignity belongs to all.",
                  },
                  {
                    title: "Our Future Is Collective.",
                    description:
                      "This is just the beginning. We're building something meaningful — and we believe in doing it the right way, even if that means growing slow and strong. If you believe in empowerment through trust and community — you're in the right place. Join Us.",
                  },
                ].map((card, index) => (
                  <Grid
                    size={{ xs: 12, md: 4 }}
                    key={index}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: "100%",
                        bgcolor: "#0C2752",
                        color: "white",
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-10px)",
                          boxShadow: "0 20px 40px rgba(12, 39, 82, 0.2)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mb: 4,
                          width: "100px",
                          height: "40px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src="/logo.png"
                          alt="TND Kapital"
                          fill
                          style={{
                            objectFit: "contain",
                            filter:
                              "brightness(0) invert(1) sepia(1) saturate(500%) hue-rotate(0deg)",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ mb: 3, fontWeight: 700, lineHeight: 1.2 }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          opacity: 0.9,
                          lineHeight: 1.8,
                          whiteSpace: "pre-line",
                          fontSize: "12px"
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </ScrollReveal>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            position: "relative",
            py: { xs: 15, md: 25 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <Image
              src="/images/excited-pregnant-islamic-spouses-shopping-online-with-tablet-and-credit-card-at-home-relaxing.jpg"
              alt="CTA Background"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Container maxWidth="md">
            <ScrollReveal variant="zoomIn" scale={0.9}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "rgba(12, 39, 82, 0.85)",
                  backdropFilter: "blur(10px)",
                  p: { xs: 4, md: 8 },
                  borderRadius: "30px",
                  color: "white",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "3.5rem" },
                  }}
                >
                  Empowering Ethical Growth, One Family at a Time
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 5,
                    fontSize: "1.1rem",
                    opacity: 0.9,
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  At TND Kapital, we go beyond transactions — we walk with you
                  on a path toward dignity and self-reliance. Our values-based
                  approach, grounded in Islamic principles, offers interest-free
                  solutions built on trust, clarity, and community-focused
                  support.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "#0C2752",
                    px: 6,
                    py: 2,
                    borderRadius: "40px",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    textTransform: "none",
                    transition:
                      "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    "&:hover": {
                      bgcolor: "#f5f5f5",
                      transform: "scale(1.05) translateY(-5px)",
                    },
                  }}
                >
                  Get Started!
                </Button>
              </Paper>
            </ScrollReveal>
          </Container>
        </Box>
      </main>
    </Box>
  );
};

export default AboutUs;
