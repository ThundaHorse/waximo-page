import React from 'react';

import { Typography, Card, CardBody } from '@material-tailwind/react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card className='border-none shadow-none mt-12 bg-transparent'>
      <CardBody className='grid px-0 align-middle'>
        <Typography type='lead'>{title}</Typography>
        <Typography className='font-normal'>{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
