import React from 'react';
import Image from 'next/image'

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

import mainLevel from '/public/images/seating-layout_main-level.png';
import upperLevel from '/public/images/seating-layout_upper-level.png';

export default function SeatingLayout() {

    return (
        <Card body className='card--light card-sm card--no-shadow'>
            <Card.Title as="h5">Seating Layout</Card.Title>
            <Stack className='flex-container'>
                <Image
                    src={mainLevel}
                    quality={100}
                    className="image"
                    alt="Thalia Mara Hall Main Seating Level"
                    width="300"
                    height="231" />
                <Image
                    src={upperLevel}
                    quality={100}
                    className="image"
                    alt="Thalia Mara Hall Upper Seating Level"
                    width="300"
                    height="231" />
            </Stack>
        </Card>
    );
}
