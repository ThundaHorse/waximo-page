'use client';

import React from 'react';
import Image from 'next/image';
import InfoCard from '@/components/info-card';
import { Typography } from '@material-tailwind/react';
import Section from '@/components/animated-section';
import { m } from 'framer-motion';
import { OPTIONS, OPTIONS2, OPTIONS3, OPTIONS4 } from '@/utils/constants';

export function MobileConvenience() {
  return (
    <section
      id='feature-section'
      className='py-20 px-8'>
      <Section>
        <m.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-32 bg-opacity-75 p-12 rounded-lg'
          style={{ background: '#2c2c2c', color: 'white' }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}>
          <Image
            width={256}
            height={256}
            src='/images/Slide1.png'
            className='col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg lg:block'
            alt='Snowboard'
          />
          <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
            <Typography
              type='h5'
              className='mb-4'
              style={{ color: '#d7ffc2' }}>
              Extend the life of your snow gear
            </Typography>
            <Typography
              type='small'
              className='mb-5 text-left text-lg  px-0  '>
              Let's face it, gear is not cheap - why not make it last longer?
              Regularly waxing and maintaining your snow equipment will help you
              protect your investments.
            </Typography>

            <div className='col-span-2 flex flex-col'>
              {OPTIONS.map(({ title, description }) => (
                <InfoCard
                  key={title}
                  title={title}>
                  {description}
                </InfoCard>
              ))}
            </div>
          </div>
        </m.div>

        <m.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-24 bg-gray-300 bg-opacity-75 p-12 rounded-lg'
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          style={{ background: 'black', color: 'white' }}>
          <Image
            width={256}
            height={256}
            src='/images/Slide2.png'
            className='col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg lg:block'
            alt='Downhill'
          />
          <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
            <Typography
              type='h5'
              className='mb-4'
              style={{ color: '#d7ffc2' }}>
              Elevate your riding experience
            </Typography>
            <Typography
              type='small'
              className='mb-5 text-left  text-lg  px-0  '>
              Avoid catching an edge and get a smoother glide! Gain greater
              control of your snowboard, adapt to a variety of terrains, and
              have an overall better time! A well waxed snowboard will boost
              your confidence on the slopes.
            </Typography>

            <div className='col-span-2 flex flex-col'>
              {OPTIONS2.map(({ title, description }) => (
                <InfoCard
                  key={title}
                  title={title}>
                  {description}
                </InfoCard>
              ))}
            </div>
          </div>
        </m.div>

        <m.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-32 bg-gray-300 bg-opacity-75 p-12 rounded-lg'
          style={{ background: '#2c2c2c', color: 'white' }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}>
          <Image
            width={256}
            height={256}
            src='/images/Slide3.png'
            className='col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg lg:block'
            alt='Family'
          />
          <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
            <Typography
              type='h5'
              className='mb-4'
              style={{ color: '#d7ffc2' }}>
              Enjoy the process, it's easy!
            </Typography>
            <Typography
              type='small'
              className='mb-5 text-left text-lg  px-0'>
              WAXIMO makes the waxing process easy. Abandon the multi-tool,
              overcomplicated, strenuous process of manually waxing your gear
              and let WAXIMO do the job from start to finish.
            </Typography>

            <div className='col-span-2 flex flex-col'>
              {OPTIONS3.map(({ title, description }) => (
                <InfoCard
                  key={title}
                  title={title}>
                  {description}
                </InfoCard>
              ))}
            </div>
          </div>
        </m.div>

        <m.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-24 bg-gray-300 bg-opacity-75 p-12 rounded-lg'
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          style={{ background: 'black', color: 'white' }}>
          <Image
            width={256}
            height={256}
            src='/images/Slide4-1.png'
            className='col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg lg:block'
            alt='Family'
          />
          <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
            <Typography
              type='h5'
              style={{ color: '#d7ffc2' }}
              className='mb-4'>
              Gift to a Snowboarding enthusiast!
            </Typography>
            <Typography
              type='small'
              className='mb-12 text-center text-lg px-0'>
              WAXIMO makes the perfect gift, without the need to think about the
              recipient’s size, preferences, and other gifting factors. WAXIMO
              is a tool that can be used by snowboarders at all levels and is
              easy to use, without the hassle and expenses of other waxing
              alternatives.
            </Typography>

            <div className='col-span-2 flex flex-col'>
              {OPTIONS4.map(({ title, description }) => (
                <InfoCard
                  key={title}
                  title={title}>
                  {description}
                </InfoCard>
              ))}
            </div>
          </div>
        </m.div>
      </Section>
    </section>
  );
}
export default MobileConvenience;
