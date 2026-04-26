import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Concerns from '@/components/Concerns';
import Strengths from '@/components/Strengths';
import Steps from '@/components/Steps';
import Cases from '@/components/Cases';
import Voices from '@/components/Voices';
import Advisors from '@/components/Advisors';
import Fields from '@/components/Fields';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';

export default function Home() {
  return (
    <main className="relative bg-offwhite">
      <Hero />
      <Stats />
      <Concerns />
      <Strengths />
      <Steps />
      <Cases />
      <Voices />
      <Advisors />
      <Fields />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyCta />
    </main>
  );
}
