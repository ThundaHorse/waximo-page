// components
import Footer from '@/components/footer';

// sections
import Hero from './hero';
import Feature from './feature';
import MobileConvenience from './mobile-convenience';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Typography } from '@material-tailwind/react';

export default function Campaign() {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Hero />
        <Feature />
        <MobileConvenience />
        <div className='mx-8 lg:mx-16 lg:mt-24 mt-12 rounded-xl p-5 md:p-14 shadow-md bg-gray-300 bg-opacity-75'>
          <div>
            <Typography
              type='h4'
              className='font-normal !text-gray-500 text-center'>
              About us
            </Typography>

            <br />
            <Typography
              type='lead'
              className='font-normal !text-gray-500 text-center'>
              We are a family owned business with veteran and women founders.
              WAXIMO was birthed from our desire to improve our experience on
              the slopes and our DIY attitude.
            </Typography>

            <br />

            <Typography
              type='lead'
              className='font-normal !text-gray-500 text-center'>
              Our mission is to enable snow sport enthusiasts to spend more time
              on the slopes and less time maintaining equipment. We aspire to
              create a more sustainable ecosystem, and bring together the snow
              sport community
            </Typography>
          </div>
        </div>
        <Footer />
      </LazyMotion>
    </>
  );
}
