'use client';

import {
  Typography,
  IconButton,
  Button,
  Dialog,
} from '@material-tailwind/react';
import Link from 'next/link';

const Footer = () => {
  const renderPrivacyPolicy = () => {
    return (
      <div>
        <h1>Privacy Policy **Last Updated: 11/11/2024</h1>

        <p>
          Welcome to waximo.com. We are committed to protecting your privacy and
          safeguarding your personal information.
        </p>

        <p>
          This Privacy Policy explains how waximo.com (“we,” “us,” or “our”)
          collects, uses, discloses, and safeguards information from users
          (“you” or “your”) who visit our website, https://waximo.com, including
          all subdomains, directories, and linked content. By accessing or using
          our website, you agree to the terms of this Privacy Policy. If you do
          not agree, please do not use our site.
        </p>

        <p>
          This Privacy Policy is subject to applicable privacy laws, including
          the General Data Protection Regulation (GDPR), California Consumer
          Privacy Act (CCPA), the Personal Information Protection and Electronic
          Documents Act (PIPEDA), and other relevant privacy regulations.
        </p>

        <h1>1. Information We Collect</h1>

        <h2>A. Personal Information</h2>

        <p>
          We may collect the following personal information directly from you
          when you interact with our site: - Email Address: Collected when you
          subscribe to our newsletter, fill out forms, or contact us. - IP
          Address: Automatically collected when you visit our site for security
          and analytics purposes. - Date and Time of Access: Collected to track
          usage patterns and improve website functionality.
        </p>

        <h2>B. Usage Data and Analytics</h2>

        <p>
          We use Google Analytics and other analytics software to collect data
          automatically as you navigate our website. This data may include: -
          Browser type and version - Operating system - Pages viewed and time
          spent on the site - Referring and exit pages This information is used
          to analyze trends, administer the site, and gather demographic
          information. Analytics data is anonymous and does not directly
          identify individual users.
        </p>

        <h2>C. Cookies and Tracking Technologies</h2>

        <p>
          We use cookies, beacons, tags, and scripts to enhance your experience
          on our site, monitor traffic, and understand how users interact with
          the website. You can manage your cookie preferences through your
          browser settings.
        </p>

        <h1>2. How We Use Your Information</h1>

        <p>
          We may use the information we collect for various purposes, including:
          - Providing and maintaining our website’s functionality - Improving
          user experience through analytics and traffic monitoring - Sending
          newsletters, updates, or promotional emails** (only with your consent)
          - Ensuring website security and protecting against fraud - Compliance
          with legal obligations and to fulfill any contractual requirements We
          will not use your personal information for any purpose other than
          those listed in this policy unless we obtain your consent or are
          required by law.
        </p>

        <h1>3. Legal Bases for Processing Personal Data (GDPR Compliance)</h1>

        <p>
          If you are located in the European Economic Area (EEA), our legal
          basis for collecting and using your personal information depends on
          the data we collect and the context in which we collect it. We may
          process your personal information because: - You have given us
          permission to do so (consent) - We need to perform a contract with you
          - Processing is in our legitimate interests and not overridden by your
          rights - We need to comply with the law.
        </p>

        <h1>4. Your Rights and Choices</h1>

        <h2>A. GDPR Rights (For Users in the EEA)</h2>

        <p>
          If you are an EEA resident, you have the following rights regarding
          your personal information:
        </p>

        <ul>
          <li>
            Right to Access: Request access to your personal data that we hold.
          </li>
          <li>
            Right to Rectification: Correct any inaccuracies in your personal
            data.
          </li>
          <li>
            Right to Erasure: Request deletion of your personal data under
            certain conditions.
          </li>
          <li>
            Right to Restriction of Processing: Limit our use of your personal
            data in specific cases.
          </li>
          <li>
            Right to Data Portability: Receive a copy of your personal data in a
            structured format.
          </li>
          <li>
            Right to Object: Object to the processing of your personal data in
            certain situations.
          </li>
        </ul>

        <p>
          To exercise any of these rights, please contact us at [Contact Email].
          We will respond to your request in accordance with applicable data
          protection laws.
        </p>

        <h2>B. CCPA Rights (For California Residents)</h2>
        <p>
          If you are a California resident, you have the following rights under
          the CCPA:
        </p>
        <ul>
          <li>
            Right to Know: Request disclosure of the categories and specific
            pieces of personal data we have collected.
          </li>
          <li>
            Right to Deletion: Request the deletion of personal data we have
            collected from you, subject to certain exceptions.
          </li>
          <li>
            Right to Opt-Out: Opt-out of the sale of your personal data, if
            applicable.
          </li>
          <li>
            Right to Non-Discrimination: We will not discriminate against you
            for exercising any of your CCPA rights. To exercise your CCPA
            rights, please contact us at [Contact Email]. Note that we do not
            sell personal information as defined by the CCPA.
          </li>
        </ul>

        <h2>C. PIPEDA Rights (For Canadian Residents)</h2>

        <p>
          If you are a Canadian resident, PIPEDA grants you the following rights
          regarding your personal information:
        </p>

        <ul>
          <li>
            **Right to Access:** Request access to your personal information
            that we hold and understand how it is being used or disclosed.
          </li>
          <li>
            **Right to Challenge Accuracy:** Request correction of inaccurate or
            incomplete personal information.
          </li>
          <li>
            **Right to Withdraw Consent:** Withdraw your consent for us to
            collect, use, or disclose your personal information, subject to
            legal or contractual restrictions.
          </li>
        </ul>

        <p>
          To exercise your PIPEDA rights, please contact us at [Contact Email].
          We will respond to your request in compliance with PIPEDA and Canadian
          privacy laws.
        </p>

        <h2>
          D. Managing Your Preferences You may unsubscribe from our emails or
          manage your cookie preferences at any time by following the
          instructions provided in the email or adjusting your browser settings.
        </h2>

        <h1>
          5. Data Security and Retention We employ industry-standard security
          measures to protect your personal information, including SSL
          encryption and secure storage. However, no method of transmission over
          the internet or electronic storage is 100% secure. We strive to use
          commercially acceptable means to protect your data but cannot
          guarantee absolute security. We retain personal information for as
          long as necessary to fulfill the purposes outlined in this Privacy
          Policy or comply with legal obligations. Once information is no longer
          needed, we securely delete or anonymize it.
        </h1>

        <h1>
          6. Disclosure of Your Information We may share your personal
          information in the following situations:
        </h1>

        <ul>
          <li>
            **With service providers** who help us operate our website, conduct
            business, or provide services (subject to strict confidentiality
            agreements)
          </li>
          <li>
            **For legal compliance:** When required by law, regulation, or legal
            process
          </li>
          <li>
            **In business transfers:** In the event of a merger, acquisition, or
            sale of all or a portion of our assets We do not sell, trade, or
            rent your personal information to third parties for marketing
            purposes.
          </li>
        </ul>

        <h1>
          7. Automated Decision-Making and Profiling We may use automated
          decision-making and profiling technologies to analyze user behavior
          and provide personalized services or content. This includes using data
          from Google Analytics and other analytics tools to deliver tailored
          experiences on our website. However, we do not make any decisions
          solely based on automated processing that would produce legal effects
          or similarly significant effects. If applicable, users may have the
          right to object to automated decision-making and profiling by
          contacting us at waximocompany@gmail.com.
        </h1>

        <h1>
          8. International Data Transfers Your information may be transferred
          to/from, stored, processed, and maintained on computers located
          outside your country or other governmental jurisdiction where data
          protection laws may differ. We ensure that such transfers are
          conducted in compliance with applicable data protection laws and
          implement adequate safeguards to protect your information.
        </h1>

        <h1>
          9. Third-Party Links and Services Our website may contain links to
          third-party websites or services that are not owned or controlled by
          waximo.com. We are not responsible for the privacy practices or
          content of these third-party sites. We encourage you to read their
          privacy policies before providing personal information.
        </h1>

        <h1>
          10. Data Breach Notification In the event of a data breach that
          affects your personal information, we will promptly assess the
          situation and notify the appropriate regulatory authorities and
          affected users as required by applicable laws. Notifications will be
          provided in a timely manner and will include information about the
          nature of the breach, the affected data, and the steps we are taking
          to mitigate the impact.
        </h1>

        <h1>
          11. Do Not Track (DNT) Signals Our website does not respond to Do Not
          Track (DNT) signals from web browsers. However, you can still manage
          your tracking preferences via cookie settings or by adjusting your
          browser settings to control tracking.
        </h1>

        <h1>
          12. Changes in Business Ownership or Control In the event that
          waximo.com undergoes a business transition, such as a merger,
          acquisition, or sale of all or a portion of our assets, your personal
          information may be transferred to the new owners. We will notify you
          before any such transition and provide options regarding your personal
          data, if available.
        </h1>

        <h1>
          13. Sensitive Personal Information We do not intentionally collect
          sensitive personal information (such as race, ethnicity, religious
          beliefs, health data, or biometric information) unless explicitly
          stated and with your consent. If you inadvertently or intentionally
          provide sensitive personal information, you consent to our processing
          of that information under this Privacy Policy.
        </h1>

        <h1>
          14. Children’s Privacy Our website is not intended for use by
          individuals under the age of 13 (or under the age of 16 for residents
          of certain jurisdictions). We do not knowingly collect personal
          information from children. If we become aware of any such data being
          collected, we will take steps to delete it promptly.
        </h1>

        <h1>
          15. Changes to This Privacy Policy We may update this Privacy Policy
          from time to time to reflect changes in our practices or legal
          requirements. We will notify you of any material changes by posting
          the new policy on this page. Your continued use of the website after
          the effective date constitutes your acceptance of the revised Privacy
          Policy.
        </h1>

        <h1>
          16. Contact Us If you have any questions about this Privacy Policy,
          please contact us:
        </h1>
        <ul>
          <li>Email: waximocompany@gmail.com</li>
          <li>Mail: [Company Address]</li>
        </ul>
      </div>
    );
  };

  const renderTermsAndConditions = () => {
    return (
      <>
        <h1>Terms & Conditions</h1>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of waximo's website, located at https://waximo.com, including all
          subdomains, directories, and any linked content provided by waximo. By
          accessing this website and its associated links and domains, we assume
          you accept these terms and conditions. Do not continue to use any part
          of waximo if you do not agree to all of the terms and conditions
          stated on this page.
        </p>

        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement, Disclaimer Notice, and all Agreements: "Client,"
          "You," and "Your" refer to you, the person accessing this website and
          agreeing to the Company’s terms and conditions. "The Company,"
          “Company," "Ourselves," "We," "Our," and "Us" refer to waximo.
          "Party," "Parties," or "Us" refers to both the Client and ourselves.
          All terms refer to the offer, acceptance, and consideration of payment
          necessary to undertake the process of our assistance to the Client in
          the most appropriate manner to meet the Client’s needs regarding the
          provision of the Company’s stated services in accordance with, and
          subject to, prevailing law. Any use of the above terminology or other
          words in the singular, plural, capitalization, and/or he/she or they,
          are taken as interchangeable and therefore as referring to the same.
        </p>
        <h1>Cookies</h1>
        <p>
          We employ the use of cookies. By accessing waximo, you agree to use
          cookies in agreement with waximo's Privacy Policy. Most interactive
          websites use cookies to retrieve users’ details for each visit. Our
          website uses cookies to enable functionality in certain areas, making
          it easier for visitors. Some of our affiliate/advertising partners may
          also use cookies.
        </p>

        <h1>License</h1>
        <p>
          Unless otherwise stated, waximo and/or its licensors own the
          intellectual property rights for all material on waximo. All
          intellectual property rights are reserved. You may access this from
          waximo for personal use, subject to restrictions set in these terms
          and conditions.
        </p>

        <h6>You must not:</h6>
        <ul>
          <li>Republish material from waximo</li>
          <li>Sell, rent, or sub-license material from waximo</li>
          <li>Reproduce, duplicate, or copy material from waximo</li>
          <li>Redistribute content from waximo</li>
        </ul>

        <h6>This Agreement shall begin on the date hereof.</h6>

        <h1>User Conduct and Acceptable Use</h1>
        <p>By using waximo, you agree not to:</p>
        <ul>
          <li>
            Engage in any harassing, defamatory, abusive, or otherwise offensive
            conduct
          </li>
          <li>Upload or distribute malicious software or viruses</li>
          <li>
            Attempt unauthorized access to restricted areas of the website or
            server
          </li>
          <li>
            Use the site for spam, unsolicited promotions, or commercial
            solicitation.
          </li>
        </ul>

        <h6>
          Any violation may result in termination of your access to the site
          without notice.
        </h6>

        <h1>User-Generated Content and DMCA Compliance</h1>
        <p>
          Parts of this website allow users to post and exchange opinions and
          information. waximo does not filter, edit, publish, or review Comments
          before their presence on the website. Comments reflect only the views
          of the person posting them. To the extent permitted by law, waximo is
          not liable for Comments or for any liability, damages, or expenses
          arising from Comments on this website.
        </p>

        <p>
          We respect intellectual property rights and adhere to the Digital
          Millennium Copyright Act (DMCA) for copyright infringement claims. If
          you believe your copyrighted work is being used improperly on waximo,
          please contact us.
        </p>

        <p>You warrant and represent that:</p>
        <ul>
          <li>
            You have all necessary licenses and consents to post Comments on our
            website
          </li>
          <li>
            Your Comments do not infringe any intellectual property right,
            including copyright, patent, or trademark of any third party
          </li>
          <li>
            Your Comments do not contain defamatory, offensive, or otherwise
            unlawful material.
          </li>
        </ul>

        <h6>
          You hereby grant waximo a non-exclusive license to use, reproduce,
          edit, and authorize others to use, reproduce, and edit any of your
          Comments in any form, format, or media.
        </h6>

        <h1>Community Guidelines</h1>
        <p>
          Waximo aims to provide a welcoming and respectful environment for all
          users. By participating in any interactive sections of the website,
          including comments, forums, or chats, you agree to:
        </p>
        <ul>
          <li>
            Be respectful of others and refrain from offensive, abusive, or
            inflammatory language.
          </li>
          <li>
            Avoid spamming, trolling, or posting repetitive or irrelevant
            content.
          </li>
          <li>
            Not post any content that is illegal, harmful, or inappropriate.
          </li>
        </ul>

        <p>
          We reserve the right to remove any content that violates these
          guidelines and, in certain cases, to suspend or terminate access to
          users who engage in disruptive or harmful behavior.
        </p>

        <h1>Hyperlinking to Our Content</h1>
        <p>
          We do not allow any external websites or entities to hyperlink to our
          website content without explicit written permission. Unauthorized
          hyperlinking or referencing of our content in any form is strictly
          prohibited. If you would like to request permission to link to
          specific content on waximo, please contact us directly for approval.
          waximo reserves the right to refuse any hyperlinking request at its
          discretion and without providing a reason.
        </p>

        <h1>Third-Party Links and Advertisements</h1>
        <p>
          Our website may include links to external websites or advertisements
          for third-party products and services. We do not endorse, monitor, or
          control these external sites, and we are not responsible for any
          content, accuracy, or policies on third-party websites.
        </p>

        <h1>Intellectual Property Protection</h1>
        <p>
          The waximo name, brand, logo, and other identifying trademarks are the
          exclusive property of waximo. Unauthorized use of our name, brand,
          logo, or any other intellectual property, including in links,
          publications, or marketing materials, is strictly prohibited without
          prior written consent from waximo.
        </p>

        <p>
          If you would like to request permission to use any of our intellectual
          property, please contact us directly. waximo reserves the right to
          deny such requests at its sole discretion and without explanation.
        </p>

        <h1>iFrames</h1>
        <p>
          Without prior approval and written permission, you may not create
          frames around our webpages that alter in any way the visual
          presentation or appearance of our Website.
        </p>

        <h1>Content Liability</h1>
        <p>
          We shall not be held responsible for any content appearing on your
          website. You agree to protect and defend us against all claims arising
          from your website. No link(s) should appear on any website that could
          be interpreted as libelous, obscene, or criminal, or which infringes
          any third-party rights.
        </p>

        <h1>Your Privacy</h1>
        <p>Please read our Privacy Policy.</p>

        <h1>Limitation of Liability</h1>
        <p>
          Under no circumstances shall waximo, its directors, employees, or
          agents, be liable for any indirect, incidental, or consequential
          damages arising out of or related to your use or inability to use our
          website. Our total liability shall not exceed the amount paid by you,
          if any, to access the site.
        </p>

        <h1>Indemnification</h1>
        <p>
          You agree to indemnify, defend, and hold harmless waximo, its
          affiliates, and their respective officers, directors, employees, and
          agents from and against any claims, damages, losses, liabilities, and
          expenses (including attorneys’ fees) arising out of or related to your
          use of the website, violation of these Terms, or infringement of any
          third-party rights.
        </p>

        <h1>Termination</h1>
        <p>
          We reserve the right to suspend or terminate your access to waximo
          without prior notice if you breach these Terms and Conditions or
          engage in any conduct that we deem inappropriate or harmful to others
          or to waximo.
        </p>

        <h1>Governing Law and Dispute Resolution</h1>
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with applicable laws without regard to conflict of law
          provisions. In the event of any dispute arising out of or relating to
          these Terms, the parties agree to first attempt to resolve the dispute
          informally through negotiation.
        </p>

        <p>
          If a resolution cannot be reached informally, any unresolved disputes
          shall be submitted to binding arbitration in a mutually agreed-upon
          location, conducted by a neutral arbitrator. The arbitration shall be
          conducted in English, and each party shall bear its own costs and
          expenses associated with the arbitration unless otherwise determined
          by the arbitrator.
        </p>

        <p>
          Either party may seek temporary or preliminary injunctive relief from
          a court of competent jurisdiction if necessary to protect their rights
          or property pending the outcome of arbitration.
        </p>

        <h1>Modifications to the Terms</h1>
        <p>
          We reserve the right to update or modify these Terms and Conditions at
          any time without prior notice. Your continued use of the website after
          any modifications constitutes acceptance of the revised Terms.
        </p>

        <h1>Force Majuere</h1>
        <p>
          waximo shall not be held liable for any failure or delay in
          performance due to causes beyond its reasonable control, including but
          not limited to acts of God, war, strikes, natural disasters, or
          interruptions in internet services.
        </p>

        <h1>Reservation of Rights</h1>
        <p>
          We reserve the right to request that you remove all links or any
          particular link to our Website. You agree to immediately remove all
          links to our Website upon request. We also reserve the right to amend
          these terms and conditions and our linking policy at any time. By
          continuously linking to our Website, you agree to be bound by these
          linking terms and conditions.
        </p>

        <h1>Removal of Links from our Website</h1>
        <p>
          If you find any link on our Website that you find offensive for any
          reason, you are free to contact us at any time. We will consider
          requests to remove links but are not obligated to respond directly.
        </p>

        <h1>Disclaimer and Liability</h1>
        <p>
          To the maximum extent permitted by law, we exclude all
          representations, warranties, and conditions relating to our website
          and its use. Nothing in this disclaimer will:
        </p>
        <ul>
          <li>
            Limit or exclude our or your liability for death or personal injury
          </li>
          <li>
            Limit or exclude our or your liability for fraud or fraudulent
            misrepresentation
          </li>
          <li>
            Limit any of our or your liabilities in any way not permitted under
            applicable law.
          </li>
        </ul>

        <p>
          We do not warrant the completeness, accuracy, or availability of
          information on this website, nor guarantee uninterrupted access or
          error-free content. Use of the site is at your own risk.
        </p>

        <h1>Disclaimer of Professional Advice</h1>
        <p>
          The information provided on waximo is for general informational
          purposes only and should not be considered professional advice. Always
          seek the guidance of a qualified professional before making decisions
          based on information from this website. waximo disclaims all liability
          for actions taken by users based on information on this site.
        </p>

        <h1>Severability</h1>
        <p>
          If any provision of these Terms is deemed invalid, the remaining
          provisions remain in full effect.
        </p>
      </>
    );
  };

  return (
    <footer className='mt-10 bg-gray-900 px-8 pt-12'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center gap-8 md:justify-between'>
          <div className='text-center md:text-left'>
            <Typography
              type='h5'
              className='mb-4 text-white'>
              Waximo
            </Typography>
            <Typography className='mb-12 font-normal text-white'>
              Coming Soon!
            </Typography>
            <ul className='flex flex-wrap items-center justify-center md:justify-start'>
              <li>
                <Dialog>
                  <Dialog.Trigger
                    as={Button}
                    variant='ghost'
                    className='text-white lg:pl-0 pl-4'>
                    Privacy Policy
                  </Dialog.Trigger>
                  <Dialog.Overlay>
                    <Dialog.Content>
                      <div className='mb-4 flex items-center justify-between gap-4'>
                        <Typography type='h6'>Privacy Policy</Typography>
                        <Dialog.DismissTrigger
                          as={IconButton}
                          size='sm'
                          variant='ghost'
                          color='secondary'
                          isCircular
                          className='absolute right-2 top-2'>
                          <i className='fa-solid fa-x h-5 w-5'></i>
                        </Dialog.DismissTrigger>
                      </div>

                      <div className='overflow-y-auto'>
                        {renderPrivacyPolicy()}
                      </div>

                      <div className='mt-12 flex w-full items-center justify-end gap-2'>
                        <Dialog.DismissTrigger
                          as={Button}
                          color='error'>
                          Cancel
                        </Dialog.DismissTrigger>
                      </div>
                    </Dialog.Content>
                  </Dialog.Overlay>
                </Dialog>
              </li>

              <li>
                <Dialog>
                  <Dialog.Trigger
                    as={Button}
                    variant='ghost'
                    className='text-white lg:pl-0 pl-4'>
                    Terms & Conditions
                  </Dialog.Trigger>
                  <Dialog.Overlay>
                    <Dialog.Content>
                      <div className='mb-4 flex items-center justify-between gap-4'>
                        <Typography type='h6'>Terms & Conditions</Typography>
                        <Dialog.DismissTrigger
                          as={IconButton}
                          size='sm'
                          variant='ghost'
                          color='secondary'
                          isCircular
                          className='absolute right-2 top-2'>
                          <i className='fa-solid fa-x h-5 w-5'></i>
                        </Dialog.DismissTrigger>
                      </div>

                      <div className='overflow-y-auto'>
                        {renderTermsAndConditions()}
                      </div>

                      <div className='mt-12 flex w-full items-center justify-end gap-2'>
                        <Dialog.DismissTrigger
                          as={Button}
                          color='error'>
                          Cancel
                        </Dialog.DismissTrigger>
                      </div>
                    </Dialog.Content>
                  </Dialog.Overlay>
                </Dialog>
              </li>
            </ul>
          </div>
          <div className='mt-8 w-full md:mt-0 md:w-auto'>
            <Typography
              variant='h6'
              className='mb-3 text-center text-white'>
              Follow Us
            </Typography>
            <div className='flex flex-col gap-2'>
              <div className='gap-2 lg:flex lg:items-center text-center'>
                <Link
                  href=''
                  target='_blank'>
                  <IconButton
                    variant='ghost'
                    size='lg'>
                    <i className='fa-brands fa-kickstarter text-white'></i>
                  </IconButton>
                </Link>
                <Link
                  href='https://www.facebook.com/WaximoOfficial'
                  target='_blank'>
                  <IconButton
                    variant='ghost'
                    size='lg'>
                    <i className='fa-brands fa-facebook text-base text-white' />
                  </IconButton>
                </Link>
                <Link
                  href='https://www.instagram.com/waximoofficial/'
                  target='_blank'>
                  <IconButton
                    variant='ghost'
                    size='lg'>
                    <i className='fa-brands fa-instagram text-base text-white' />
                  </IconButton>
                </Link>
                <Link
                  href='https://www.linkedin.com/company/waximo/'
                  target='_blank'>
                  <IconButton
                    variant='ghost'
                    size='lg'>
                    <i className='fa-brands fa-linkedin text-white'></i>
                  </IconButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between'></div>
      </div>
    </footer>
  );
};

export default Footer;
