import React from 'react';

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

import { File } from './File';

export default function Packages() {

    return (
        <section>
            <Card body className='card--light card-sm'>
                <Card.Title as="h5" className='text-center'>Download our private event packages to learn more.</Card.Title>
                <Stack as="ul" direction="horizontal" gap={3} className='flex-wrap justify-content-center gap-lg-4'>
                    <File title="Private events" />
                    <File title="Weddings" />
                    <File title="Reunions" />
                    <File title="Sweet 16 / Prom" />
                </Stack>
            </Card>
        </section>
    );
}
