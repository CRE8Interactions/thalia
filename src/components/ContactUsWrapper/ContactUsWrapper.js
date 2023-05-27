'use client'

import React from 'react';

import { Contact } from './Contact';
import { Directions } from './Directions';
import { BoxOffice } from './BoxOffice';

export default function ContactUsWrapper() {
    return (
        <section className="spacer">
            <Contact />
            <Directions />
            <BoxOffice />
        </section>
    );
}
