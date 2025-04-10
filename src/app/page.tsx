import HeroSection from '@/components/HeroSection';
import MenuHighlights from '@/components/MenuHighlights';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MenuHighlights />
      <AboutSection />
      <LocationSection />
    </main>
  );
}