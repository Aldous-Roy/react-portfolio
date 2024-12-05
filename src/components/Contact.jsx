import React from 'react';
import { CONTACT } from '../constants';

const Contact = () => (
  <div className="border-b border-neutral-900 pb-20">
    <h2 className="text-4xl font-bold text-center my-10">Get In Touch</h2>
    <div className="text-center tracking-tight">
      <p className="my-4 text-lg text-neutral-600">{CONTACT.address}</p>
      <p className="my-4 text-lg text-neutral-600">
        <a
          href={`tel:${CONTACT.phoneNo}`}
          className="text-blue-600 hover:underline hover:text-blue-800"
        >
          {CONTACT.phoneNo}
        </a>
      </p>
      <p className="my-4 text-lg text-neutral-600">
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-blue-600 hover:underline hover:text-blue-800"
        >
          {CONTACT.email}
        </a>
      </p>
    </div>
  </div>
);

export default Contact;