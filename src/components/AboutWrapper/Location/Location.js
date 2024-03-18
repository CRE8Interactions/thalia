import React from 'react';

import Card from 'react-bootstrap/Card'

export default function Location() {

    return (
        <Card body className='card--light card-sm card--no-shadow'>
            <Card.Title as="h5">Location</Card.Title>
            <Card.Text>
                <address>
                    <p>Thalia Mara Hall</p>
                    <p>255 E Pascagoula St, Jackson, MS 39201</p>
                </address>
            </Card.Text>
        </Card>
    );
}
