"use client";

import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Faith-Based Solutions For Everyday People",
    description:
      "Tailored, interest-free purchase programs grounded in Islamic principles — helping you grow with dignity and full transparency. All our offerings are reviewed and approved by an independent Sharia Supervisory Board (SSB).",
    icon: <SearchIcon />,
    href: "#faith-based",
    variant: "light" as const,
  },
  {
    title: "Cost-Plus-Profit (CPP)",
    description:
      "Buy what you need today — with full transparency and no interest. A Sharia-compliant plan where we buy the goods you need and sell them to you at a pre-agreed profit, repayable in easy installments. Applicable for Personal (Household items) or Business (Equipment or Merchandise).",
    icon: <AssignmentIcon />,
    href: "#cpp",
    variant: "dark" as const,
  },
  {
    title: "Thrive Together Partnership (TTP)",
    description:
      "You bring the skills. We bring the resources. We grow together. A trust-based partnership built on Islamic values. TND Kapital provides the goods or materials your venture needs, and you manage the business. We grow and share in the profit — no pressure.",
    icon: <PersonIcon />,
    href: "#ttp",
    variant: "light" as const,
  },
  {
    title: "Group Empowerment Program (GEP)",
    description:
      "Strong alone. Stronger together. A halal asset access model designed specifically for groups or co-ops. Members support each other's success through trust, shared responsibility, and collective repayment.",
    icon: <PublicIcon />,
    href: "#gep",
    variant: "dark" as const,
  },
];

const Products = () => {
  return (
    <Box
      id="products"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#f8f9fa",
        // maxWidth: "1500px",
        width: "100%",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: { md: 4 }, // Add slight rounding for a container feel
      }}
    >
      {/* Isometric Cube Background Pattern (Corners) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 400,
          height: 400,
          opacity: 0.08,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%230D244D' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.91v12.68l11 6.35 11-6.35V17.91L14 11.56l-11 6.35z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 400,
          height: 400,
          opacity: 0.08,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%230D244D' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.91v12.68l11 6.35 11-6.35V17.91L14 11.56l-11 6.35z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="xl"  sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: 8, maxWidth: 900, mx: "auto" }}>
          <ScrollReveal variant="fadeUp" duration={0.6}>
            <Typography
              variant="h2"
              sx={{
                color: "#0D244D",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.2,
              }}
            >
              Empowering Your Future with Ethical, Faith-Based Solutions
            </Typography>
          </ScrollReveal>
        </Box>

        <ScrollReveal staggerChildren={0.1}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ height: '100%' }}
                >
                  <ProductCard {...product} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </ScrollReveal>
      </Container>
    </Box>
  );
};

export default Products;
