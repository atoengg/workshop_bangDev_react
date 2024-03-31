import Layout from "../../components/layout";
import AboutSection from "../../section/aboutSection/AboutSection";
import CallToActionSection from "../../section/callToActionSection/CallToActionSection";
import ContactSection from "../../section/contactSection/ContactSection";

import HeroSection from "../../section/heroSection/HeroSection";

const LandingPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <CallToActionSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default LandingPage;
