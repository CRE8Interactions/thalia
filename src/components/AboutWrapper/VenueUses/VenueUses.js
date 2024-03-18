import React from 'react';

import Card from 'react-bootstrap/Card'

export default function VenueUses() {

    return (
        <Card body className='card--light card-sm card--no-shadow'>
            <Card.Title as="h5">Venue Uses</Card.Title>
            <Card.Text>The hall has been pleased to provide to the citizens of Jackson and visitors a venue for education and entertainment by a variety of locally, nationally, and internationally known performers and personalities—including ballet, opera and symphony performances; plays; concerts; and presentations by local performing arts organizations.</Card.Text>
            <Card.Text>The Auditorium is available for rental to profit and not-for-profit, 501(c)(3) organizations, for theater-style performances and suitable special events.</Card.Text>
        </Card >
    );
}
