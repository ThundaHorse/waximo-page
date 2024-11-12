'use client';

import {
  Typography,
  IconButton,
  Button,
  Dialog,
} from '@material-tailwind/react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { renderPrivacyPolicy, renderTermsAndConditions } from '@/utils/helpers';
import { FOOTER_SOCIALS } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className='mt-10 bg-gray-900 px-8 pt-12'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center gap-8 md:justify-between'>
          <div className='text-center md:text-left'>
            <Typography
              type='h5'
              className='mb-4 text-white'>
              Waximo
            </Typography>
            <Typography className='mb-12 font-normal text-white'>
              Coming Soon!
            </Typography>
            <ul className='flex flex-wrap items-center justify-center md:justify-start'>
              <m.li
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}>
                <Dialog>
                  <Dialog.Trigger
                    as={Button}
                    variant='ghost'
                    className='text-white lg:pl-0 pl-4'>
                    Privacy Policy
                  </Dialog.Trigger>
                  <Dialog.Overlay>
                    <Dialog.Content>
                      <div className='mb-4 flex items-center justify-between gap-4'>
                        <Typography type='h6'>Privacy Policy</Typography>
                        <Dialog.DismissTrigger
                          as={IconButton}
                          size='sm'
                          variant='ghost'
                          color='secondary'
                          isCircular
                          className='absolute right-2 top-2'>
                          <i className='fa-solid fa-x h-5 w-5'></i>
                        </Dialog.DismissTrigger>
                      </div>

                      <div className='overflow-y-auto'>
                        {renderPrivacyPolicy()}
                      </div>

                      <div className='mt-12 flex w-full items-center justify-end gap-2'>
                        <Dialog.DismissTrigger
                          as={Button}
                          color='error'>
                          Cancel
                        </Dialog.DismissTrigger>
                      </div>
                    </Dialog.Content>
                  </Dialog.Overlay>
                </Dialog>
              </m.li>

              <m.li
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}>
                <Dialog>
                  <Dialog.Trigger
                    as={Button}
                    variant='ghost'
                    className='text-white lg:pl-0 pl-4'>
                    Terms & Conditions
                  </Dialog.Trigger>
                  <Dialog.Overlay>
                    <Dialog.Content>
                      <div className='mb-4 flex items-center justify-between gap-4'>
                        <Typography type='h6'>Terms & Conditions</Typography>
                        <Dialog.DismissTrigger
                          as={IconButton}
                          size='sm'
                          variant='ghost'
                          color='secondary'
                          isCircular
                          className='absolute right-2 top-2'>
                          <i className='fa-solid fa-x h-5 w-5'></i>
                        </Dialog.DismissTrigger>
                      </div>

                      <div className='overflow-y-auto'>
                        {renderTermsAndConditions()}
                      </div>

                      <div className='mt-12 flex w-full items-center justify-end gap-2'>
                        <Dialog.DismissTrigger
                          as={Button}
                          color='error'>
                          Cancel
                        </Dialog.DismissTrigger>
                      </div>
                    </Dialog.Content>
                  </Dialog.Overlay>
                </Dialog>
              </m.li>
            </ul>
          </div>
          <div className='mt-8 w-full md:mt-0 md:w-auto'>
            <Typography
              variant='h6'
              className='mb-3 text-center text-white'>
              Follow Us
            </Typography>
            <div className='flex flex-col gap-2'>
              <div className='gap-2 lg:flex lg:items-center text-center'>
                {FOOTER_SOCIALS.map((obj, idx) => (
                  <Link
                    key={idx}
                    href={obj.url}
                    target='_blank'>
                    <IconButton
                      variant='ghost'
                      size='lg'>
                      <i className={obj.icon}></i>
                    </IconButton>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between'></div>
      </div>
    </footer>
  );
};

export default Footer;
