import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  // weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Waximo',
  description: 'Coming Soon!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
          integrity='sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='shortcut icon'
          href='/waximofavicon.ico'
          type='image/ico'
        />
        <meta
          name='Waximo'
          content='Coming Soon!'
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
