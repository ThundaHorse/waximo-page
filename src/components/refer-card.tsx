'use client';

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardBody,
  Chip,
  Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formSchema, FormInputs, EmailInputField } from './email-input';

type ReferralProps = {
  referrer: string;
};

const ReferralComponent = ({ referrer }: ReferralProps) => {
  const [referrals, setReferrals] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const emailError = errors.email?.message;

  const onSubmit = async () => {
    setIsLoading(true);

    alert(`${referrer} is inviting ${referrals}`);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const addEmailHandler = (data: FormInputs) => {
    const inputElement = document.getElementsByClassName(
      'referralInput'
    )[0] as HTMLInputElement;
    inputElement.value = '';

    setReferrals((referrals) => [...referrals, data.email]);
  };

  const COLORS = [
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ];

  const generateRandomColors = () => {
    let bgColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    let textColor = bgColor === 'secondary' ? 'black' : 'white';
    return `bg-${bgColor} text-${textColor} border-none`;
  };

  return (
    <>
      <Card className='border-none bg-transparent shadow-none'>
        <CardBody className='grid px-0'>
          <Typography
            type='h6'
            className='mb-12 text-center'>
            Congratulations on staying in the Loop!
          </Typography>

          <div className='flex flex-wrap justify-center items-center gap-2 mb-8'>
            {referrals.map((val) => (
              <Chip
                size='md'
                className={generateRandomColors()}
                key={val}>
                <Chip.Label>{val}</Chip.Label>
                <Chip.DismissTrigger
                  onClick={() =>
                    setReferrals(referrals.filter((email) => email !== val))
                  }
                />
              </Chip>
            ))}
          </div>
          <form
            action='#'
            className='flex flex-col'
            onSubmit={handleSubmit(addEmailHandler)}>
            <EmailInputField
              type='email'
              className='referralInput'
              label='Refer your friends! Enter the email and press "Add Referral" or press "Enter" to add multiple recipients.'
              error={emailError}
              icon={EnvelopeIcon}
              placeholder='example@example.com'
              required
              disabled={isLoading}
              {...register('email')}
            />

            <div className='flex gap-4 justify-between'>
              <Button
                size='md'
                type='submit'
                color='info'
                className='xl:mt-1 lg:mt-1 md:mt-1 mt-7'
                onSubmit={handleSubmit(addEmailHandler)}
                disabled={isLoading}>
                Add Referral
              </Button>

              <Button
                type='button'
                color='success'
                className='xl:mt-1 lg:mt-1 md:mt-1 mt-7'
                onClick={onSubmit}
                disabled={isLoading}>
                Submit Referrals
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default ReferralComponent;
