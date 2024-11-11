'use client';
import Image from 'next/image';
import { Typography, IconButton, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const LINKS = [
  {
    name: 'Contact Us',
    url: '/contact-us',
  },
  {
    name: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    name: 'Terms & Conditions',
    url: '/terms-and-conditions',
  },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className='mt-10 bg-gray-900 px-8 pt-12'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center gap-8 md:justify-between'>
          <div className='text-center md:text-left'>
            <Typography
              variant='h5'
              color='white'
              className='mb-4'>
              Waximo
            </Typography>
            <Typography
              color='white'
              className='mb-12 font-normal'>
              The reward for getting on the stage is fame.
            </Typography>
            <ul className='flex flex-wrap items-center justify-center md:justify-start'>
              {LINKS.map((link, idx) => (
                <li key={idx}>
                  <Typography
                    as='a'
                    href={link.url}
                    target='_blank'
                    color='white'
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? 'pr-3' : 'px-3'
                    }`}>
                    {link.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-8 w-full md:mt-0 md:w-auto'>
            <Typography
              variant='h6'
              color='white'
              className='mb-3 text-center'>
              Follow Us
            </Typography>
            <div className='flex flex-col gap-2'>
              <div className='gap-2 lg:flex lg:items-center text-center'>
                <Typography
                  as='a'
                  href=''
                  target='_blank'
                  color='white'>
                  <IconButton
                    variant='text'
                    color='white'
                    size='lg'>
                    <i className='fa-brands fa-kickstarter'></i>
                  </IconButton>
                </Typography>
                <Typography
                  as='a'
                  href=''
                  target='_blank'
                  color='white'>
                  <IconButton
                    variant='text'
                    color='white'
                    size='lg'>
                    <i className='fa-brands fa-facebook text-base' />
                  </IconButton>
                </Typography>
                <Typography
                  as='a'
                  href=''
                  target='_blank'
                  color='white'>
                  <IconButton
                    variant='text'
                    color='white'
                    size='lg'>
                    <i className='fa-brands fa-instagram text-base' />
                  </IconButton>
                </Typography>
                <Typography
                  as='a'
                  href=''
                  target='_blank'
                  color='white'>
                  <IconButton
                    variant='text'
                    color='white'
                    size='lg'>
                    <i className='fa-brands fa-linkedin'></i>
                  </IconButton>
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between'>
          {/* <Typography
            color='white'
            className='text-center font-normal opacity-75'>
            &copy; {CURRENT_YEAR} Made with{' '}
            <a
              href='https://www.material-tailwind.com'
              target='_blank'>
              Material Tailwind
            </a>{' '}
            by{' '}
            <a
              href='https://www.creative-tim.com'
              target='_blank'>
              Creative Tim
            </a>
            .
          </Typography>

          <div className='flex gap-2'>
            <IconButton
              variant='text'
              color='white'>
              <i className='fa-brands fa-twitter text-2xl not-italic opacity-75'></i>
            </IconButton>
            <IconButton
              variant='text'
              color='white'>
              <i className='fa-brands fa-linkedin text-2xl not-italic opacity-75'></i>
            </IconButton>
            <IconButton
              variant='text'
              color='white'>
              <i className='fa-brands fa-facebook text-2xl not-italic opacity-75'></i>
            </IconButton>
            <IconButton
              variant='text'
              color='white'>
              <i className='fa-brands fa-github text-2xl not-italic opacity-75'></i>
            </IconButton>
            <IconButton
              variant='text'
              color='white'>
              <i className='fa-brands fa-dribbble text-2xl not-italic opacity-75'></i>
            </IconButton>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
