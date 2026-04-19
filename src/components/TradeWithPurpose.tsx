"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const TradeWithPurpose = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 15 },
        width: "100%",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `url("/images/treadWithPurpose.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
      {/* Dark Overlay for the whole section */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            bgcolor: "rgba(30, 30, 30, 0.85)",
            backdropFilter: "blur(10px)",
            borderRadius: 6,
            p: { xs: 4, md: 8 },
            textAlign: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3.2rem" },
                lineHeight: 1.2,
              }}
            >
              Trade with Purpose. <br />
              Growth with Integrity.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              Empowering individuals and communities through Sharia-compliant
              solutions — designed to uplift, not burden with debt.
            </Typography>

            <Box sx={{ pt: 2 }}>
              <Button
                variant="contained"
                component={Link}
                href="/apply-now"
                sx={{
                  bgcolor: "#d2aa51",
                  color: "white",
                  fontWeight: 700,
                  px: 6,
                  py: 1.8,
                  borderRadius: 10,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  boxShadow: "0 10px 20px rgba(210, 170, 81, 0.3)",
                  "&:hover": {
                    bgcolor: "#b89445",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s",
                }}
              >
                Get Started!
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TradeWithPurpose;
