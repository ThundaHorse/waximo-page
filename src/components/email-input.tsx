'use client';

import { Input, InputProps, Typography } from '@material-tailwind/react';
import React from 'react';
import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email.' }),
});

export type FormInputs = z.infer<typeof formSchema>;

type EmailInputProps = InputProps & {
  // label: string;
  error?: string;
  icon: React.ElementType;
};

export const EmailInputField = React.forwardRef<
  HTMLInputElement,
  EmailInputProps
>(({ error, icon: Icon, ...props }, ref) => {
  const id = React.useId();

  return (
    <label
      htmlFor={id}
      color='default'
      className='block space-y-1.5'>
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
});

export default EmailInputField;
