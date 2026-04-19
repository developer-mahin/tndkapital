"use client";

import FAQs from "@/components/FAQs";
import ScrollReveal from "@/components/ScrollReveal";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

const FAQsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "white",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: { xs: "45vh", md: "55vh" },
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
              zIndex: 0,
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(5, 15, 36, 0.7)",
                backgroundImage:
                  "radial-gradient(circle at center, transparent 0%, rgba(5, 15, 36, 0.4) 100%)",
              },
            }}
          >
            <Image
              src="/images/IMG_3708-1.jpg"
              alt="FAQs Hero Background"
              fill
              style={{ objectFit: "cover", transform: "scale(1.1)" }}
              priority
            />
          </Box>
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <ScrollReveal variant="zoomIn" duration={1.5}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3.5rem", md: "5.5rem" },
                  fontWeight: 800,
                  textShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  letterSpacing: "-0.02em",
                }}
              >
                FAQs
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "4px",
                  bgcolor: "primary.light",
                  mx: "auto",
                  mt: 2,
                  borderRadius: 2,
                }}
              />
            </ScrollReveal>
          </Container>
        </Box>

        {/* Title Section */}
        <Box
          sx={{
            pt: { xs: 10, md: 15 },
            pb: { xs: 6, md: 8 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <ScrollReveal variant="slideUp" distance={30}>
              <Typography
                variant="h2"
                sx={{
                  color: "primary.main",
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.2rem",
                  maxWidth: "750px",
                  mx: "auto",
                  lineHeight: 1.8,
                  opacity: 0.8,
                }}
              >
                Explore answers to some of the most common questions about TND
                Kapital and our sharia-compliant trade solutions. We are here to
                help you navigate your journey.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* FAQ Grid Content */}
        <Box sx={{ pb: { xs: 10, md: 20 } }}>
          <Container maxWidth="lg">
            <ScrollReveal variant="slideUp" distance={40} delay={0.2}>
              <FAQs />
            </ScrollReveal>
          </Container>
        </Box>

        {/* Custom CTA Banner */}
        <Container maxWidth="lg" sx={{ pb: { xs: 6, md: 8 } }}>
          <ScrollReveal variant="zoomIn" duration={1.2}>
            <Paper
              elevation={20}
              sx={{
                bgcolor: "#06142e",
                borderRadius: { xs: "24px", md: "40px" },
                overflow: "hidden",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 40px 100px rgba(6, 20, 46, 0.3)",
              }}
            >
              <Grid container>
                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    p: { xs: 6, md: 8 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 3,
                      fontWeight: 800,
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Empower Your Future Today
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 5,
                      fontSize: "1rem",
                      opacity: 0.8,
                      maxWidth: "550px",
                      lineHeight: 1.6,
                    }}
                  >
                    Start your journey toward ethical, interest-free financial
                    freedom with TND Kapital&apos;s expert guidance.
                  </Typography>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "white",
                        color: "primary.main",
                        px: 6,
                        py: 2,
                        borderRadius: "16px",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        textTransform: "none",
                        transition:
                          "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        "&:hover": {
                          bgcolor: "#f5f5f5",
                          transform: "translateY(-5px)",
                          boxShadow: "0 15px 30px rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      Get Started!
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    position: "relative",
                    height: { xs: "300px", md: "auto" },
                    minHeight: { md: "300px" },
                  }}
                >
                  <Image
                    src="/images/C99C30D2-3A27-40D5-B183-8203636523FB__1_-removebg-preview.png"
                    alt="Empower Your Future"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: {
                        xs: "linear-gradient(to bottom, #06142e 0%, transparent 30%)",
                        md: "linear-gradient(to right, #06142e 0%, transparent 30%)",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </ScrollReveal>
        </Container>
      </main>
    </Box>
  );
};

export default FAQsPage;
