import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Values from '@/components/Values';
import Promise from '@/components/Promise';
import FAQs from '@/components/FAQs';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';

import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <ScrollReveal variant="fade">
          <Hero />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <Products />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <Values />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <Promise />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <FAQs />
        </ScrollReveal>
        <ScrollReveal variant="slideUp">
          <ContactUs />
        </ScrollReveal>
      </main>
      <Footer />
    </Box>
  );
}
