'use client';

import { Button, Typography, Alert } from '@material-tailwind/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { m } from 'framer-motion';
import axios from 'axios';
import { EmailInputField, FormInputs, formSchema } from '@/components';
import ReferralComponent from '@/components/refer-card';

const Hero = () => {
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

  useEffect(() => {
    if (signUpSuccessful) {
      setTimeout(() => {
        setSignUpSuccessful(false);
      }, 5000);
    }
  });

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);
    setShowReferral(false);
    const url =
      'https://script.google.com/macros/s/AKfycbwxXrkSXI9VNv8z_oU4jQhvqroAK5xt7KSD0zT2yFsfiwm1uwlorLhxLNKDBmWg4v0D/exec';

    const buildForm = async () => {
      let ready = false;
      await axios
        .get('https://api.ipify.org?format=json')
        .then((res) => {
          setIpAddress(res.data.ip);
          ready = true;
        })
        .catch((e) => {
          console.log(e);
          ready = false;
        });

      return ready;
    };

    if (await buildForm()) {
      const body = {
        Date: new Date().toLocaleDateString(),
        Email: data.email,
        Name: '',
        IPAddress: ipAddress,
      };

      await axios
        .post(url, body, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then((res) => {
          setSignUpSuccessful(true);
          setIsLoading(false);
          setShowReferral(true);

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
    <>
      <div className='hero-section !flex h-[90vh] w-full items-center justify-between px-10'>
        <div hidden={!signUpSuccessful}>
          <Alert
            color='success'
            className='absolute top-8 lg:w-[95vw] w-fit'>
            <Alert.Content>Sign up Successful!</Alert.Content>
            <Alert.DismissTrigger />
          </Alert>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          className='container mx-auto lg:mt-0 '>
          <div className='grid grid-cols-12'>
            <div className='col-span-full rounded-xl bg-white bg-opacity-75 py-10 px-6 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7'>
              <Typography
                type='h4'
                className='mb-4 text-center'>
                Need a better way to wax your snow gear?
              </Typography>
              <Typography
                type='h5'
                className='mb-8 text-center'>
                Coming Soon! Learn more about WAXIMO!
              </Typography>

              {!showReferral ? (
                <div className='w-full flex justify-center'>
                  <div className='flex w-full max-w-sm items-center gap-2'>
                    <form
                      className='flex w-full flex-col lg:flex-row max-w-sm items-center justify-center gap-2'
                      onSubmit={handleSubmit(onSubmit)}>
                      <EmailInputField
                        className='emailInput bg-white'
                        type='email'
                        label='Sign up now for Exclusive Updates!'
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
              ) : (
                <div className='w-full flex justify-center'>
                  <div className='flex w-full max-w-sm items-center gap-2'>
                    <ReferralComponent referrer={getValues('email')} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </m.div>
      </div>

      <div className='mx-8 lg:mx-16 lg:-mt-24 -mt-1 rounded-xl bg-white p-5 md:p-14 shadow-md'>
        <div>
          <Typography
            variant='paragraph'
            className='font-normal !text-gray-500 text-center'>
            <b>WAXIMO</b> is an innovative, cost-effective, time-saving,
            all-in-one tool that simplifies the waxing process for you to spend
            less time maintaining your snowboard or ski equipment and more time
            on the slopes.ramming and language learning to personal development
            and beyond
          </Typography>
        </div>
      </div>
    </>
  );
};
export default Hero;
