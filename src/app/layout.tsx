import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Layout } from '@/components';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
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
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
          integrity='sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
        <link
          rel='shortcut icon'
          href='/favicon.png'
          type='image/png'
        />
      </head>
      <body className={montserrat.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
