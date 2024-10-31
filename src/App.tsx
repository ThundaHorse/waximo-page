import React from 'react';
import PageHero from './components/PageHero';
import PageFooter from './components/PageFooter';
import PlaceholderExample from './components/PlaceholderCard';
import EmailSignupComponent from './components/EmailSignupComponent';
import './index';

const App = () => {
  return (
    <div className='App container mx-auto flex flex-col h-screen'>
      <div className='flex-grow mb-auto'>
        <PageHero />

        <div id='hero'>
          <EmailSignupComponent />
        </div>

        <div id='call-to-action'>
          <PlaceholderExample />
          <PlaceholderExample />
        </div>
      </div>

      <div
        id='footer'
        className='h-10 '>
        <PageFooter />
      </div>
    </div>
  );
};

export default App;
