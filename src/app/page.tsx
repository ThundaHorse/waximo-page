// components
import { Navbar, Footer, ContactUsForm } from '@/components';

// sections
import Hero from './hero';
import VideoIntro from './video-intro';
import Feature from './feature';
import MobileConvenience from './mobile-convenience';
import Testimonials from './testimonials';
import Faqs from './faqs';

export default function Campaign() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {/* <VideoIntro /> */}
      <Feature />
      <MobileConvenience />
      {/* <Testimonials /> */}
      {/* <Faqs /> */}
      <ContactUsForm />
      <Footer />
    </>
  );
}