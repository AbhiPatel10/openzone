"use client";

import React from 'react';
import styled from 'styled-components';

const TermsAndConditions = () => {
  return (
    <>
      <TermsWrapper>
          <h1>Terms and Conditions</h1>
          <section>
            <p>Last updated: May 19, 2024</p>
            <p>Welcome to OpenZone! These terms and conditions outline the rules and regulations for the use of the OpenZone platform. By accessing and using this platform, you accept these terms and conditions in full. Do not continue to use OpenZone if you do not agree to all of the terms and conditions stated on this page.</p>
          </section>
          <section>
            <h2>License to Use</h2>
            <p>Unless otherwise stated, OpenZone and/or its licensors own the intellectual property rights for all material on OpenZone. All intellectual property rights are reserved. You may access this from OpenZone for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from OpenZone</li>
              <li>Sell, rent, or sub-license material from OpenZone</li>
              <li>Reproduce, duplicate or copy material from OpenZone</li>
              <li>Redistribute content from OpenZone (unless the content is specifically made for redistribution)</li>
            </ul>
          </section>
          <section>
            <h2>User Contributions</h2>
            <p>Parts of this platform offer an opportunity for users to post and exchange opinions and information in certain areas of the website. OpenZone does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of OpenZone, its agents, and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, OpenZone shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
            <p>OpenZone reserves the right to monitor all Comments and to remove any Comments that can be considered inappropriate, offensive, or causes a breach of these Terms and Conditions.</p>
          </section>
          <section>
            <h2>Hyperlinking to our Content</h2>
            <p>The following organizations may link to our website without prior written approval:</p>
            <ul>
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>Online directory distributors may link to our website in the same manner as they hyperlink to the websites of other listed businesses; and</li>
              <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>
            <p>These organizations may link to our home page, to publications, or to other website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>
          </section>
          <section>
            <h2>iFrames</h2>
            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
          </section>
          <section>
            <h2>Content Liability</h2>
            <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
          </section>
          <section>
            <h2>Reservation of Rights</h2>
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
          </section>
          <section>
            <h2>Removal of links from our website</h2>
            <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
            <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
          </section>
          <section>
            <h2>Disclaimer</h2>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ul>
              <li>Limit or exclude our or your liability for death or personal injury</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
            </ul>
            <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</p>
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions or comments about these Terms and Conditions, you may email us at openzone@opensource.com.</p>
          </section>
      </TermsWrapper>
    </>
  );
};

const TermsWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #145A32;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  p {
    margin: 10px 0;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }

  li {
    margin: 10px 0;
  }
`;

export default TermsAndConditions;
