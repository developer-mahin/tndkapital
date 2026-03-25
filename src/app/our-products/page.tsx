import React from 'react';
import { Box, Container, Typography, Grid, Button, Stack, Divider, Paper } from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LanguageIcon from '@mui/icons-material/Language';
import GroupIcon from '@mui/icons-material/Group';
import HandshakeIcon from '@mui/icons-material/Handshake';


const OurProducts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "white",
      }}
    >
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: { xs: "400px", md: "500px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
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
            }}
          >
            <Image
              src="/images/products-hero.png"
              alt="Community interaction"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(13, 36, 77, 0.65)", // Navy overlay
              }}
            />
          </Box>
          <Container
            maxWidth="md"
            sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
          >
            <ScrollReveal variant="fade">
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "4.5rem" },
                }}
              >
                Our Products
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "secondary.main",
                  fontWeight: 500,
                  letterSpacing: 1,
                }}
              >
                Ethical Solutions Designed to Empower You!
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* Section 1: Values-Driven Enterprise Models */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal variant="slideRight">
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 300, md: 450 },
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                    alt="Enterprise Soap Models"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </ScrollReveal>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollReveal variant="slideLeft">
                <Box>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "secondary.main",
                      fontWeight: 800,
                      letterSpacing: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    OUR PRODUCT
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "primary.main",
                      mb: 3,
                      fontSize: { xs: "2rem", md: "2.8rem" },
                    }}
                  >
                    Values-Driven Enterprise Models
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      mb: 4,
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    At TND Kapital, we offer a carefully curated selection of
                    Sharia-aligned partnership and purchase programs designed to
                    uplift individuals, families, and businesses. Whether
                    you&apos;re starting a venture, acquiring essential tools,
                    or building a more stable future — our offerings are rooted
                    in transparency, dignity, and purpose.
                  </Typography>
                  <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        bgcolor: "primary.main",
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </Box>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>

        {/* Section 2: Enabling Growth Through Trust & Trade */}
        <Box sx={{ bgcolor: "#FDFDFD", py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="flex-start">
              <Grid size={{ xs: 12, md: 6 }}>
                <ScrollReveal variant="slideRight">
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "secondary.main",
                        fontWeight: 800,
                        letterSpacing: 2,
                        mb: 1,
                        display: "block",
                      }}
                    >
                      OUR PRODUCT
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        color: "primary.main",
                        mb: 3,
                        fontSize: { xs: "2rem", md: "2.8rem" },
                      }}
                    >
                      Enabling Growth Through Trust & Trade
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        mb: 5,
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                      }}
                    >
                      TND Kapital offers Sharia-aligned purchasing and
                      partnerships programs designed to support your personal
                      and business goals with integrity. Whether you&apos;re
                      acquiring essential household items or scaling a small
                      venture, we&apos;re here to help. Our offerings are
                      transparent, purposeful, and firmly rooted in Islamic
                      values - so you can move forward with clarity and
                      confidence.
                    </Typography>

                    <Stack spacing={4}>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
                        >
                          Access What You Need — Without Interest or Debt
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", lineHeight: 1.7 }}
                        >
                          Personalized, interest-free purchasing programs
                          grounded in Islamic principles — helping you grow with
                          dignity, clarity, and purpose. Every offering is
                          reviewed and approved by an independent Sharia
                          Supervisory Board (SSB) to ensure full alignment with
                          ethical standards every step of the way.
                        </Typography>
                        <Divider sx={{ mt: 3 }} />
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
                        >
                          Cost Plus Profit (CPP)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", lineHeight: 1.7 }}
                        >
                          Buy what you need today — with full transparency and
                          no interest. A Sharia-compliant plan where we buy the
                          goods you need and sell them to you at a pre-agreed
                          profit, repayable in installments. Applicable for
                          Personal (Household items) or Business (Products or
                          Tools).
                        </Typography>
                        <Divider sx={{ mt: 3 }} />
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
                        >
                          Thrive Together Partnership (TTP)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", lineHeight: 1.7 }}
                        >
                          You bring the skills. We bring the resources. We grow
                          together. A trust-based partnership built on Islamic
                          values. TND Kapital provides the goods or materials
                          your venture needs, and you manage the business. We
                          grow and share in the profit — no pressure.
                        </Typography>
                        <Divider sx={{ mt: 3 }} />
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
                        >
                          Group Empowerment Program (GEP)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", lineHeight: 1.7 }}
                        >
                          Strong alone. Stronger together. Our
                          community-centered Outreach Program is designed
                          specifically for groups or co-ops. Members support
                          each other's success through trust, shared
                          responsibility, and collective empowerment.
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </ScrollReveal>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <ScrollReveal variant="slideLeft">
                  <Box sx={{ position: "relative", pt: { md: 10 } }}>
                    <Box
                      sx={{
                        position: "relative",
                        height: { xs: 400, md: 550 },
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      }}
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
                        alt="Woman on laptop"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Paper
                      elevation={10}
                      sx={{
                        position: "absolute",
                        bottom: -30,
                        right: { xs: 20, md: -30 },
                        p: 4,
                        maxWidth: 280,
                        borderRadius: 2,
                        bgcolor: "white",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "primary.main",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          lineHeight: 1.4,
                        }}
                      >
                        Making ethical access and opportunity a reality for
                        families & entrepreneurs
                      </Typography>
                    </Paper>
                  </Box>
                </ScrollReveal>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Section 3: Why Choose Us */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 5 }}>
              <ScrollReveal variant="slideRight">
                <Typography
                  variant="overline"
                  sx={{
                    color: "secondary.main",
                    fontWeight: 800,
                    letterSpacing: 2,
                    mb: 1,
                    display: "block",
                  }}
                >
                  WHY CHOOSE US
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    mb: 3,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                  }}
                >
                  Turning Purpose into Possibility — One Honest Transaction at a
                  Time
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  Built on Trust, Not Interest. We don&apos;t charge interest or
                  issue loans. Instead, we offer clear, ethical trade-based
                  programs rooted in Islamic principles — so you can access what
                  you need without hidden costs or financial pressure.
                </Typography>
                <Link href="/about-us" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      bgcolor: "primary.main",
                    }}
                  >
                    Learn More
                  </Button>
                </Link>
              </ScrollReveal>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={4}>
                {[
                  {
                    icon: (
                      <VerifiedUserIcon
                        sx={{ color: "secondary.main", fontSize: 40 }}
                      />
                    ),
                    title: "Designed for Dignity",
                    description:
                      "Every solution we offer is crafted to empower individuals and families — helping you grow, build, and thrive with dignity. No cold lines. No fine print. Just partnership.",
                  },
                  {
                    icon: (
                      <LanguageIcon
                        sx={{ color: "secondary.main", fontSize: 40 }}
                      />
                    ),
                    title: "Local Presence, Global Vision",
                    description:
                      "From village markets to urban hubs, our team understands the realities on the ground. We combine grassroots presence with a global outlook — giving you personalized support you can trust.",
                  },
                  {
                    icon: (
                      <HandshakeIcon
                        sx={{ color: "secondary.main", fontSize: 40 }}
                      />
                    ),
                    title: "Rooted in Values, Reviewed by Experts",
                    description:
                      "All of our offerings are reviewed and approved by an independent Sharia Supervisory Board (SSB) to ensure full alignment with Islamic ethics and transparency.",
                  },
                  {
                    icon: (
                      <GroupIcon
                        sx={{ color: "secondary.main", fontSize: 40 }}
                      />
                    ),
                    title: "More Than a Service — A Partner on Your Journey",
                    description:
                      "We don't just provide solutions — we walk with you. Whether you're starting a business, securing a household item, or planning ahead, we're here for the long term.",
                  },
                ].map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <ScrollReveal variant="slideUp" delay={index * 0.1}>
                      <Box sx={{ p: 2 }}>
                        <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            mb: 1,
                            fontSize: "1.1rem",
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", lineHeight: 1.6 }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </ScrollReveal>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        {/* CTA Section */}
        <Box
          sx={{
            position: "relative",
            py: { xs: 10, md: 15 },
            textAlign: "center",
            color: "white",
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
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
              alt="Community future"
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
                bgcolor: "rgba(13, 36, 77, 0.85)",
              }}
            />
          </Box>
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <ScrollReveal variant="fade">
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  mb: 3,
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", md: "2.8rem" },
                }}
              >
                Together, Let&apos;s Build a Future Rooted in Trust and Trade.
                Join the TND Kapital Movement...
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mb: 5,
                  fontSize: "1.1rem",
                }}
              >
                ...increasing access & opportunity — guided by transparency and
                timeless values.
              </Typography>
              <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    borderRadius: 2,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Started
                </Button>
              </Link>
            </ScrollReveal>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default OurProducts;
