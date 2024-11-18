'use client';

import React from 'react';

import FeatureCard from '../components/feature-card';
import { m } from 'framer-motion';
import { FEATURES } from '@/utils/constants';

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
        className='container mx-auto hidden lg:grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3'>
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
