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
  const EMAIL_REGEXP =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

  const onSubmit = async () => {
    alert(`${referrer} is inviting ${referrals}`);
  };

  const addEmailHandler = (data: FormInputs) => {
    const inputElement = document.getElementsByClassName(
      'referralInput'
    )[0] as HTMLInputElement;
    inputElement.value = '';

    setReferrals((referrals) => [...referrals, data.email]);
  };

  return (
    <>
      <Card className='border-none bg-transparent'>
        <CardBody className='grid px-0'>
          <Typography
            type='lead'
            className='mb-0'>
            Congratulations on staying in the Loop!
          </Typography>
          <Typography className='mb-12'>Refer a friend</Typography>

          <div className='flex flex-wrap items-center gap-2 mb-8'>
            {referrals.map((val) => (
              <Chip
                size='sm'
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
            onSubmit={handleSubmit(addEmailHandler)}>
            <EmailInputField
              type='email'
              className='referralInput'
              label='Refer your friends! Enter the email and press "Add Referral" or press "Enter" to add multi-recipients.'
              error={emailError}
              icon={EnvelopeIcon}
              placeholder='example@example.com'
              required
              {...register('email')}
            />

            <div className='flex gap-4'>
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
                onClick={handleSubmit(onSubmit)}>
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
