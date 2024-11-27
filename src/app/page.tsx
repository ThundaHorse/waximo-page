// components
import Footer from '@/components/footer';

// sections
import Hero from './hero';
import Feature from './feature';
import MobileConvenience from './mobile-convenience';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Typography } from '@material-tailwind/react';
import { FaqSection } from './fact-section';
import { AboutUs } from './about';

export default function Campaign() {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Hero />
        <Feature />
        <MobileConvenience />
        <FaqSection />
        <AboutUs />
        <Footer />
      </LazyMotion>
    </>
  );
}
