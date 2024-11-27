'use client';

import * as React from 'react';
import { IconButton, Collapse, Navbar } from '@material-tailwind/react';
import { Menu, Xmark } from 'iconoir-react';
import { Link } from 'react-scroll';
import Image from 'next/image';

const LINKS = [
  {
    title: 'Features',
    href: 'feature-section',
    id: 'nav-features',
  },
  {
    title: 'FAQ',
    href: 'faq-section',
    id: 'nav-faq',
  },
  {
    title: 'About Us',
    href: 'about-us-section',
    id: 'nav-about-us',
  },
];

function NavList() {
  return (
    <ul className='m-2 flex flex-col gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center text-white'>
      {LINKS.map(({ title, href, id }) => (
        <li key={title}>
          <Link
            id={id}
            to={href}
            className='p-1 hover:text-primary text-white'
            smooth={true}
            duration={500}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className='w-full border-none'
      style={{ background: '#2c2c2c' }}>
      <div className='flex items-center p-5'>
        <a
          href='#'
          type='small'
          className='mx-2 block py-1 font-semibold'>
          <Image
            width={200}
            height={50}
            src='/images/Logo1.webp'
            className=''
            alt='Logo'
          />
        </a>
        <div className='hidden lg:ml-auto lg:mr-2 lg:block'>
          <NavList />
        </div>
        <IconButton
          size='sm'
          variant='ghost'
          color='secondary'
          onClick={() => setOpenNav(!openNav)}
          className='ml-auto grid lg:hidden'>
          {openNav ? (
            <Xmark className='h-4 w-4' />
          ) : (
            <Menu className='h-4 w-4' />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default NavList;
