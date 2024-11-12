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
    <section className='lg:py-20 py-2 px-4'>
      <div className='container mx-auto hidden lg:grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-3'>
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
