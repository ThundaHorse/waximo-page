'use client';

import { Accordion, Typography } from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const FaqSection = () => {
  return (
    <>
      <section
        id='faq-section'
        className='px-12 py-20'
        style={{ background: 'black' }}>
        <div className='container max-w-6xl mx-auto'>
          <Typography
            type='h3'
            className='text-white text-3xl text-center'
            style={{ color: '#d7ffc2' }}>
            FAQ
          </Typography>

          <Accordion defaultValue=''>
            <Accordion.Item
              value='how-to'
              className='p-5'>
              <Accordion.Trigger className='text-white'>
                How do I use WAXIMO?
                <ChevronDownIcon className='h-4 w-4 group-data-[open=true]:rotate-180' />
              </Accordion.Trigger>

              <Accordion.Content>
                <Typography
                  type='lead'
                  className='text-white'>
                  Using WAXIMO is an easy 3-step process!
                </Typography>
                <ol className='text-white'>
                  <li>1. Load the wax</li>

                  <li>2. Power ON</li>

                  <li>
                    3. Glide the tool across your snow equipment and leave it to
                    dry for about five minutes.
                  </li>
                </ol>

                <Typography
                  type='h6'
                  className='text-white'>
                  No scraping, no prep no additional tools or work required.
                </Typography>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value='what-kind'
              className='p-5'>
              <Accordion.Trigger className='text-white'>
                What kind of equipment can I wax with WAXIMO
                <ChevronDownIcon className='h-4 w-4 group-data-[open=true]:rotate-180' />
              </Accordion.Trigger>

              <Accordion.Content>
                <Typography className='text-white'>
                  WAXIMO is safe to use on a variety of surfaces. While the
                  current shape is optimized for use on a snowboard, WAXIMO will
                  be able to wax your skis as well (just expect the tool may be
                  slightly wider than your ski). We are working on a dedicated
                  ski version, coming soon.
                </Typography>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value='old'
              className='p-5'>
              <Accordion.Trigger className='text-white'>
                Does WAXIMO take my old wax off?
                <ChevronDownIcon className='h-4 w-4 group-data-[open=true]:rotate-180' />
              </Accordion.Trigger>

              <Accordion.Content>
                <Typography className='text-white'>
                  No need to remove old wax! Our proprietary technology will
                  melt the old wax, creating one smooth layer as you apply the
                  new wax.
                </Typography>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value='what-wax'
              className='p-5'>
              <Accordion.Trigger className='text-white'>
                What kind of wax does WAXIMO use?
                <ChevronDownIcon className='h-4 w-4 group-data-[open=true]:rotate-180' />
              </Accordion.Trigger>

              <Accordion.Content>
                <Typography className='text-white'>
                  We are currently offering an eco-friendly all-weather wax.
                  More wax options are planned for the future, let us know if
                  you have any special requests!
                </Typography>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value='launch'
              className='p-5'>
              <Accordion.Trigger className='text-white'>
                When are you launching?
                <ChevronDownIcon className='h-4 w-4 group-data-[open=true]:rotate-180' />
              </Accordion.Trigger>

              <Accordion.Content>
                <Typography className='text-white'>
                  We are planning to launch our first crowdfunding and
                  production run in 2025.
                </Typography>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value='powered'
              className='p-5'>
              <Accordion.Trigger className='text-white'>
                How is WAXIMO powered?
                <ChevronDownIcon className='h-4 w-4 group-data-[open=true]:rotate-180' />
              </Accordion.Trigger>

              <Accordion.Content>
                <Typography className='text-white'>
                  WAXIMO is powered by a standard 20v wall outlet.
                </Typography>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              value='available'
              className='p-5'>
              <Accordion.Trigger className='text-white'>
                Where is WAXIMO available?
                <ChevronDownIcon className='h-4 w-4 group-data-[open=true]:rotate-180' />
              </Accordion.Trigger>

              <Accordion.Content>
                <Typography className='text-white'>
                  Thank you for your interest! WAXIMO will be available online,
                  sign up to keep informed on the latest releases. We are
                  currently only able to ship within the US. We have more
                  territories planned in the future, keep tuned!
                </Typography>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
