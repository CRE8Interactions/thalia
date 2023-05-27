'use client'

import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import { EventCard } from './EventCard';

export default function UpcomingEvents({ events }) {
    return (
        <>
            <div className="section-heading">
                <h1 className="heading">Upcoming events</h1>
            </div>
            <Row className='grid-container-lg g-md-4'>
                {events.map(event => (
                    <Col md={6} lg={4} key={event.id}>
                        <EventCard event={event} />
                    </Col>
                ))}
            </Row>
            <Stack className="mt-5 align-items-center">
                <Button variant="outline-light">
                    Load more
                </Button>
            </Stack>
        </>
    );
}
