'use client';

import React from 'react';
import Image from 'next/image';
import InfoCard from '@/components/info-card';
import { Typography, Card, CardBody } from '@material-tailwind/react';

const OPTIONS = [
  {
    title: 'Innovative Technology',
    description: '',
  },
  {
    title: 'Optimized for Snowboards',
    description: '(Ski variant coming soon!)',
  },
  {
    title: 'Refillable Wax',
    description: '',
  },
];

const OPTIONS2 = [
  {
    title: 'Smooth, even distribuition',
    description: '',
  },
  {
    title: 'Sustainable wax options',
    description: '',
  },
  {
    title: 'Fast Application',
    description: '',
  },
];

const OPTIONS3 = [
  {
    title: 'Simple, single tool',
    description: '',
  },
  {
    title: 'No Scraping',
    description: '',
  },
  {
    title: 'Single-handed operation',
    description: '',
  },
  {
    title: 'One-swipe application',
    description: '',
  },
];

const OPTIONS4 = [
  {
    title: 'Modern Design',
    description: '',
  },
  {
    title: 'Highly portable profile',
    description: '',
  },
  {
    title: 'Convenient ease of use',
    description: '',
  },
];

export function MobileConvenience() {
  return (
    <section className='py-20 px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center'>
        <Image
          width={256}
          height={256}
          src='/image/iphone.png'
          className='col-span-1 w-1/2 mx-auto lg:w-10/12'
          alt='iphone-photo'
        />
        <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
          <Typography
            variant='h2'
            color='blue-gray'
            className='mb-4'>
            Extend the life of your snow gear
          </Typography>
          <Typography
            variant='lead'
            className='mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  '>
            Let's face it, gear is not cheap - why not make it last longer?
            Regularly waxing and maintaining your snow equipment will help you
            protect your investments.
          </Typography>

          <div className='col-span-2 grid gap-5 grid-cols-2 '>
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

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center'>
        <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
          <Typography
            variant='h2'
            color='blue-gray'
            className='mb-4'>
            Elevate your riding experience
          </Typography>
          <Typography
            variant='lead'
            className='mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  '>
            Avoid catching an edge! Get a smoother glide! Gain greater control
            of your snowboard, adapt to a variety of terrains, and have an
            overall better time! A well waxed snowboard will boost your
            confidence on the slopes.
          </Typography>

          <div className='col-span-2 grid gap-5 grid-cols-2 '>
            {OPTIONS2.map(({ title, description }) => (
              <InfoCard
                key={title}
                title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
        <Image
          width={256}
          height={256}
          src='/image/iphone.png'
          className='col-span-1 w-1/2 mx-auto lg:w-10/12'
          alt='iphone-photo'
        />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center'>
        <Image
          width={256}
          height={256}
          src='/image/iphone.png'
          className='col-span-1 w-1/2 mx-auto lg:w-10/12'
          alt='iphone-photo'
        />
        <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
          <Typography
            variant='h2'
            color='blue-gray'
            className='mb-4'>
            Enjoy the process, it's easy!
          </Typography>
          <Typography
            variant='lead'
            className='mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  '>
            Waximo makes the waxing process easy. Abandon the multi-tool, overly
            complicated, strenuous process of manually waxing your gear and let
            Waximo do the job from start to finish!
          </Typography>

          <div className='col-span-2 grid gap-5 grid-cols-2 '>
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

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center'>
        <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
          <Typography
            variant='h2'
            color='blue-gray'
            className='mb-4'>
            Gift to a Snowboarding enthusiast!
          </Typography>
          <Typography
            variant='lead'
            className='mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  '>
            Waximo makes the perfect gift. Without the need to think about the
            recipient's size, preferences, and other gifting factors. Waximo is
            a tool that can be used by snowboarders at all levels and is easy to
            use! Withouth the hassle and eliminating expenses and time of other
            waxing alternatives.
          </Typography>

          <div className='col-span-2 grid gap-5 grid-cols-2 '>
            {OPTIONS4.map(({ title, description }) => (
              <InfoCard
                key={title}
                title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
        <Image
          width={256}
          height={256}
          src='/image/iphone.png'
          className='col-span-1 w-1/2 mx-auto lg:w-10/12'
          alt='iphone-photo'
        />
      </div>
    </section>
  );
}
export default MobileConvenience;