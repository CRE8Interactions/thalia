import React from 'react';
import Image from 'next/image'

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

import about1 from '/public/images/venue_1.png';
import about2 from '/public/images/venue_2.png';
import about3 from '/public/images/venue_3.png';

export default function About() {

    return (
        <Card body className='card--light card-sm card--no-shadow'>
            <Card.Title as="h5">Thalia Mara Hall</Card.Title>
            <Card.Text>is the Municipal Auditorium of the City of Jackson and a facility managed by the Department of Human and Cultural Services.The 2,040 seat theater is located in the downtown arts and cultural district of Jackson. Thalia Mara Hall was built in 1968 and was called the Jackson Municipal Auditorium. In 1975, the Jackson Ballet Guild invited Miss Thalia Mara, a Chicago native with an extensive career as a performer in the United States and abroad, to develop a professional ballet company and school in the state of Mississippi.</Card.Text>
            <Stack className='flex-container flex-container-sm'>
                <Image
                    src={about1}
                    quality={100}
                    className="image"
                    alt="Thalia Mara Hall Lobby"
                    width="300"
                    height="231" />
                <Image
                    src={about2}
                    quality={100}
                    className="image"
                    alt="Thalia Mara Hall Stageview"
                    width="300"
                    height="231" />
                <Image
                    src={about3}
                    quality={100}
                    className="image"
                    alt="Thalia Mara Hall Seatview"
                    width="300"
                    height="231" />
            </Stack>
        </Card>
    );
}
