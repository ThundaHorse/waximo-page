'use client';

import { Alert, Button, Typography, Input } from '@material-tailwind/react';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get('https://api.ipify.org?format=json')
      .then((res) => {
        setIpAddress(res.data.ip);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const handleInput = ({ target }: ChangeEvent) => {
    const val = target as HTMLInputElement;
    setEmail(val.value);
  };

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const url =
      'https://script.google.com/macros/s/AKfycbwxXrkSXI9VNv8z_oU4jQhvqroAK5xt7KSD0zT2yFsfiwm1uwlorLhxLNKDBmWg4v0D/exec';

    const body = {
      Date: new Date().toLocaleDateString(),
      Email: email,
      Name: '',
      IPAddress: ipAddress,
    };

    await axios
      .post(url, body, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then((e) => {
        console.log(e);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='relative min-h-screen w-full'>
      <Alert>A simple alert for showing message.</Alert>
      <header className='grid !min-h-[49rem] bg-gray-900 px-8'>
        <div className='container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2'>
          {/* <Link href='/privacy-policy'>Privacy Policy</Link> */}
          {/* <Image
            width={470}
            height={576}
            src='/image/hero_image.webp'
            alt='Hero Image'
            className='col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0'
          /> */}

          <div className='col-span-1'>
            <Typography
              variant='h1'
              color='black'
              className='mb-4'>
              Need a better way to wax your snow gear?
            </Typography>
            <Typography
              variant='lead'
              className='mb-7 !text-black md:pr-16 xl:pr-28'>
              Coming Soon! Learn more about WAXIMO
            </Typography>
            <Typography
              className='mb-4'
              color='black'
              variant='h6'>
              Sign-Up Now for Exclusive Updates!
            </Typography>
            <div className='flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row'>
              {/* <form
                id='contact-form'
                method='post'>
                <Input
                  name='Email'
                  type='email'
                  label='Email address'
                  size='lg'
                  id='email-input'
                  placeholder='Enter email here…'
                  className='form-control'
                  required
                  onChange={handleInput}
                  crossOrigin={undefined}
                />
                <Button
                  size='lg'
                  color='white'
                  onClick={onSubmit}
                  disabled={isLoading}
                  className='flex justify-center items-center gap-3'>
                  Sign Up!
                </Button>
              </form>
               */}
              <Input
                name='Email'
                type='email'
                label='Email address'
                id='email-input'
                placeholder='Enter email here…'
                className='form-control'
                required
                onChange={handleInput}
                crossOrigin={undefined}
              />
              <Button
                size='sm'
                color='white'
                onClick={onSubmit}
                disabled={isLoading}
                className='flex justify-center items-center gap-3'>
                Sign Up!
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className='mx-8 lg:mx-16 -mt-24 rounded-xl bg-gray-200 p-5 md:p-14 shadow-md'>
        <div>
          {/* <Typography
            variant='h3'
            color='blue-gray'
            className='mb-3 text-center'>
            Waximo
          </Typography> */}
          {/* <Typography
            variant='h6'
            className='font-normal !text-gray-500 text-center'>
            WAXIMO is an innovative, cost-effective, time-saving, all-in-one
            tool that simplifies the waxing process for you to spend less time
            maintaining your snowboard or ski equipment and more time on the
            slopes.
          </Typography> */}
          <div className='container mx-auto mb-20 text-center'>
            <Typography
              color='blue-gray'
              className='mb-2 font-bold uppercase'>
              Your Learning App
            </Typography>
            <Typography
              variant='h1'
              color='blue-gray'
              className='mb-4'>
              Diverse Learning Resources
            </Typography>
            <Typography
              variant='lead'
              className='mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 rounded'>
              Access your learning materials on the go. Whether you&apos;re
              commuting, waiting for a friend, or just have a few minutes to
              spare, our app fits seamlessly into your busy life.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
