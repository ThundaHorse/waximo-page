/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { TEInput, TERipple } from 'tw-elements-react';
import axios from 'axios';

export default function EmailSignupComponent(): JSX.Element {
  const [email, setEmail] = useState('');
  const [ipAddress, setIpAddress] = useState('');

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
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className='h-screen'>
      <div className='h-full'>
        {/* <!-- Left column container with background--> */}
        <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
          <div className='shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
            <img
              src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
              className='w-full'
              alt='Sample image'
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12'>
            <form
              id='contact-form'
              method='post'>
              <TEInput
                name='Email'
                type='email'
                label='Email address'
                size='lg'
                id='email-input'
                placeholder='Enter email here…'
                className='form-control'
                required
                onChange={handleInput}
              />
              <TERipple rippleColor='light'>
                <button
                  onClick={onSubmit}
                  // type='submit'
                  className='inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
                  Sign up!
                </button>
              </TERipple>
            </form>

            <br />
            <br />

            <form
              method='POST'
              action='https://script.google.com/macros/s/AKfycbwxXrkSXI9VNv8z_oU4jQhvqroAK5xt7KSD0zT2yFsfiwm1uwlorLhxLNKDBmWg4v0D/exec'>
              {/* <!-- Login button --> */}
              <div className='text-center lg:text-left'>
                <TERipple rippleColor='light'>
                  <button
                    onClick={onSubmit}
                    // type='submit'
                    className='inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
                    Sign up!
                  </button>
                </TERipple>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
