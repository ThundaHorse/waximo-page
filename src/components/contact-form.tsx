'use client';

import React from 'react';
import { Button, Input, Textarea, Typography } from '@material-tailwind/react';

export function ContactSection14() {
  return (
    <section className='px-8 py-8 lg:py-16'>
      <div className='container mx-auto text-center'>
        <Typography
          variant='h5'
          className='mb-4 !text-base lg:!text-2xl'>
          Customer Care
        </Typography>
        <Typography
          variant='h1'
          className='mb-4 !text-3xl lg:!text-5xl'>
          We&apos;re Here to Help
        </Typography>
        <Typography className='mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500'>
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className='flex justify-center'>
          <form
            action='#'
            className='flex flex-col gap-4 lg:max-w-sm'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Typography
                  variant='small'
                  className='mb-2 text-left font-medium !text-gray-900'>
                  First Name
                </Typography>
                <Input
                  size='lg'
                  placeholder='First Name'
                  name='first-name'
                  className='focus:border-t-gray-900'
                />
              </div>
              <div>
                <Typography
                  variant='small'
                  className='mb-2 text-left font-medium !text-gray-900'>
                  Last Name
                </Typography>
                <Input
                  size='lg'
                  placeholder='Last Name'
                  name='last-name'
                  className='focus:border-t-gray-900'
                />
              </div>
            </div>
            <div>
              <Typography
                variant='small'
                className='mb-2 text-left font-medium !text-gray-900'>
                Your Email
              </Typography>
              <Input
                size='lg'
                placeholder='name@email.com'
                name='email'
                className='focus:border-t-gray-900'
              />
            </div>
            <div>
              <Typography
                variant='small'
                className='mb-2 text-left font-medium !text-gray-900'>
                Your Message
              </Typography>
              <Textarea
                rows={6}
                placeholder='Message'
                name='message'
                className='focus:border-t-gray-900'
              />
            </div>
            <Button className='w-full'>Send message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection14;
