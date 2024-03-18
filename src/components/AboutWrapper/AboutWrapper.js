'use client'

import React from 'react';

import Card from 'react-bootstrap/Card'

import { About } from './About';
import { BalletCompetition } from './BalletCompetition';
import { VenueUses } from './VenueUses';
import { Location } from './Location';
import { SeatingLayout } from './SeatingLayout';

export default function AboutWrapper() {
    return (
        <section className="spacer">
            <Card body>
                <About />
                <BalletCompetition />
                <VenueUses />
                <Location />
                <SeatingLayout />
            </Card>
        </section>
    );
}
