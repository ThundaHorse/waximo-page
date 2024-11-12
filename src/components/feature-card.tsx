import { Typography, Card, CardBody } from '@material-tailwind/react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card className='border-none'>
      <CardBody className='grid justify-start'>
        <div className='mb-4 grid h-12 w-12 place-content-center rounded-lg p-2.5 text-left text-black'>
          <Icon className='h-6 w-6' />
        </div>
        <Typography
          variant='h5'
          className='mb-2'>
          {title}
        </Typography>
        <Typography className=' font-normal !text-gray-500'>
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
