'use client';

import React, { FormEvent, useState } from 'react';
import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import axios from 'axios';

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const url =
      'https://script.google.com/macros/s/AKfycbxs7_eoduODWebxfZmJ7vGDaqETXDIjJGL22NIGS09Vmgws_OP_og3FROyTannkLsOybA/exec';

    const body = {
      Date: new Date().toLocaleDateString(),
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Message: message,
    };

    await axios
      .post(url, body, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        setFormSubmitted(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      .then((e) => {
        console.log(e);
        console.log(body);
      });
  };

  return (
    <section className='px-10 py-2 lg:py-16'>
      <div className='container mx-auto text-center'>
        {formSubmitted ? (
          <>
            <Typography
              variant='h2'
              className='mb-8 !text-3xl lg:!text-5xl'>
              Thank you
            </Typography>
            <Typography className='mb-6 font-normal !text-lg lg:mb-8 mx-auto max-w-3xl !text-gray-500'>
              Your message has been delivered to our team successfully.
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant='h2'
              className='mb-8 !text-3xl lg:!text-5xl'>
              Contact Us
            </Typography>
            <Typography className='mb-6 font-normal !text-lg lg:mb-8 mx-auto max-w-3xl !text-gray-500'>
              Leave a message with any questions, feedback or other issues you
              may have.
            </Typography>
            <div className='flex justify-center'>
              <form
                onSubmit={handleContactSubmit}
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
                      value={firstName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFirstName(e.target.value)
                      }
                      type='text'
                      required
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
                      value={lastName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLastName(e.target.value)
                      }
                      type='text'
                      required
                      className='focus:border-t-gray-900'
                    />
                  </div>
                </div>
                <div>
                  <Typography
                    variant='small'
                    className='mb-2 text-left font-medium !text-gray-900'>
                    Email
                  </Typography>
                  <Input
                    size='lg'
                    placeholder='example@example.com'
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    type='email'
                    required
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
                    required
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setMessage(e.target.value)
                    }
                    placeholder='Message'
                    name='message'
                    className='focus:border-t-gray-900'
                  />
                </div>
                <Button
                  disabled={isLoading}
                  className='w-full'>
                  Send message
                </Button>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ContactSection;
