import Layout from "../../components/layout";
import AboutSection from "../../section/aboutSection/AboutSection";
import CallToActionSection from "../../section/callToActionSection/CallToActionSection";
import ContactSection from "../../section/contactSection/ContactSection";

import HeroSection from "../../section/heroSection/HeroSection";
import ProductsSection from "../../section/productsSection/ProductsSection";

const LandingPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <CallToActionSection />
        <ProductsSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default LandingPage;
