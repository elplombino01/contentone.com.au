import HeroSection from "./_components/sections/HeroSection";
import TrustedBy from "./_components/sections/TrustedBy";
import PerfectMatch from "./_components/sections/PerfectMatch";
import Services from "./_components/sections/Services";
import AboutMe from "./_components/sections/AboutMe";
import CaseStudies from "./_components/sections/CaseStudies";
import ContactForm from "./_components/sections/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-onyx-profond">
      <HeroSection />
      <TrustedBy />
      <PerfectMatch />
      <Services />
      <AboutMe />
      <CaseStudies />
      <ContactForm />
    </main>
  );
}