"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const promises = [
  {
    tag: "SHARIA-ALIGNED TRADE PROGRAMS",
    title: "Interest-Free Purchase Plans",
    description:
      "Every product and service we offer is 100% aligned with Islamic principles, ensuring ethical practices and interest-free solutions.",
    image: "/images/IMG_3503.jpg",
  },
  {
    tag: "ISLAMIC ADVISORY",
    title: "Transparency & Integrity",
    description:
      "No hidden fees, no fine print. We provide clear, upfront terms that ensure you understand every aspect of your sales contract agreement.",
    image: "/images/Islamic-Advisory-Board.png",
  },
  {
    tag: "PURPOSEFUL COMMERCE",
    title: "Personalized Support",
    description:
      "We treat you as a partner, not just a client. Our team works closely with you to understand your unique needs and help you find the best solutions.",
    image: "/images/image16.jpeg",
  },
  {
    tag: "HALAL TRADING SOLUTIONS",
    title: "Community Empowerment",
    description:
      "We are committed to uplifting communities by offering products that support growth, self-reliance, and collective success.",
    image: "/images/mobile-shope.png",
  },
  {
    tag: "ETHICAL VENTURES",
    title: "Respect for Faith & Values",
    description:
      "We honor the values of Islam in all of our dealings, ensuring that you can trust us to operate with the highest ethical standards at all times.",
    image: "/images/image3.jpeg",
  },
  {
    tag: "INTEREST-FREE SOLUTIONS",
    title: "Interest-Free Solutions",
    description:
      "No interest. No hidden fees. Just fair, transparent plans that&apos;s designed to support you without compromising your faith or integrity.",
    image: "/images/bike.png",
  },
];

const Promise = () => {
  return (
    <Box
      id="promise"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Geometric Background */}
      <Box
        sx={{
          position: "absolute",
          left: -50,
          top: "20%",
          width: 300,
          height: 300,
          opacity: 0.05,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%230D244D' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.91v12.68l11 6.35 11-6.35V17.91L14 11.56l-11 6.35z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start" sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h2"
              sx={{
                color: "#0D244D",
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "3.2rem" },
                lineHeight: 1,
              }}
            >
              Our Promise
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                maxWidth: 700,
              }}
            >
              At TND Kapital, we&apos;re more than just a service provider — we
              are your trusted partner in building a brighter, dignified future.
              Our promise is to deliver ethical, transparent, and
              community-centered access to essential goods that empower
              individuals and families to thrive — without interest, debt, or
              complexity.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {promises.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  bgcolor: "#fcfcfc",
                  border: "1px solid #f0f0f0",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box sx={{ position: "relative", height: 220, width: "100%" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {/* Tag Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      bgcolor: "#0D244D",
                      color: "white",
                      px: 2,
                      py: 0.8,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: 0.5,
                    }}
                  >
                    {item.tag}
                  </Box>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: "#0D244D",
                      mb: 2,
                      fontSize: "1.3rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Promise;
