import * as React from 'react';
import Contact from '../components/Contact/contact';

function ContactList() {
    return <Contact></Contact>
  }

export default function ContactPage() {
    return (
        <div>
            <ContactList />
        </div>
    );
}