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
import EmailInputField, { FormInputs, formSchema } from './email-input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import ContactForm from './contact-form';

const Footer = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [signUpSuccessful, setSignUpSuccessful] = useState(false);
  const [showReferral, setShowReferral] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);
    setShowReferral(false);
    const url =
      'https://script.google.com/macros/s/AKfycbwxXrkSXI9VNv8z_oU4jQhvqroAK5xt7KSD0zT2yFsfiwm1uwlorLhxLNKDBmWg4v0D/exec';

    const body = {
      Date: new Date().toLocaleDateString(),
      Email: data.email,
      IPAddress: ipAddress,
      Contacted: false,
    };

    const fetchIp = async () => {
      await axios
        .get('https://api.ipify.org?format=json')
        .then((res) => {
          setIpAddress(res.data.ip);
          body.IPAddress = res.data.ip;
        })
        .catch((e) => {
          console.log(e);
          return false;
        });

      return true;
    };

    if (await fetchIp()) {
      await axios
        .post(url, body, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then((res) => {
          setSignUpSuccessful(true);
          setIsLoading(false);
          setShowReferral(true);

          console.log(res.data);

          const inputElement = document.getElementsByClassName(
            'emailInput'
          )[0] as HTMLInputElement;
          inputElement.value = '';
        })
        .catch((e) => {
          console.log(e);
          setShowReferral(false);
        });
    }
  };

  const emailError = errors.email?.message;

  return (
    <section id='footer-section'>
      <footer className='bg-gray-900 px-8 pt-12'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center gap-8'>
            <div className='mt-8 flex flex-col items-center text-center md:text-left'>
              <Image
                width={100}
                height={50}
                src='/images/waximologo2.png'
                className='mb-4'
                alt='Logo'
              />

              <Typography className='mb-12 font-normal text-white'>
                The all-in-one waxing tool for snow gear
              </Typography>
            </div>

            <div className='mt-8 md:mx-auto'>
              <Typography
                variant='h6'
                className='mb-3 text-center text-white'>
                Follow Us
              </Typography>
              <div className='flex flex-col gap-2'>
                <div className='gap-2 lg:flex lg:justify-center text-center'>
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

            <div className='mt-8 w-full md:mt-0 md:w-auto'>
              <div className='w-full flex justify-end'>
                <div className='mt-8 flex flex-col w-full max-w-sm gap-2 items-center'>
                  <span className='text-center text-white mb-4 text-sm font-semibold'>
                    Sign up now for Exclusive Updates!
                  </span>
                  <form
                    className='flex w-full flex-col lg:flex-row max-w-sm items-center justify-center gap-2 text-white'
                    onSubmit={handleSubmit(onSubmit)}>
                    <EmailInputField
                      className='emailInput bg-white'
                      type='email'
                      error={emailError}
                      icon={EnvelopeIcon}
                      placeholder='example@example.com'
                      disabled={isLoading}
                      required
                      {...register('email')}
                    />

                    <Button
                      size='md'
                      type='submit'
                      color='success'
                      disabled={isLoading}>
                      Sign Up
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between'>
            <Typography className='text-white text-center'>
              Copyright © 2024 WAXIMO LLC. All rights reserved.
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

              <m.li
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}>
                <Dialog>
                  <Dialog.Trigger
                    as={Button}
                    variant='ghost'
                    className='text-white lg:pl-0 pl-4'>
                    Contact
                  </Dialog.Trigger>
                  <Dialog.Overlay>
                    <Dialog.Content>
                      <div className='mb-4 flex items-center justify-between gap-4'>
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

                      <ContactForm />

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
        </div>
      </footer>
    </section>
  );
};

export default Footer;
