"use client";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    fontSize: "0.95rem",
    "&:hover": { color: "#d2aa51" },
    transition: "all 0.2s",
  };

  const headerStyle = {
    fontWeight: 800,
    color: "#0D244D",
    mb: 3,
    fontSize: "1.2rem",
  };

  return (
    <Box sx={{ bgcolor: "white", pt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: Logo & Social */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box>
              <Image
                src="https://tndkapital.com/wp-content/uploads/2025/05/Untitled-design-70.png"
                alt="TND Kapital Logo"
                width={280}
                height={120}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#666", mb: 4, lineHeight: 1.8, maxWidth: 300 }}
            >
              TND Kapital provides Sharia-compliant commercial solutions to
              empower individuals and families. We&apos;re committed to
              transparency, community support, and ethical growth rooted in
              Islamic principles.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {[FacebookIcon, InstagramIcon, YouTubeIcon, WhatsAppIcon].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      bgcolor: "#0D244D",
                      color: "white",
                      width: 36,
                      height: 36,
                      "&:hover": { bgcolor: "#d2aa51" },
                      transition: "all 0.3s",
                    }}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </IconButton>
                ),
              )}
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="h6" sx={headerStyle}>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {[
                "Home",
                "How it Works",
                "About Us",
                "Our Product",
                "Contact us",
                "Disclaimer",
              ].map((link) => (
                <MuiLink key={link} component={Link} href="#" sx={linkStyle}>
                  {link}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Helpful Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="h6" sx={headerStyle}>
              Helpful Links
            </Typography>
            <Stack spacing={1.5}>
              {[
                "Apply Now",
                "FAQ",
                "Privacy Policy",
                "Terms and Conditions",
                "Careers",
                "Security",
              ].map((link) => (
                <MuiLink key={link} component={Link} href="#" sx={linkStyle}>
                  {link}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact Us */}
          <Grid size={{ xs: 12, md: 2.5 }}>
            <Typography variant="h6" sx={headerStyle}>
              Contact Us
            </Typography>
            <Stack spacing={2.5}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ color: "#0D244D" }}>
                  <PhoneIcon fontSize="small" />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#333", fontWeight: 500 }}
                >
                  +1 940 334 9255
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ color: "#0D244D" }}>
                  <MailOutlineIcon fontSize="small" />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#333", fontWeight: 500 }}
                >
                  trust@tndkapital.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Box sx={{ color: "#0D244D", mt: 0.5 }}>
                  <LocationOnIcon fontSize="small" />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#333", fontWeight: 500, lineHeight: 1.6 }}
                >
                  TND Kapital P.O. Box 291
                  <br />
                  Frisco, TX 75034 USA
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Column 5: Newsletter */}
          <Grid size={{ xs: 12, md: 2.5 }}>
            <Typography variant="h6" sx={headerStyle}>
              Newsletter
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", mb: 3, lineHeight: 1.6 }}
            >
              Signup for our newsletter to get update information, news, Insight
              or promotions.
            </Typography>
            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder="Email"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#0D244D", fontSize: 18 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#f8f9fa",
                    borderRadius: 2,
                    "& fieldset": { borderColor: "transparent" },
                    "&:hover fieldset": { borderColor: "#eee" },
                    "&.Mui-focused fieldset": { borderColor: "#0D244D" },
                  },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#0D244D",
                  color: "white",
                  borderRadius: 10,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  "&:hover": { bgcolor: "#0a1d3d" },
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Bar */}
      <Box sx={{ bgcolor: "#071529", mt: 10, py: 3 }}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              textAlign: "center",
              fontSize: "0.9rem",
            }}
          >
            Copyright © 2026 TND Kapital. All rights reserved. Powered by TND
            Kapital
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
