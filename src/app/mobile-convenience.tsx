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
    <section className='py-20 px-8'>
      <Section>
        <m.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-6'
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}>
          <Image
            width={256}
            height={256}
            src='/images/snowboard.webp'
            className='col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg hidden lg:block'
            alt='Snowboard'
          />
          <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
            <Typography
              type='h5'
              className='mb-4'>
              Extend the life of your snow gear
            </Typography>
            <Typography
              type='small'
              className='mb-5 text-left text-lg !text-gray-500 px-0  '>
              Let's face it, gear is not cheap - why not make it last longer?
              Regularly waxing and maintaining your snow equipment will help you
              protect your investments.
            </Typography>

            <div className='col-span-2 lg:grid gap-5 grid-cols-2 hidden'>
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
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-6'
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}>
          <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
            <Typography
              type='h5'
              className='mb-4'>
              Elevate your riding experience
            </Typography>
            <Typography
              type='small'
              className='mb-5 text-left  text-lg !text-gray-500 px-0  '>
              Avoid catching an edge! Get a smoother glide! Gain greater control
              of your snowboard, adapt to a variety of terrains, and have an
              overall better time! A well waxed snowboard will boost your
              confidence on the slopes.
            </Typography>

            <div className='col-span-2 lg:grid gap-5 grid-cols-2 hidden'>
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
            src='/images/downhill.webp'
            className='col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg hidden lg:block'
            alt='Downhill'
          />
        </m.div>

        <m.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-6'
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}>
          <Image
            width={256}
            height={256}
            src='/images/family.webp'
            className='col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-lg hidden lg:block'
            alt='Family'
          />
          <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
            <Typography
              type='h5'
              className='mb-4'>
              Enjoy the process, it's easy!
            </Typography>
            <Typography
              type='small'
              className='mb-5 text-left  text-lg !text-gray-500 px-0  '>
              Waximo makes the waxing process easy. Abandon the multi-tool,
              overly complicated, strenuous process of manually waxing your gear
              and let Waximo do the job from start to finish!
            </Typography>

            <div className='col-span-2 lg:grid gap-5 grid-cols-2 hidden'>
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
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          className='grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-6xl mx-auto items-center mt-12'>
          <div className='col-span-1 mx-auto max-w-lg px-4 lg:px-0'>
            <Typography
              type='h5'
              className='mb-4'>
              Gift to a Snowboarding enthusiast!
            </Typography>
            <Typography
              type='small'
              className='mb-5 text-left  text-lg !text-gray-500 px-0  '>
              Waximo makes the perfect gift. Without the need to think about the
              recipient's size, preferences, and other gifting factors. Waximo
              is a tool that can be used by snowboarders at all levels and is
              easy to use! Withouth the hassle and eliminating expenses and time
              of other waxing alternatives.
            </Typography>

            <div className='col-span-2 lg:grid gap-5 grid-cols-2 hidden'>
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
