import { Typography, Card, CardBody } from '@material-tailwind/react';
import { m } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <m.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}>
      <Card className='border-none'>
        <CardBody className='flex place-items-center'>
          <div className='mb-2 grid h-12 w-12 place-content-center rounded-lg p-2.5 text-left text-black'>
            <Icon className='h-6 w-6' />
          </div>
          <Typography
            type='lead'
            className='mb-2 text-left'>
            {title}
          </Typography>
          <Typography className='font-normal text-left !text-gray-500'>
            {children}
          </Typography>
        </CardBody>
      </Card>
    </m.div>
  );
}

export default FeatureCard;
