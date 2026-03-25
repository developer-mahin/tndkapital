import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroBottom from "@/components/HeroBottom";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Promise from "@/components/Promise";
import TradeWithPurpose from "@/components/TradeWithPurpose";
import Testimonials from "@/components/Testimonials";
import JoinUs from "@/components/JoinUs";
import WhoWeAre from "@/components/WhoWeAre";
import { Box } from "@mui/material";

import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ScrollReveal variant="fade">
          <Hero />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <HeroBottom />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <WhoWeAre />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <Products />
        </ScrollReveal>
        <ScrollReveal variant="fade">
          <TradeWithPurpose />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <Promise />
        </ScrollReveal>
        <ScrollReveal variant="fade">
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <JoinUs />
        </ScrollReveal>
      </main>
      <Footer />
    </Box>
  );
}
