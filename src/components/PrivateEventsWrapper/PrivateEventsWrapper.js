'use client'

import React from 'react';

import { Header } from './Header';
import { Locations } from './Locations';
import { Packages } from './Packages';
import { About } from './About';

export default function PrivateEventsWrapper() {
    return (
        <section className="spacer">
            <Header />
            <Locations />
            <Packages />
            <About />
        </section>
    );
}
