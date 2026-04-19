import Hero from "@/components/Hero";
import HeroBottom from "@/components/HeroBottom";
import JoinUs from "@/components/JoinUs";
import Products from "@/components/Products";
import Promise from "@/components/Promise";
import Testimonials from "@/components/Testimonials";
import TradeWithPurpose from "@/components/TradeWithPurpose";
import WhoWeAre from "@/components/WhoWeAre";
import { Box } from "@mui/material";

import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flexGrow: 1 }}>
        <ScrollReveal variant="fade" duration={1.2}>
          <Hero />
        </ScrollReveal>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <ScrollReveal variant="fadeUp" distance={20} delay={0.2}>
            <HeroBottom />
          </ScrollReveal>
        </Box>

        <ScrollReveal variant="fadeUp">
          <WhoWeAre />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp">
          <Products />
        </ScrollReveal>

        <ScrollReveal variant="fade" duration={1}>
          <TradeWithPurpose />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp">
          <Promise />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp">
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" distance={30}>
          <JoinUs />
        </ScrollReveal>
      </main>
    </Box>
  );
}
