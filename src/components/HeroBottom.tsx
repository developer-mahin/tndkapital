"use client";

import HandshakeIcon from "@mui/icons-material/Handshake";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const HeroBottom = () => {
  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 30, color: "#fff" }} />,
      title: "Ethical & Interest-Free",
      description: "Sharia-compliant purchase plans for everyone.",
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 30, color: "#fff" }} />,
      title: "Transparent Solutions",
      description: "Clear terms with no hidden fees or charges.",
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      title: "Community Driven",
      description: "Supporting individuals and families to grow.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: { xs: 4, md: 5 },
        position: "relative",
        zIndex: 10,
        mt: 0, // No negative margin as it's full width now
        mx: { md: 10 },
        borderRadius: { md: 4 },
        boxShadow: "0 10px 30px rgba(13, 36, 77, 0.2)",
        transform: "translateY(-50%)", // Lift it up slightly to overlap
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    p: 1.5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {feature.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.5rem", md: "1.1rem" },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroBottom;
