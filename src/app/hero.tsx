'use client';

import {
  Button,
  Typography,
  Input,
  InputProps,
  Alert,
} from '@material-tailwind/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { m } from 'framer-motion';
import axios from 'axios';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email.' }),
});

type FormInputs = z.infer<typeof formSchema>;

type TextFieldProps = InputProps & {
  label: string;
  error?: string;
  icon: React.ElementType;
};

// @ts-ignore
const TextField = React.forwardRef<typeof Input.Field, TextFieldProps>(
  ({ label, error, icon: Icon, ...props }, ref) => {
    const id = React.useId();

    return (
      <label
        htmlFor={id}
        color='default'
        className='mb-6 block space-y-1.5'>
        <span className='text-sm font-semibold'>{label}</span>
        <Input
          isError={Boolean(error)}
          ref={ref}
          {...props}
          id={id}
          color={error ? 'error' : 'primary'}>
          <Input.Icon>
            <Icon className='h-full w-full place-content-end' />
          </Input.Icon>
        </Input>
        {error && (
          <Typography
            type='small'
            color='error'>
            {error}
          </Typography>
        )}
      </label>
    );
  }
);

const Hero = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [signUpSuccessful, setSignUpSuccessful] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    axios
      .get('https://api.ipify.org?format=json')
      .then((res) => {
        setIpAddress(res.data.ip);
      })
      .catch((e) => {
        console.log(e);
      });

    if (signUpSuccessful) {
      setTimeout(() => {
        setSignUpSuccessful(false);
      }, 5000);
    }
  });

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);
    // setSignUpSuccessful(false);

    const url =
      'https://script.google.com/macros/s/AKfycbwxXrkSXI9VNv8z_oU4jQhvqroAK5xt7KSD0zT2yFsfiwm1uwlorLhxLNKDBmWg4v0D/exec';

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
      .then((e) => {
        console.log(e);
        const inputElement = document.getElementsByClassName(
          'emailInput'
        )[0] as HTMLInputElement;
        inputElement.value = '';
        setSignUpSuccessful(true);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
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
            <div className='col-span-full rounded-xl bg-gray-300 py-10 px-6 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7'>
              <Typography
                type='h3'
                className='mb-4'>
                Need a better way to wax your snow gear?
              </Typography>

              <Typography
                type='h6'
                className='mb-8'>
                Coming Soon! Learn more about WAXIMO
              </Typography>
              <div className='flex w-full max-w-sm items-center gap-2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    className='emailInput'
                    type='email'
                    label='Sign up now for Exclusive Updates!'
                    error={emailError}
                    icon={EnvelopeIcon}
                    placeholder='example@example.com'
                    required
                    {...register('email')}
                  />

                  {emailError}

                  <Button
                    size='md'
                    className='xl:mt-1 lg:mt-1 md:mt-1 mt-7'
                    type='submit'
                    disabled={isLoading}>
                    Submit!
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </m.div>
      </div>

      <div className='mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md'>
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
