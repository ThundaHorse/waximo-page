'use client';

import React from 'react';

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
    </section>
  );
}
export default Features;
