/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { TEInput, TERipple } from 'tw-elements-react';

export default function EmailSignupComponent(): JSX.Element {
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
              method='POST'
              action='https://script.google.com/macros/s/AKfycbwxXrkSXI9VNv8z_oU4jQhvqroAK5xt7KSD0zT2yFsfiwm1uwlorLhxLNKDBmWg4v0D/exec'>
              {/* <!-- Email input --> */}
              <TEInput
                name='Email'
                type='email'
                label='Email address'
                size='lg'
                className='mb-6'
                required></TEInput>

              {/* <!-- Login button --> */}
              <div className='text-center lg:text-left'>
                <TERipple rippleColor='light'>
                  <button
                    type='submit'
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
