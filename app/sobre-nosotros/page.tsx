import { AboutHero } from '@/components/sections/about/about-hero';
import { TeamSection } from '@/components/sections/about/team-section';
import { ValuesSection } from '@/components/sections/about/values-section';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <TeamSection />
    </>
  );
}