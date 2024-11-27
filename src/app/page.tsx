// components
import Footer from '@/components/footer';

// sections
import Hero from './hero';
import MobileConvenience from './mobile-convenience';
import { LazyMotion, domAnimation } from 'framer-motion';
import FaqSection from './fact-section';
import AboutUs from './about';

export default function Campaign() {
  return (
    <div style={{ background: '#2c2c2c' }}>
      <LazyMotion features={domAnimation}>
        <Hero />
        <MobileConvenience />
        <FaqSection />
        <AboutUs />
        <Footer />
      </LazyMotion>
    </div>
  );
}
