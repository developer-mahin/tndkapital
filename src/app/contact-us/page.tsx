"use client";

import ContactUs from "@/components/ContactUs";
import ScrollReveal from "@/components/ScrollReveal";
import { Box, Container, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: "400px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundImage: "url(/images/contact-hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(rgba(13, 36, 77, 0.8), rgba(13, 36, 77, 0.6))",
              zIndex: 1,
            },
          }}
        >
          <Container
            maxWidth="md"
            sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
          >
            <ScrollReveal variant="zoomIn" scale={0.9} duration={1.2}>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  fontWeight: 400,
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Our team is ready to answer your questions & offer support.
              </Typography>
            </ScrollReveal>
          </Container>
        </Box>

        {/* Main Content Section */}
        <Box sx={{ py: { xs: 8, md: 10 } }}>
          <Container maxWidth="lg">
            <ScrollReveal variant="slideUp" distance={40}>
              <ContactUs />
            </ScrollReveal>
          </Container>
        </Box>
      </main>
    </Box>
  );
};

export default ContactPage;
