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
import { m } from 'framer-motion';

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
    <section className='lg:py-20 py-2 px-4'>
      <m.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, x: 100 }}
        transition={{
          ease: 'linear',
          duration: 0.5,
          x: { duration: 1 },
        }}
        className='container mx-auto hidden lg:grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-3'>
        {FEATURES.map((props, idx) => (
          <FeatureCard
            key={idx}
            {...props}
          />
        ))}
      </m.div>
    </section>
  );
}
export default Features;
