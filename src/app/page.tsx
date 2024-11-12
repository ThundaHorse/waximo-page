// components
import Footer from '@/components/footer';

// sections
import Hero from './hero';
import Feature from './feature';
import MobileConvenience from './mobile-convenience';
import { LazyMotion, domAnimation } from 'framer-motion';

export default function Campaign() {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Hero />
        <Feature />
        <MobileConvenience />
        <Footer />
      </LazyMotion>
    </>
  );
}
