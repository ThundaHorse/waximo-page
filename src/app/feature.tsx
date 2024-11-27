'use client';

import React from 'react';

import FeatureCard from '../components/feature-card';
import { m } from 'framer-motion';
import { FEATURES } from '@/utils/constants';
import Image from 'next/image';

export function Features() {
  return (
    <section className='container flex mx-8 lg:mx-auto mt-12 align-middle justify-center'>
      <Image
        width={500}
        height={500}
        src='/images/waximo.png'
        className=''
        alt='waximo'
      />

      {/* {FEATURES.map((props, idx) => (
          <FeatureCard
            key={idx}
            {...props}
          />
        ))} */}
    </section>
  );
}
export default Features;
