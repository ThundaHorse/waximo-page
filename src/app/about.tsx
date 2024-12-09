'use client';

import { Typography } from '@material-tailwind/react';

export const AboutUs = () => {
  return (
    <>
      <section id='about-us-section'>
        <div
          className='p-12 md:p-24 shadow-md bg-opacity-75'
          style={{ background: '#d7ffc2' }}>
          <div>
            <Typography
              type='h3'
              className='text-3xl !text-gray-500 text-center'>
              About us
            </Typography>

            <br />
            <Typography
              type='lead'
              className='font-normal !text-gray-500 text-center'>
              We are a family owned business with veteran and woman founders. 
              WAXIMO was birthed from our desire to improve our experience on 
              the slopes and our DIY attitude. Instead of having to invest a 
              significant amount of time, effort, and tools to wax our 
              snowboards, we created WAXIMO to do the job from start to finish. 
              We saw an opportunity to benefit other snowboarders and skiers who 
              would normally manually wax their equipment, or outsource the 
              service at a ski shop.
            </Typography>

            <br />

            <Typography
              type='lead'
              className='font-normal !text-gray-500 text-center'>
              Our mission is to enable snow sport enthusiasts to spend more time 
              on the slopes and less time maintaining equipment. We aspire to 
              create a more sustainable ecosystem and bring together the snow 
              sport community.
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
