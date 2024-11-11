'use client';

import React from 'react';

import FeatureCard from '../components/feature-card';
import {
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  GlobeAmericasIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const FEATURES = [
  {
    icon: ClockIcon,
    title: 'Quick',
    children: '',
  },
  {
    icon: TrashIcon,
    title: 'Less Tedious, Less Strenuous',
    children: '',
  },
  {
    icon: CheckCircleIcon,
    title: 'Beginner Friendly',
    children: '',
  },
  {
    icon: BriefcaseIcon,
    title: 'Travel efficient',
    children: '',
  },
  {
    icon: GlobeAmericasIcon,
    title: 'Environmentally Conscious',
    children: '',
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Safer',
    children: '',
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
