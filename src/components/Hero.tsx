"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import images from "../../public/images";

const slides = [
  {
    image: images.banners.banner1,
  },
  {
    image: images.banners.banner2,
  },
  {
    image: images.banners.banner3,
  },
  {
    image: images.banners.banner4,
  },
  {
    image: images.banners.banner5,
  },
  {
    image: images.banners.banner6,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        width: "100%",
        overflow: "hidden",
        bgcolor: "#000",
      }}
    >
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 6, ease: "linear" }}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slides[currentSlide].image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(13, 36, 77, 0.8), rgba(13, 36, 77, 0.4), transparent)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{ height: "100%", position: "relative", zIndex: 2 }}
      >
        <Stack
          justifyContent="center"
          sx={{ height: "100%", maxWidth: 800 }}
          spacing={2}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "#d2aa51",
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                }}
              >
                TND KAPITAL
              </Typography>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontSize: { xs: "2.5rem", md: "4.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 2,
                  mt: 1,
                }}
              >
                Empowering Lives Through Ethical Business Solutions
              </Typography>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Fair & Transparent- For Everyday People
              </Typography>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <Button
                variant="contained"
                component={Link}
                href="/apply-now"
                sx={{
                  bgcolor: "#d2aa51",
                  color: "white",
                  fontWeight: 700,
                  px: 5,
                  py: 2,
                  borderRadius: 8,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  boxShadow: "0 4px 15px rgba(210, 170, 81, 0.4)",
                  "&:hover": {
                    bgcolor: "#b89445",
                    transform: "translateY(-4px) scale(1.02)",
                    boxShadow: "0 8px 25px rgba(210, 170, 81, 0.6)",
                  },
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                Get Started!
              </Button>
            </motion.div>
          </motion.div>
        </Stack>
      </Container>

      {/* Slide Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
          zIndex: 3,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor:
                currentSlide === index ? "#d2aa51" : "rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                bgcolor: "#d2aa51",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Hero;
