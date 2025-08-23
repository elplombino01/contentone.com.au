import dynamic from 'next/dynamic';

// Statically import non-interactive or low-risk components
import PerfectMatch from "./_components/sections/PerfectMatch";
import Services from "./_components/sections/Services";
import AboutMe from "./_components/sections/AboutMe";
import ContactForm from "./_components/sections/ContactForm";

// Dynamically import all high-risk, interactive components
const HeroSection = dynamic(() => import('./_components/sections/HeroSection'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} />,
});

const TrustedBy = dynamic(() => import('./_components/sections/TrustedBy'), {
  ssr: false,
  loading: () => (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p className="text-acier-doux">Loading testimonials...</p>
    </div>
  ),
});

const CaseStudies = dynamic(() => import('./_components/sections/CaseStudies'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }} />,
});

export default function Home() {
  return (
    <main className="min-h-screen-dvh bg-onyx-profond">
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