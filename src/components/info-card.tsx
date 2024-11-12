import React from 'react';

import { Typography, Card, CardBody } from '@material-tailwind/react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card className='border-none'>
      <CardBody className='grid px-0'>
        <Typography
          type='small'
          className='mb-2'>
          {title}
        </Typography>
        <Typography className=' font-normal'>{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
