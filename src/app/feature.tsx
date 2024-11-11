'use client';

import React from 'react';
import { Typography } from '@material-tailwind/react';

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from '@heroicons/react/24/solid';

import FeatureCard from '../components/feature-card';
import { ClockIcon, TrashIcon } from '@heroicons/react/24/outline';

const FEATURES = [
  {
    icon: ClockIcon,
    title: 'Expert Instructors',
    children: 'Quick',
  },
  {
    icon: TrashIcon,
    title: 'Interactive Learning',
    children: 'Less Tedious, Less Strenuous',
  },
  {
    icon: LockClosedIcon,
    title: 'Achievement Unlocked',
    children: 'Beginner Friendly',
  },
  {
    icon: LightBulbIcon,
    title: 'Personalized Progress Tracking',
    children: 'Travel efficient',
  },
  {
    icon: LockClosedIcon,
    title: 'Achievement Unlocked',
    children: 'Environmentally Conscious',
  },
  {
    icon: LightBulbIcon,
    title: 'Personalized Progress Tracking',
    children: 'Safer',
  },
];

export function Features() {
  return (
    <section className='py-28 px-4'>
      {/* <div className='container mx-auto mb-20 text-center'>
        <Typography
          color='blue-gray'
          className='mb-2 font-bold uppercase'>
          Your Learning App
        </Typography>
        <Typography
          variant='h1'
          color='blue-gray'
          className='mb-4'>
          Diverse Learning Resources
        </Typography>
        <Typography
          variant='lead'
          className='mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 '>
          Access your learning materials on the go. Whether you&apos;re
          commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
        </Typography>
      </div> */}
      <div className='container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-3'>
        {FEATURES.map((props, idx) => (
          <FeatureCard
            key={idx}
            {...props}
          />
        ))}
      </div>
    </section>
  );
}
export default Features;
