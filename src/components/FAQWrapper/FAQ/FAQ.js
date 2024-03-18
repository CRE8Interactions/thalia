import React from 'react';

import Card from 'react-bootstrap/Card'

export default function FAQ({ faq }) {

    return (
        <Card body className='card--light card-sm card--no-shadow'>
            <Card.Title as="h5">{faq?.question}</Card.Title>
            {faq?.answer?.split('\n')?.map((para, idx) => (
                <Card.Text key={idx}>{para}</Card.Text>
            ))}
        </Card>
    );
}
