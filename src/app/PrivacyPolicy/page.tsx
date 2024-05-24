"use client"; // Add this line at the top

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-5 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-4xl mb-5 text-green-800">Privacy Policy</h1>
      <section>
        <p className="mb-3">Last updated: May 19, 2024</p>
        <p className="mb-3">Welcome to OpenZone! We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at openzone@opensource.com.</p>
      </section>
      <section>
        <h2 className="text-2xl mt-5 mb-3">Information We Collect</h2>
        <p className="mb-3">We collect personal information that you provide to us, such as your name, email address, profile information, and contributions to open-source projects. We collect personal information when you register for our services, create or update your profile, and contribute to projects through our platform.</p>
      </section>
      <section>
        <h2 className="text-2xl mt-5 mb-3">How We Use Your Information</h2>
        <p className="mb-3">We use personal information collected via our platform for various business purposes described below. We process your personal information for these purposes based on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        <ul className="list-disc ml-5 mb-3">
          <li className="mb-2"><strong>To provide and maintain our services:</strong> We use your information to provide you with the services you request, including maintaining your user profile and tracking your contributions.</li>
          <li className="mb-2"><strong>To improve our services:</strong> We analyze how users interact with our platform to improve our services and develop new features.</li>
          <li className="mb-2"><strong>To communicate with you:</strong> We may send you updates, newsletters, and other information about your account or our services.</li>
          <li className="mb-2"><strong>To comply with legal obligations:</strong> We may process your data to comply with legal requirements or respond to lawful requests from public authorities.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl mt-5 mb-3">Sharing Your Information</h2>
        <p className="mb-3">We may process or share your data based on the following legal basis:</p>
        <ul className="list-disc ml-5 mb-3">
          <li className="mb-2"><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
          <li className="mb-2"><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
          <li className="mb-2"><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
          <li className="mb-2"><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl mt-5 mb-3">Security of Your Information</h2>
        <p className="mb-3">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
      </section>
      <section>
        <h2 className="text-2xl mt-5 mb-3">Your Data Protection Rights</h2>
        <p className="mb-3">You have certain rights under data protection laws regarding your personal information. These may include the right to access, correct, update, or delete your personal information. If you wish to exercise any of these rights, please contact us at openzone@opensource.com.</p>
      </section>
      <section>
        <h2 className="text-2xl mt-5 mb-3">Changes to This Privacy Policy</h2>
        <p className="mb-3">We may update this Privacy Policy from time to time in response to changing legal, technical, or business developments. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of our platform after any such changes constitutes your acceptance of the new terms.</p>
      </section>
      <section>
        <h2 className="text-2xl mt-5 mb-3">Contact Us</h2>
        <p className="mb-3">If you have any questions or comments about this policy, you may email us at openzone@opensource.com.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
