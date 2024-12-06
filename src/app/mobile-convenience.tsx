'use client';

import React from 'react';
import Image from 'next/image';
import InfoCard from '@/components/info-card';
import { Typography } from '@material-tailwind/react';
import Section from '@/components/animated-section';
import { OPTIONS, OPTIONS2, OPTIONS3, OPTIONS4 } from '@/utils/constants';

export function MobileConvenience() {
  return (
    <section
      id='feature-section'
      className='py-20 pb-0'>
      <Section>
        <div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 sm:mt-10 mx-auto items-center bg-opacity-75 p-0 lg:p-12'
          style={{ background: 'black', color: 'white' }}>
          <Image
            width={256}
            height={256}
            src='/images/Slide1.png'
            className='col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg lg:block p-0 lg:p-20 md:p-16 mt-6'
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

            <div className='col-span-2 flex flex-col mb-6'>
              {OPTIONS.map(({ title, description }) => (
                <InfoCard
                  key={title}
                  title={title}>
                  {description}
                </InfoCard>
              ))}
            </div>
          </div>
        </div>

        <div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto items-center bg-gray-300 bg-opacity-75 p-0 lg:p-12'
          style={{ background: '#2c2c2c', color: 'white' }}>
          <Image
            width={256}
            height={256}
            src='/images/Slide2.png'
            className='col-span-1 w-1/2 mt-6 mb-6 mx-auto lg:w-10/12 rounded-lg p-0 lg:p-20 md:p-16 lg:block'
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

            <div className='col-span-2 flex flex-col mb-6'>
              {OPTIONS2.map(({ title, description }) => (
                <InfoCard
                  key={title}
                  title={title}>
                  {description}
                </InfoCard>
              ))}
            </div>
          </div>
        </div>

        <div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto items-center bg-gray-300 bg-opacity-75 p-0 lg:p-12'
          style={{ background: 'black', color: 'white' }}>
          <Image
            width={256}
            height={256}
            src='/images/Slide3.png'
            className='col-span-1 w-1/2  mt-6 mb-6 mx-auto lg:w-10/12 rounded-lg p-0 lg:p-20 md:p-16 lg:block'
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

            <div className='col-span-2 flex flex-col mb-6'>
              {OPTIONS3.map(({ title, description }) => (
                <InfoCard
                  key={title}
                  title={title}>
                  {description}
                </InfoCard>
              ))}
            </div>
          </div>
        </div>

        <div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto items-center bg-gray-300 bg-opacity-75 p-0 lg:p-12'
          style={{ background: '#2c2c2c', color: 'white' }}>
          <Image
            width={256}
            height={256}
            src='/images/Slide4-1.png'
            className='col-span-1 w-1/2 mt-6 mb-6 mx-auto lg:w-10/12 rounded-lg p-0 lg:p-20 md:p-16 lg:block'
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
              className='mb-12 text-left text-lg px-0'>
              WAXIMO makes the perfect gift, without the need to think about the
              recipient’s size, preferences, and other gifting factors. WAXIMO
              is a tool that can be used by snowboarders at all levels and is
              easy to use, without the hassle and expenses of other waxing
              alternatives.
            </Typography>

            <div className='col-span-2 flex flex-col mb-6'>
              {OPTIONS4.map(({ title, description }) => (
                <InfoCard
                  key={title}
                  title={title}>
                  {description}
                </InfoCard>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}
export default MobileConvenience;
